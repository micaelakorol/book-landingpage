import React from "react";
import { Btn, ContainerPages,DescriptionProduc, Title} from "./styled-components/Simple";
import { Description } from "../styled-components/PresentationBookMark";
import { ContainerGeneric } from "../styled-components/Color";
import {tab1} from '../variables/var'
const Simple = () => {
  return (
    <ContainerPages>
      <ContainerGeneric>
        <img src={tab1} alt="ilustration features tab" className="img-pages"/>
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
