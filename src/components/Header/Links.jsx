import React from "react";
import { ButtonNav, Link } from "../../styled-components/Header";

const Links = ({showMenu}) => {
  return (
    <>
      <Link href="/">Features</Link>
      <Link href="/">Pricing</Link>
      <Link href="/">Contact</Link>
      <ButtonNav showMenu={showMenu}>
          <Link href="/">Login</Link>
        </ButtonNav>
    </>
  );
};

export default Links;
