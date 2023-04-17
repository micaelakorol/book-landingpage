import styled from "styled-components";
import {
  ButtonChrome,
  ContainerPrincipal,
  Shape,
} from "../../styled-components/PresentationBookMark";
import { TitlePrincipal } from "../../styled-components/PresentationBookMark";

const ContainerPages = styled(ContainerPrincipal)`
  margin: auto;
  text-align: center;
  .img-pages {
    width: 80%;
  }
  p {
    font-size: 0.83rem;
    width: 80%;
  }
  @media (max-width: 768px) {
    p {
      font-size: .9rem;
      width: 100%;
    }
    .img-pages {
      width: 100%;
      margin-bottom: 1.4rem;
    }
  }
`;
const ContainerImg = styled.section``;

const Title = styled(TitlePrincipal)`
  font-size: 1.3rem;
  margin: 0 0 1rem 0;
  width: 100%;
`;

const Btn = styled(ButtonChrome)`
  margin: 0;
`;

const DescriptionProduc = styled.section`
  text-align: start;
  margin: 2rem 0 0 2.5rem;
  @media (max-width: 768px) {
    margin: 0;
    text-align: center;
  }
`;

const Shape2 = styled(Shape)`
  //pendiente
`;

export { ContainerPages, ContainerImg, DescriptionProduc, Title, Btn, Shape2 };
