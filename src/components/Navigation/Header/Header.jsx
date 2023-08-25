import React from "react";
import {
  Headers,
  ContainerLogo,
  ContainerLinks,
} from "../../../styled-components/Header";
import Links from "./Links";
import { darkLogo } from "../../../variables/var";
const Header = () => {
  return (
    <Headers>
      <ContainerLogo>
        <img src={darkLogo} alt="logo-mode-dark" />
      </ContainerLogo>
      <ContainerLinks>
        <Links />
      </ContainerLinks>
    </Headers>
  );
};

export default Header;
