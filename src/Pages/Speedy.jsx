import React from "react";
import {
  Btn,
  ContainerPages,
  DescriptionProduc,
  Title,
} from "./Styled-components/Simple";
import ImgSimple from "../images/illustration-features-tab-2.svg";
import { Description } from "../styled-components/PresentationBookMark";
import { ContainerGeneric } from "../styled-components/Color";

const Speedy = () => {
  return (
    <ContainerPages>
      <ContainerGeneric>
        <img
          src={ImgSimple}
          alt="ilustration features tab"
          className="img-pages"
        />
      </ContainerGeneric>

      <DescriptionProduc>
        <Title>Intelligent search</Title>
        <Description as="p">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl throught all of your bookmarks.{" "}
        </Description>
        <Btn className="chrome">More Info</Btn>
      </DescriptionProduc>
    </ContainerPages>
  );
};

export default Speedy;
