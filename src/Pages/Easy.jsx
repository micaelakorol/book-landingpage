import React from "react";
import {
  Btn,
  ContainerPages,
  DescriptionProduc,
  Title,
} from "./Styled-components/Simple";
import ImgSimple from "../images/illustration-features-tab-3.svg";
import { ContainerGeneric } from "../styled-components/Color";
import { Description } from "../styled-components/PresentationBookMark";

const Easy = () => {
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
        <Title>Share you bookmarks </Title>
        <Description as="p">
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </Description>
        <Btn className="chrome">More Info</Btn>
      </DescriptionProduc>
    </ContainerPages>
  );
};

export default Easy;
