import styled from "styled-components";
import { Color } from "./Color";

const ContainerPrincipal = styled.main`
  width: 100vw;
  display: grid;
  padding-left: 3.4rem;
  margin-top: 2rem;
  grid-template-columns: repeat(2, 50%);
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding-left:0;
    h1,
    h2 {
      width: 100vw;
    }
  }
`;

const InformationPrincipal = styled.article`
  width: 80%;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    width: 100%;
    text-align: center;
  }
`;
const TitlePrincipal = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  margin: 1rem 0;
  color: ${Color.veryDarkBlue};
`;

const Description = styled.h2`
  font-weight: 300;
  color: ${Color.grayishBlue};
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const ButtonChrome = styled.button`
  margin: 0.2rem 0.5rem;
  border-radius: 0.3rem;
  max-width: 100vw;
  max-height: 100vh;
  background-color: ${Color.blue};
  font-weight: 500;
  color: ${Color.white};
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border: 1.5px solid transparent;
  &:hover {
    background: ${Color.white};
    border: 1.5px solid ${Color.blue};
    color: ${Color.blue};
  }
`;

const ButtonFirefox = styled(ButtonChrome)`
  color: ${Color.grayishBlue};
  background: ${Color.bgBtn};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    background: ${Color.white};
    color: ${Color.grayishBlue};
    border: 1.5px solid ${Color.veryDarkBlue};
  }
`;


const Shape = styled.p`
  background: ${Color.blue};
  height: 60%;
  position: relative;
  left: 3rem;
  bottom: 14rem;
  z-index: -1;
  border-radius: 20rem 0 0 20rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export {
  ContainerPrincipal,
  InformationPrincipal,
  TitlePrincipal,
  Description,
  ButtonChrome,
  ButtonFirefox,
  Shape,
};
