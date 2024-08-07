import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback) {
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    setFormValues(initialValues);
  }, []);

  const changeHandler = (event) => {
    setFormValues((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await submitCallback(formValues);
    setFormValues(initialValues);
  };

  return {
    formValues,
    changeHandler,
    submitHandler,
  };
}
