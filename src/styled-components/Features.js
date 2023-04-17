import styled from "styled-components";
import { Color } from "./Color";
import { Description } from "./PresentationBookMark";

const ContainerFeatures = styled.section`
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-top: 0;
    h2{
        font-size: 1.7rem;
    }
  }
`;

const TitleFeatures = styled.h2`
  text-align: center;
  color: ${Color.veryDarkBlue};
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 1rem;
  @media(max-width:768px){
    margin-top: 1rem;
    font-size: 1.4rem;
  }
`;

const PFeatures = styled(Description)`
  text-align: center;
  width: 40%;
  margin: 0 auto 2rem auto;
  font-size: .9rem;
  @media(max-width: 768px){
    width: 100%;
    font-size: .8rem;
  }
`;

export { ContainerFeatures, TitleFeatures, PFeatures };
