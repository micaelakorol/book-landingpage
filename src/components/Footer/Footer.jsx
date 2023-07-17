import React from "react";
import {
  FooterPage,
  LinkFooter,
} from "../../styled-components/Footer";
import SvgSocial from "./SvgSocial";
import { logoMob } from "../../variables/var";
const Footer = () => {
  return (
    <FooterPage as="footer">
      <img src={logoMob} alt="logo" />
        <LinkFooter>Features</LinkFooter>
        <LinkFooter>Pricing</LinkFooter>
        <LinkFooter>Contact</LinkFooter>
        <SvgSocial />
    </FooterPage>
  );
};

export default Footer;
