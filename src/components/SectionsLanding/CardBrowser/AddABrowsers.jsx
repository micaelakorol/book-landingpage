import React from "react";
import {
  ContainerFeatures,
  PFeatures,
  TitleFeatures,
} from "../../../styled-components/Features";
import CardBrowsers from "./CardBrowsers";

const AddABrowsers = () => {
  return (
    <>
      <ContainerFeatures>
        <TitleFeatures as="h3">Download the extension</TitleFeatures>
        <PFeatures as="p">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </PFeatures>
      </ContainerFeatures>
      <CardBrowsers />
    </>
  );
};

export default AddABrowsers;
