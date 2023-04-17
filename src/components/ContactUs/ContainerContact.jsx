import React, { useState } from "react";
import { Container, PContact, Title } from "../../styled-components/ContactUs";
import Input from "./Input";
import Alert from "./Alert";

const ContainerContact = () => {
  const [alert, setAlert] = useState(false);

  return (
    <Container>
      <PContact>35,000 + already joined</PContact>
      <Title>Stay up-do-date with what we're doing</Title>
      <Input alert={alert} setAlert={setAlert} />
      <Alert alert={alert} setAlert={setAlert} />
    </Container>
  );
};

export default ContainerContact;
