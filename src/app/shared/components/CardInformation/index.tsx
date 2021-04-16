import * as PropTypes from 'prop-types';
import * as React from 'react';
import { IRoom } from '../../../feature/Rooms/models/Room';
import { Link } from '../Link';

interface CardInformationProps {
  /**
   * Información de cada habitación
   */
  data: IRoom;
  /**
   * Función necargada de mostrar el detalle de la habitación
   */
  loadDetailRoom?: (roomId: number) => void;
  /**
   * Identificador de la habitación seleccionada
   */
  selectedRoom?: number;
}

export const CardInformation: React.FC<CardInformationProps> = ({
  data,
  loadDetailRoom,
  selectedRoom,
}) => {
  console.log(selectedRoom);
  return (
    <div className="card room-item">
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
                  <button
                    type="button"
                    className="btn btn-primary btn-book w-100"
                    onClick={() => null}
                  >
                    <i className="far fa-calendar-check ml-3"></i>
                    {' Reservar'}
                  </button>
                ) : (
                  <Link to={'/detail'} replace={true}>
                    <button
                      type="button"
                      className="btn btn-primary btn-book w-100"
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
              <div className="mb-3">
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
                  label={'camas'}
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

interface CustomFieldProps {
  /**
   * Título del campo
   */
  label: string;
  /**
   * Icono a mostrar
   */
  icon: string;
  /**
   * Indica si cuenta o no con la propiedad
   */
  value?: boolean;
  /**
   * Valor de la propiedad en texto
   */
  valueText?: string;
}

/**
 * Componente encargado de renderizar cada item de la card con su respectivo icono y valor
 * @param param0
 * @returns Sección con item y valor de la habitación
 */
const CustomField: React.FC<CustomFieldProps> = ({
  label,
  icon,
  value,
  valueText,
}) => {
  return (
    <h6 className="font-weight-bold">
      {label} <i className={`fas ${icon}`}></i> :{' '}
      {valueText && valueText !== '' ? (
        valueText
      ) : value !== undefined && value === true ? (
        <i className="fas fa-check"></i>
      ) : (
        <i className="fas fa-times"></i>
      )}
    </h6>
  );
};

interface StarScoreProps {
  /**
   * Cantidad de estrellas del hotel
   */
  score: number;
}
/**
 * Componente encargado de renderizar estrellas según el nivel del hotel
 */
const StarScore: React.FC<StarScoreProps> = ({ score }) => {
  const arrStar = new Array(score);
  arrStar.fill('star', 0);
  console.log(arrStar);
  return (
    <>
      {score &&
        arrStar.map((data, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
    </>
  );
};
