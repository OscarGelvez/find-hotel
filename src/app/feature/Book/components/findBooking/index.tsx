import { IFieldsFormFindBooking } from 'app/feature/Book/models/Booking';
import { Button } from 'app/shared/components/Button';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';

interface IFindBookingForm {
  onFindBooking: (findBookingData: IFieldsFormFindBooking) => void;
}

const initialValues = {
  email: '',
  identification_type: '',
  identification: '',
};

const validationSchema = Yup.object().shape<IFieldsFormFindBooking>({
  email: Yup.string().email('Email no válido').required('Necesitamos tu email'),
  identification_type: Yup.string().required(
    'Necesitamos tu tipo de identificación'
  ),
  identification: Yup.string().required('Necesitamos tu identificación'),
});

export const FindBookingForm: React.FC<IFindBookingForm> = ({
  onFindBooking,
}) => {
  const handleSubmit = (
    values: IFieldsFormFindBooking,
    { resetForm }: FormikHelpers<IFieldsFormFindBooking>
  ) => {
    onFindBooking({
      email: values.email,
      identification_type: values.identification_type,
      identification: values.identification,
    });
  };
  return (
    <>
      <div data-testid="find-bookings" className="card-rooms">
        <div className="row">
          <div className="card filter-area ">
            <h4 className="mt-3">Encuentra tu reserva</h4>
            <div className="col">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <Form data-testid="form-find-bookings">
                    <div className="form-group row mb-3 mt-3">
                      <div className=" col-12 col-md-4">
                        <label
                          htmlFor="email"
                          className="col-12 col-form-label"
                        >
                          Correo electrónico*
                        </label>
                        <Field
                          name="email"
                          data-testid="form-bookings-email"
                          type="email"
                          className="form-control col-12"
                          placeholder="eje: joe@email.com"
                        />
                        {errors.email && touched.email ? (
                          <small className="text-danger">{errors.email}</small>
                        ) : null}
                      </div>
                      <div className="col-12 col-md-4">
                        <label
                          className="col-12 col-form-label"
                          htmlFor="identification_type"
                        >
                          Tipo de identificación*
                        </label>
                        <Field
                          as="select"
                          className=" d-block w-100"
                          data-testid="form-bookings-identification_type"
                          aria-label=".form-select"
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
                        <label
                          className="col-12 col-form-label"
                          htmlFor="identification"
                        >
                          Identificación*
                        </label>
                        <Field
                          name="identification"
                          id="identification"
                          className="form-control"
                          data-testid="form-bookings-identification"
                          placeholder="eje: 60830147"
                        />
                        {errors.identification && touched.identification ? (
                          <small className="text-danger">
                            {errors.identification}
                          </small>
                        ) : null}
                      </div>
                    </div>
                    <div className="row">
                      <div className="mt-4 text-center">
                        <Button
                          type="submit"
                          className="btn w-75"
                          data-testid="form-bookings-btn-submit"
                        >
                          Buscar
                        </Button>
                      </div>
                      <div className="text-center mb-2 mt-1">
                        <Button
                          className="button-link"
                          data-testid="form-bookings-btn-reset"
                          type="reset"
                        >
                          limpiar
                        </Button>
                      </div>
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

FindBookingForm.propTypes = {
  onFindBooking: PropTypes.func.isRequired,
};
