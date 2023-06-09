import React from "react";
import { Btn, ContainerPages,DescriptionProduc, Title} from "./Styled-components/Simple";
import ImgSimple from '../images/illustration-features-tab-1.svg'
import { Description } from "../styled-components/PresentationBookMark";
import { ContainerGeneric } from "../styled-components/Color";

const Simple = () => {
  return (
    <ContainerPages>
      <ContainerGeneric>
        <img src={ImgSimple} alt="ilustration features tab" className="img-pages"/>
      </ContainerGeneric>

      <DescriptionProduc>
        <Title>BookMark in one clic</Title>
        <Description as='p'>Organize your boormarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</Description>
        <Btn className="chrome">More Info</Btn>
      </DescriptionProduc>
    </ContainerPages>
  );
};

export default Simple;
