import React, { useState } from "react";
import { initialValue } from "./initialState";
import { BtnContactUs, Inputs } from "../../styled-components/ContactUs";

const Input = ({ alert, setAlert }) => {
  let expEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;

  const [inputValue, setInputValue] = useState(initialValue);
  const { email } = inputValue;

  const validation = () => {
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

  const handleSubmit = () => {
    e.preventDefault();
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Inputs alert={alert}
          type="email"
          name="email"
          placeholder="Enter your email address"
          onChange={handleChange}
          value={email}
          required
          aria-required="true"
          onClick={() => setAlert(false)}
        />
        <BtnContactUs type="submit" onClick={() => validation()} alert={alert}>
          Contact Us
        </BtnContactUs>
      </form>
    </>
  );
};

export default Input;
