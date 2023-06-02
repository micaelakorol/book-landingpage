import React from "react";
import { Error } from "../../styled-components/ContactUs";

const Alert = ({ alert }) => {
  return (
    <div>
      {alert && <Error alert={alert}> Whoops,make sure it's an email</Error>}
    </div>
  );
};

export default Alert;
