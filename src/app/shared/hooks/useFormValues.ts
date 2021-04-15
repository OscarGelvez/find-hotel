import { ChangeEvent, useState } from 'react';

interface fieldsForm {
  capacity: string;
  withAir: boolean;
  withParking: boolean;
}

export const useForm = (initialState: fieldsForm) => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, handleInputChange, reset };
};
