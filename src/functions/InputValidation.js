import { useState } from "react";

const InputValidation = () => {
  let expEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
  const [inputValue, setInputValue] = useState({email:""});

  const validation = (setAlert) => {
    if (!expEmail.test(inputValue)) {
      setAlert(true);
      return;
    }
  };
  const handleChange = (e) => {
    setInputValue((old) => ({
      ...old,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue({email:""})
  };
  return {
    handleChange,
    handleSubmit,
    validation,
    inputValue,
  };
};

export default InputValidation;
