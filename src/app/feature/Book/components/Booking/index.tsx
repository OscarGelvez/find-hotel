import { fieldsFormFindBooking } from 'app/feature/Rooms/models/Room';
import { Button } from 'app/shared/components/Button';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';

interface BookingDetail {
  onFindBooking: (findBookingData: fieldsFormFindBooking) => void;
}

const initialValues = {
  email: '',
  identification_type: '',
  identification: '',
};

const validationSchema = Yup.object().shape<fieldsFormFindBooking>({
  email: Yup.string().email('Email no válido').required('Necesitamos tu email'),
  identification_type: Yup.string().required(
    'Necesitamos tu tipo de identificación'
  ),
  identification: Yup.string().required('Necesitamos tu identificación'),
});

export const BookingDetail: React.FC<BookingDetail> = ({ onFindBooking }) => {
  const handleSubmit = (
    values: fieldsFormFindBooking,
    { resetForm }: FormikHelpers<fieldsFormFindBooking>
  ) => {
    onFindBooking({
      email: values.email,
      identification_type: values.identification_type,
      identification: values.identification,
    });
    resetForm();
  };
  return (
    <>
      <div data-testid="find-rooms" className="card-rooms">
        <div className="row">
          <div className="card filter-area ">
            <div className="col">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form data-testid="form-find-rooms">
                    <div className="form-group row mb-3 mt-3">
                      <div className=" col-12 col-md-4">
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
                          <small className="text-danger">{errors.email}</small>
                        ) : null}
                      </div>
                      <div className="col-12 col-md-4">
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
                      <div className=" col-12 col-md-4">
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
                    <div className="row text-center">
                      <Button type="submit" className="btn ">
                        Buscar
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BookingDetail.propTypes = {
  // msg: PropTypes.string.isRequired,
};
