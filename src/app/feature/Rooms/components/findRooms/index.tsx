import { Button } from 'app/shared/components/Button';
import { Field, Form, Formik } from 'formik';
import { FormikHelpers } from 'formik/dist/types';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as Yup from 'yup';

import { getNextDate } from '../../../../shared/utils/GetNextDateValid';
import { IFieldsForm } from '../../models/Room';

export interface IFindRoomsProps {
  onSubmit: (payload: IFieldsForm) => void;
  listAvailableRooms: () => void;
}

const initialValues = {
  fromDate: '',
  untilDate: '',
  capacity: '',
  withAir: false,
};

const validationSchema = Yup.object().shape<IFieldsForm>({
  fromDate: Yup.string().notRequired(),
  untilDate: Yup.string().notRequired(),
  capacity: Yup.string().notRequired(),
  withAir: Yup.boolean().notRequired(),
  withParking: Yup.boolean().notRequired(),
});

export const FindRooms: React.FC<IFindRoomsProps> = ({
  onSubmit,
  listAvailableRooms,
}) => {
  const handleSubmit = (values: IFieldsForm) => {
    onSubmit({
      fromDate: fromDate,
      untilDate: values.untilDate,
      capacity: values.capacity,
      withAir: values.withAir,
      withParking: values.withParking,
    });
  };

  const handleReset = (
    values: IFieldsForm,
    { resetForm }: FormikHelpers<IFieldsForm>
  ) => {
    setFromDate('');
    listAvailableRooms();
  };
  const currentDate = new Date();
  const minDate = currentDate.toISOString().split('T')[0];
  const [fromDate, setFromDate] = React.useState('');

  const nextDate = getNextDate(currentDate, fromDate, minDate);
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
                onReset={handleReset}
              >
                <Form data-testid="form-find-rooms">
                  <div className="form-group row mb-3 mt-3">
                    <label
                      htmlFor="fromDate"
                      className="col-12 col-sm-6 col-lg-2 col-form-label"
                    >
                      Fecha de ingreso*
                    </label>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <Field
                        className="form-control"
                        data-testid="form-fromDate"
                        type="date"
                        name="fromDate"
                        id="fromDate"
                        min={minDate}
                        value={fromDate}
                        required
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFromDate(e.target.value);
                        }}
                      />
                    </div>
                    <label
                      htmlFor="untilDate"
                      className="col-12  col-sm-6 col-lg-2 col-form-label"
                    >
                      Fecha de salida*
                    </label>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <Field
                        className="form-control"
                        data-testid="form-untilDate"
                        type="date"
                        name="untilDate"
                        id="untilDate"
                        required
                        min={nextDate}
                      />
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="d-flex col-12 col-sm-6 col-lg-4 text-center">
                      <label className="pr-2" htmlFor="capacity">
                        Personas
                      </label>
                      <Field
                        component="select"
                        className=" filter-select"
                        data-testid="form-capacity"
                        aria-label=".form-select-sm example"
                        id="capacity"
                        name="capacity"
                      >
                        <option value="">Seleccione</option>
                        <option value="1">1 adulto</option>
                        <option value="2">2 adultos</option>
                        <option value="3">3 adultos</option>
                        <option value="4">4 adultos</option>
                      </Field>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-4 text-md-center ">
                      <Field
                        type="checkbox"
                        className="m-2"
                        data-testid="form-withAir"
                        aria-label="Checkbox find room with air"
                        name="withAir"
                        id="withAir"
                      />
                      <label className="cursor-pointer" htmlFor="withAir">
                        ¿Aire acondicionado?
                      </label>
                    </div>

                    <div className="col-12 col-lg-4 mt-sm-2 mt-md-0">
                      <Field
                        type="checkbox"
                        className="m-2"
                        data-testid="form-withParking"
                        aria-label="Checkbox  find room with parking"
                        name="withParking"
                        id="withParking"
                      />
                      <label className="cursor-pointer" htmlFor="withParking">
                        ¿Parqueadero?
                      </label>
                    </div>
                  </div>
                  <div className="text-center mt-5">
                    <Button
                      className=" w-50"
                      data-testid="form-button-find"
                      type="submit"
                    >
                      Encuentralo!
                    </Button>
                  </div>
                  <div className="text-center mb-4 mt-1">
                    <Button
                      className="button-link"
                      data-testid="form-button-reset"
                      type="reset"
                    >
                      limpiar
                    </Button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FindRooms.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  listAvailableRooms: PropTypes.func.isRequired,
};
