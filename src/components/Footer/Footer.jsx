import React from "react";
import {
  FooterPage,
  LinkFooter,
} from "../../styled-components/Footer";
import Svg from "./SvgLogo";
import SvgSocial from "./SvgSocial";
const Footer = () => {
  return (
    <FooterPage as="footer">
        <Svg />
        <LinkFooter>Features</LinkFooter>
        <LinkFooter>Pricing</LinkFooter>
        <LinkFooter>Contact</LinkFooter>
        <SvgSocial />
    </FooterPage>
  );
};

export default Footer;
