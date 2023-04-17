import React from "react";
import {
  Headers,
  ContainerLogo,
  ContainerLinks,
} from "../../styled-components/Header";
import SvgLogo from "./SvgLogo";
import Links from "./Links";
const Header = () => {
  return (
    <Headers>
      <ContainerLogo>
        <SvgLogo />
      </ContainerLogo>
      <ContainerLinks>
        <Links />
      </ContainerLinks>
    </Headers>
  );
};

export default Header;
