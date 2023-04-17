import styled from "styled-components";
import { Color } from "./Color";

const Headers = styled.header`
  width: 100vw;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 35% 65%);
  padding: 1.4rem 1rem;
  a:last-child {
    color: ${Color.white};
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContainerLogo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerLinks = styled.nav`
  text-align: center;
`;

const Link = styled.a`
  margin: 0 1.4rem;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: ${Color.veryDarkBlue};
  &:hover {
    color: ${Color.red};
  }
`;
const ButtonNav = styled.button`
  border: none;
  background: ${(props) => props.showMenu ? "transparent" : "hsl(0, 94%, 66%)"};
  padding: 0.1rem;
  border: ${(props) => props.showMenu ? "2px solid #fff" : "2px solid transparent"};
  width:${(props) => props.showMenu ? "80%" : "null"};
  margin: auto;
  border-radius: ${(props) => props.showMenu ? ".2rem" : ".5rem"};
  &:hover {
    border: 2px solid ${Color.red};
    background: ${Color.white};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  }
  &:hover a {
    color: ${Color.red};
  }
`;

export { Headers, ContainerLogo, Link, ContainerLinks, ButtonNav };
