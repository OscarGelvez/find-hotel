import * as React from 'react';
import * as Yup from 'yup';
import { FormikHelpers } from 'formik/dist/types';
import { Field, Form, Formik } from 'formik';
import { Button } from 'app/shared/components/Button';
import { fieldsForm } from '../../models/Room';

export interface FindRoomsProps {
  onSubmit: (payload: fieldsForm) => any;
}

const initialValues = {
  fromDate: '',
  untilDate: '',
  capacity: '',
  withAir: false,
};

const validationSchema = Yup.object().shape<fieldsForm>({
  fromDate: Yup.string().notRequired(),
  untilDate: Yup.string().notRequired(),
  capacity: Yup.string().notRequired(),
  withAir: Yup.boolean().notRequired(),
  withParking: Yup.boolean().notRequired(),
});

export const FindRooms: React.FC<FindRoomsProps> = ({ onSubmit }) => {
  const handleSubmit = (values: fieldsForm) => {
    console.log('values submit ', values);
    onSubmit({
      fromDate: fromDate,
      untilDate: values.untilDate,
      capacity: values.capacity,
      withAir: values.withAir,
      withParking: values.withParking,
    });
  };

  const handleReset = (
    values: fieldsForm,
    { resetForm }: FormikHelpers<fieldsForm>
  ) => {
    setFromDate('');
  };
  const currentDate = new Date();
  const minDate = currentDate.toISOString().split('T')[0];
  const [fromDate, setFromDate] = React.useState('');

  /**
   * Valida la siguiente fecha valida del campo Fecha de salida
   * según la fecha seleccionada en el campo Fecha ingreso
   * @returns fecha mínima del campo Fecha de salida
   */
  const getNextDate = () => {
    if (fromDate === minDate) {
      currentDate.setDate(currentDate.getDate() + 1);
      return currentDate.toISOString().split('T')[0];
    } else {
      const auxDate = fromDate !== '' ? new Date(fromDate) : currentDate;
      auxDate.setDate(auxDate.getDate() + 1);
      return auxDate.toISOString().split('T')[0];
    }
  };

  const nextDate = getNextDate();
  return (
    <>
      <div className="card-rooms">
        <div className="row">
          <div className="card filter-area ">
            <div className="col">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                onReset={handleReset}
              >
                <Form>
                  <div className="form-group row mb-3 mt-3">
                    <label
                      htmlFor="fromDate"
                      className="col-12 col-sm-6 col-lg-2 col-form-label"
                    >
                      Fecha de ingreso
                    </label>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <Field
                        className="form-control"
                        type="date"
                        name="fromDate"
                        id="fromDate"
                        min={minDate}
                        value={fromDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setFromDate(e.target.value);
                        }}
                      />
                    </div>
                    <label
                      htmlFor="untilDate"
                      className="col-12  col-sm-6 col-lg-2 col-form-label"
                    >
                      Fecha de salida
                    </label>
                    <div className="col-12 col-sm-6 col-lg-4">
                      <Field
                        className="form-control"
                        type="date"
                        name="untilDate"
                        id="untilDate"
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
                    <Button className=" w-50" type="submit">
                      Encuentralo!
                    </Button>
                  </div>
                  <div className="text-center mb-4 mt-1">
                    <Button className="button-link" type="reset">
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
