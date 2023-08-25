import React, { useState } from "react";
import {
  ContainerLinksMob,
  ContainerMobile,
  Header,
} from "../../../styled-components/HeaderMobile";
import close from "../../../assets/images/icon-close.svg";
import menu from "../../../assets/images/icon-hamburger.svg";
import Links from "./Links";
import { ContainerGeneric } from "../../../styled-components/Color";
import { logoMob } from "../../../variables/var";
const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Header>
      {showMenu ? (
        <>
          <ContainerMobile>
            <ContainerGeneric>
              <img src={logoMob} alt="logo" />
              <img
                src={close}
                alt="option-close"
                className="close"
                onClick={() => setShowMenu(false)}
              />
            </ContainerGeneric>
            <ContainerLinksMob>
              <Links showMenu={showMenu} />
            </ContainerLinksMob>
          </ContainerMobile>
        </>
      ) : (
        <img
          src={menu}
          alt="icon menu mobile"
          onClick={() => setShowMenu(true)}
        />
      )}
    </Header>
  );
};

export default HeaderMobile;
