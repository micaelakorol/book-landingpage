import React from "react";
import { BtnContactUs, Inputs } from "../../styled-components/ContactUs";
import InputValidation from "./Functions/InputValidation";

const Input = ({ alert, setAlert }) => {
  const { handleChange,handleSubmit,validation,inputValue} = InputValidation()
  const {email} = inputValue

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
        <BtnContactUs type="submit" onClick={() => validation(setAlert)} alert={alert}>
          Contact Us
        </BtnContactUs>
      </form>
    </>
  );
};

export default Input;
