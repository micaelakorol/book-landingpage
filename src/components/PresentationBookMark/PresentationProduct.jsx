import React from "react";
import ImgTablet from "../../images/illustration-hero.svg";
import {
  ContainerPrincipal,
  Description,
  TitlePrincipal,
  InformationPrincipal,
  ButtonChrome,
  ButtonFirefox,
  Shape
} from "../../styled-components/PresentationBookMark";
import { ContainerGeneric } from "../../styled-components/Color";

const PresentationProduct = () => {
  return (
    <ContainerPrincipal>
      <InformationPrincipal>
        <TitlePrincipal>A Simple Bookmark Manager</TitlePrincipal>
        <Description>
          A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </Description>
        <section>
          <ButtonChrome>Get it on Chrome</ButtonChrome>
          <ButtonFirefox>
            Get it on Firefox
          </ButtonFirefox>
        </section>
      </InformationPrincipal>
      <ContainerGeneric>
      <img
          src={ImgTablet}
          alt="Presentacion imagen tablet"
          className="tablet-main"
        />
       <Shape></Shape>
      </ContainerGeneric>
    </ContainerPrincipal>
  );
};

export default PresentationProduct;
