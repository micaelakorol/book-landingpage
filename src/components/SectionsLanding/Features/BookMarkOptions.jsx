import React from "react";
import {
  Options,
  Container,
  Line,
} from "../../../styled-components/BookMarkOptions";
import { Outlet } from "react-router-dom";

const BookMarkOptions = () => {
  return (
    <>
      <Container>
        <Options to="/">Simple BookMarking</Options>
        <Options to="/speedy">Speedy Searching</Options>
        <Options to="/easy">Easy Sharing</Options>
      </Container>
      <Line />
      <Outlet />
    </>
  );
};

export default BookMarkOptions;
