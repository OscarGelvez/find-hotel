import { Field, Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';

import { IRoom } from '../../../feature/Rooms/models/Room';
import {
  IBooking,
  IFieldsFormBooking,
} from '../../../feature/Book/models/Booking';
import { CustomField } from '../CustomFieldIcon';
import { Link } from '../Link';

interface ICardInformationProps {
  /**
   * Información de cada habitación
   */
  data: IRoom;
  /**
   * Identificador de la habitación seleccionada (existe cuando se visualiza como detalle)
   */
  selectedRoom?: number;
  /**
   * Función necargada de mostrar el detalle de la habitación
   */
  loadDetailRoom?: (roomId: number) => void;
  /**
   * Función encargada de registrar la reservación (existe cuando se visualiza como detalle)
   */
  saveBookingRoom?: (bookingData: IBooking) => void;
}

/**
 * Shape Objeto habitación
 */
const roomShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
  ac: PropTypes.string.isRequired,
  parking: PropTypes.string.isRequired,
  available_from: PropTypes.string.isRequired,
  available_until: PropTypes.string.isRequired,
  wifi: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
/**
 * Componente encargado de renderizar Card con información de la habitación
 * @param param0
 * @returns
 */
export const CardInformation: React.FC<ICardInformationProps> = ({
  data,
  loadDetailRoom,
  selectedRoom,
  saveBookingRoom,
}) => {
  return (
    <div data-testid="card-information" className="card room-item">
      <div className="card-header room-item-header ">
        <h3>{data.hotel.name}</h3>
        <h4>{data.hotel.score}</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col col-md-4">
            <img
              src={data.image}
              className="img-fluid"
              alt="hotel room"
              width="260px"
              height="180px"
            />
          </div>
          <div className="col col-md-8">
            <div className="row">
              <div className="col-12 col-lg-8">
                <h5 className="card-title">{data.title}</h5>
              </div>
              <div className="col-12 col-lg-4">
                {selectedRoom && selectedRoom !== -1 ? (
                  <>
                    <ModalFormBook
                      saveBookingRoom={saveBookingRoom}
                      dataRoom={data}
                    />
                  </>
                ) : (
                  <Link to={'/rooms/detail'}>
                    <button
                      type="button"
                      className="btn btn-primary btn-book w-100"
                      data-testid="form-button-load-detail"
                      onClick={() => loadDetailRoom && loadDetailRoom(data.id)}
                    >
                      <i className="far fa-calendar-check ml-3"></i>
                      {' Seleccionar'}
                    </button>
                  </Link>
                )}
              </div>
              <div className="col-12 col-md-12">
                <h4>
                  <i className="far fa-money-bill-alt"></i> {data.value}
                </h4>
              </div>
              <div className="col-12 col-md-12 d-flex">
                <CustomField
                  label={'Inicio'}
                  icon="fa-calendar-alt"
                  valueText={data.available_from}
                />

                <CustomField
                  label={'-  Fin'}
                  icon="fa-calendar-alt"
                  valueText={data.available_until}
                />
              </div>
            </div>
            <p className="card-text">{data.description}</p>
            {selectedRoom && selectedRoom !== -1 && (
              <div className="mb-3" data-testid="form-field-hotel-desc">
                <p className="card-text">{data.hotel.description}</p>
                <CustomField
                  label={'Dirección'}
                  icon="fa-map-marked-alt"
                  valueText={`${data.hotel.address}`}
                />
              </div>
            )}

            <div className="row">
              <div className="col col-md-6">
                <CustomField
                  label={'Camas'}
                  icon="fa-bed"
                  valueText={`${data.capacity}`}
                />

                <CustomField
                  label={'Aire'}
                  icon="fa-wind"
                  value={data.ac === 'Y'}
                />

                <CustomField
                  label={'Wifi'}
                  icon="fa-wifi"
                  value={data.wifi === 'Y'}
                />
              </div>
              <div className="col col-md-6">
                <CustomField
                  label={'Parqueadero'}
                  icon="fa-car"
                  value={data.parking === 'Y'}
                />
                <CustomField label={'Baños'} icon="fa-restroom" value={true} />

                {selectedRoom && selectedRoom !== -1 && (
                  <StarScore score={data.hotel.stars} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardInformation.propTypes = {
  data: PropTypes.shape(roomShape).isRequired,
  selectedRoom: PropTypes.number,
  loadDetailRoom: PropTypes.func,
  saveBookingRoom: PropTypes.func,
};

interface IModalFormBookProps {
  /**
   * Información de la reserva a registrar
   */
  saveBookingRoom?: (bookingData: IBooking) => void;
  /**
   * Información de la habitación
   */
  dataRoom: IRoom;
}

const initialValues = {
  name: '',
  email: '',
  identification_type: '',
  identification: '',
};

const validationSchema = Yup.object().shape<IFieldsFormBooking>({
  name: Yup.string()
    .min(2, 'Nombre muy corto')
    .max(50, 'Nombre muy largo')
    .required('Nacesitamos tu nombre'),
  email: Yup.string().email('Email no válido').required('Necesitamos tu email'),
  identification_type: Yup.string().required(
    'Necesitamos tu tipo de identificación'
  ),
  identification: Yup.string().required('Necesitamos tu identificación'),
});

/**
 * Componente encargado de renderizar el modal con el formulario de reservación
 * de la habitación
 * @param param0
 * @returns
 */
const ModalFormBook: React.FC<IModalFormBookProps> = ({
  saveBookingRoom,
  dataRoom,
}) => {
  const handleSubmit = (
    values: IFieldsFormBooking,
    { resetForm }: FormikHelpers<IFieldsFormBooking>
  ) => {
    saveBookingRoom &&
      saveBookingRoom({
        bookData: {
          name: values.name,
          email: values.email,
          identification_type: values.identification_type,
          identification: values.identification,
        },
        roomData: dataRoom,
      });
    resetForm();
  };

  return (
    <>
      <div data-testid="modal-form-book">
        <button
          type="button"
          className="btn btn-primary btn-book w-100"
          data-bs-toggle="modal"
          data-bs-target="#modalFormBook"
        >
          <i className="far fa-calendar-check ml-3"></i>
          {' Reservar'}
        </button>

        <div
          className="modal fade"
          id="modalFormBook"
          aria-labelledby="modalFormBookLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalFormBookLabel">
                  Completa tu reserva
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="row mb-3">
                        <div className="col-12 col-md-6 ">
                          <label
                            htmlFor="name"
                            className="col-12 col-form-label"
                          >
                            Nombre
                          </label>
                          <Field
                            name="name"
                            className="form-control col-12"
                            placeholder="eje: Joe Doe"
                          />
                          {errors.name && touched.name ? (
                            <small className="text-danger">{errors.name}</small>
                          ) : null}
                        </div>
                        <div className=" col-12 col-md-6">
                          <label
                            htmlFor="email"
                            className="col-12 col-form-label"
                          >
                            Correo electrónico
                          </label>
                          <Field
                            name="email"
                            type="email"
                            className="form-control col-12"
                            placeholder="eje: joe@email.com"
                          />
                          {errors.email && touched.email ? (
                            <small className="text-danger">
                              {errors.email}
                            </small>
                          ) : null}
                        </div>
                      </div>
                      <div className="row mb-2">
                        <div className="col-12 col-md-6 ">
                          <label className="pr-2" htmlFor="identification_type">
                            Tipo de identificación
                          </label>
                          <Field
                            as="select"
                            className=" d-block w-100"
                            aria-label=".form-select-sm example"
                            id="identification_type"
                            name="identification_type"
                          >
                            <option value="">Seleccione</option>
                            <option value="1">Cédula de ciudadanía</option>
                            <option value="2">Cédula de extranjeria</option>
                            <option value="3">Nit</option>
                            <option value="4">Pasaporte</option>
                          </Field>
                          {errors.identification_type &&
                          touched.identification_type ? (
                            <small className="text-danger">
                              {errors.identification_type}
                            </small>
                          ) : null}
                        </div>
                        <div className=" col-12 col-md-6">
                          <label className="pr-2" htmlFor="identification">
                            Identificación
                          </label>
                          <Field
                            name="identification"
                            className="form-control"
                            placeholder="eje: 60830147"
                          />
                          {errors.identification && touched.identification ? (
                            <small className="text-danger">
                              {errors.identification}
                            </small>
                          ) : null}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between mt-3">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Cancelar
                        </button>
                        <button type="submit" className="btn btn-primary">
                          Finalizar
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ModalFormBook.propTypes = {
  dataRoom: PropTypes.shape(roomShape).isRequired,
  saveBookingRoom: PropTypes.func,
};

interface IStarScoreProps {
  /**
   * Cantidad de estrellas del hotel
   */
  score: number;
}

/**
 * Componente encargado de renderizar estrellas según el nivel del hotel
 */
const StarScore: React.FC<IStarScoreProps> = ({ score }) => {
  const arrStar = new Array(score);
  arrStar.fill('star', 0);
  return (
    <>
      <div data-testid="star-score">
        {score &&
          arrStar.map((data, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
      </div>
    </>
  );
};

StarScore.propTypes = {
  score: PropTypes.number.isRequired,
};
