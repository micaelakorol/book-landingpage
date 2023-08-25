import React, { useState } from "react";
import { BtnContactUs, Inputs } from "../../../styled-components/ContactUs";

const Input = ({ alert, setAlert }) => {
  const [inputEmail, setInputEmail] = useState("");
  const handleSubmit = () => {
    e.preventDefault();
    setInputEmail("");
  };
  const validation = () => {
    let expEmail = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
  if (!expEmail.test(inputEmail)) {
    setAlert(true);
    return;
  }
};
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <Inputs
          alert={alert}
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
          required
          aria-required="true"
          onClick={() => setAlert(false)}
        />
        <BtnContactUs type="submit" alert={alert} onClick={validation}>
          Contact Us
        </BtnContactUs>
      </form>
    </>
  );
};

export default Input;
