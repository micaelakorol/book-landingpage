import React from "react";
import { Error } from "../../styled-components/ContactUs";
const Alert = ({ alert }) => {
  return (
    <p>
      {alert && <Error alert={alert}> Whoops,make sure it's an email</Error>}
    </p>
  );
};

export default Alert;
