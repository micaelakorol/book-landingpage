import React from "react";
import { TitleFeatures, PFeatures } from "../../styled-components/Features";

const TitleQuestions = () => {
  return (
    <>
      <TitleFeatures as="h3">Frequently asked Questions</TitleFeatures>
      <PFeatures as="p">
        Here are some of our FAQs. If you have any other questions you'd like
        answered please feel free to email us.
      </PFeatures>
    </>
  );
};

export default TitleQuestions;
