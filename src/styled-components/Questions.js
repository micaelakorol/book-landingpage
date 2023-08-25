import styled from "styled-components";
import { Color } from "./Color";
import { Btn } from "../pages/styled-components/Simple";

const ContainerQuestion = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  margin-top: 3rem;
  hr {
    width: 45%;
    text-align: center;
    margin: auto;
  }
  @media (max-width: 480px) {
    hr {
      width: 100vw;
    }
  }
`;

const Summary = styled.summary`
  color: ${Color.veryDarkBlue};
  padding: 0.4rem;
  width: 44vw;
  margin: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  ::marker {
    list-style: none;
    color: hsl(231, 69%, 60%);
  }
  @media (max-width: 480px) {
    width: 100vw;
  }
`;

const PSummary = styled.p`
  color: ${Color.gray};
  font-size: 0.8rem;
  text-align: start;
  margin-left: 1.2rem;
`;

const BtnQuestions = styled(Btn)`
  margin: 1rem 0 4rem 0;
`;

export { ContainerQuestion, Summary, PSummary, BtnQuestions };
