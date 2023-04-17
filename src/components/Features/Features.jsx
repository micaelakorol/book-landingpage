import React from "react";
import {
  ContainerFeatures,
  PFeatures,
  TitleFeatures,
} from "../../styled-components/Features";
import BookMarkOptions from "./BookMarkOptions";

const Features = () => {
  return (
    <>
      <ContainerFeatures>
        <TitleFeatures>Features</TitleFeatures>
        <PFeatures as='p'>
         Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </PFeatures>
      </ContainerFeatures>
      <BookMarkOptions />
    </>
  );
};

export default Features;
