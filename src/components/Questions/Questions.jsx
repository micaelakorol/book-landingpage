import React from "react";
import TitleQuestions from "./TitleQuestions";
import dataQuestions from "./dataQuestions/dataQuestions";
import {
  BtnQuestions,
  ContainerQuestion,
  PSummary,
  Summary,
} from "../../styled-components/Questions";
const Questions = () => {
  let data = dataQuestions.items;

  return (
    <>
      <ContainerQuestion>
        <TitleQuestions />
        <hr />
        {data.map((item) => (
          <>
            <details key={item.id}>
              <Summary>{item.question}</Summary>
              <PSummary>{item.description}</PSummary>
            </details>
            <hr />
          </>
        ))}
        <BtnQuestions>More Info</BtnQuestions>
      </ContainerQuestion>
    </>
  );
};

export default Questions;
