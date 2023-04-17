import React from "react";
import {
  ContainerCard,
  Card,
  TitleCard,
  BodyCard,
} from "../../styled-components/CardBrowsers";
import { ButtonChrome } from "../../styled-components/PresentationBookMark";
import dataCard from "./dataCard/dataCard";

const CardBrowsers = () => {
  let data = dataCard.items;

  return (
    <ContainerCard>
      <>
        {data.map((item) => (
          <Card
          key={item.id}
            className={
              item.class === "card-two"
                ? "card-two"
                : null || item.class === "card-three"
                ? "card-three"
                : null
            }
          >
            <img
              src={item.image}
              alt="logo google chrome"
              className="logo-browsers"
            />
            <TitleCard>{item.title}</TitleCard>
            <BodyCard>{item.body}</BodyCard>
            <img src={item.illustration} alt="illustration dots" />
            <ButtonChrome>{item.btn}</ButtonChrome>
          </Card>
        ))}
      </>
    </ContainerCard>
  );
};

export default CardBrowsers;
