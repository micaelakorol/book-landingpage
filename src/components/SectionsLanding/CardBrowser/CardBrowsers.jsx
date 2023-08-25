import React from "react";
import {
  ContainerCard,
  Card,
} from "../../../styled-components/CardBrowsers";
import dataCard from "../constants/dataCard";
import CardBodyBrowser from "./CardBodyBrowser";

const CardBrowsers = () => {
  const data = dataCard.items;
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
            <CardBodyBrowser item={item} />
          </Card>
        ))}
      </>
    </ContainerCard>
  );
};

export default CardBrowsers;
