import React from "react";
import { TitleCard, BodyCard } from "../../styled-components/CardBrowsers";
import { ButtonChrome } from "../../styled-components/PresentationBookMark";
const CardBodyBrowser = ({ item }) => {
  return (
    <>
      <img
        src={item.image}
        alt="logo-google-chrome"
        className="logo-browsers"
      />
      <TitleCard>{item.title}</TitleCard>
      <BodyCard>{item.body}</BodyCard>
      <img src={item.illustration} alt="illustration-dots" />
      <ButtonChrome>{item.btn}</ButtonChrome>
    </>
  );
};

export default CardBodyBrowser;
