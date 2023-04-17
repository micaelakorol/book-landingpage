import styled from "styled-components";
import { PFeatures, TitleFeatures } from "./Features";

const ContainerCard = styled.article`
  display: grid;
  grid-template-columns: repeat(3, 25%);
  place-items: center;
  justify-content: center;
  margin-top: 1rem;
  button {
    width: 75%;
    font-size: .7rem;
  }
  .card-two {
    margin-top: 3rem;
  }
  .card-three {
    margin-top: 5rem;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    .card-two,
    .card-three {
      margin: 0;
    }
  }
`;

const Card = styled.section`
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  max-width: 100vw;
  margin: 1rem;
  max-height: 100vh;
  padding: 1rem 0;
  text-align: center;
`;

const TitleCard = styled(TitleFeatures)`
  font-size: 0.9rem;
  margin: 0.5rem;
`;

const BodyCard = styled(PFeatures)`
  font-size: 0.8rem;
  width: 100%;
  margin: 0 0 0.3rem 0;
`;


export { ContainerCard, Card, TitleCard, BodyCard };
