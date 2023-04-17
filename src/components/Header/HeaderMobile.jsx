import React, { useState } from "react";
import { ContainerLinksMob, ContainerMobile, Header } from "../../styled-components/HeaderMobile";
import close from "../../images/icon-close.svg";
import menu from "../../images/icon-hamburger.svg";
import Svg from "../Footer/SvgLogo";
import Links from "./Links";
import { ContainerGeneric } from "../../styled-components/Color";
const HeaderMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Header>
      {showMenu ? (
        <>
          <ContainerMobile>
            <ContainerGeneric>
            <Svg />
            <img src={close} alt="icon close" className="close" onClick={() => setShowMenu(false)} /></ContainerGeneric>
            <ContainerLinksMob>
            <Links showMenu={showMenu}/>
            </ContainerLinksMob>
          </ContainerMobile>
        </>
      ) : (
        <img src={menu} alt="icon menu mobile" onClick={() => setShowMenu(true)} />
      )}
    </Header>
  );
};

export default HeaderMobile;
