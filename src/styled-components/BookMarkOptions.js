import styled from "styled-components";
import { Color } from "./Color";
import { NavLink } from "react-router-dom";

const Container = styled.article`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;
const Options = styled(NavLink)`
  text-transform: capitalize;
  text-decoration: none;
  cursor: pointer;
  font-size: .9rem;
  letter-spacing: 0;
  margin: 0 .5rem 1rem .5rem; 
  border-bottom: 1.5px solid transparent;
  color: ${Color.gray};
  &:hover {
    color: ${Color.red};
    border-bottom: 1.5px solid ${Color.red};
  }
`;

const Line = styled.hr`
width: 70%;
margin: auto auto 3rem auto;
background: ${Color.grayishBlue};
`



export { Container, Options,Line };
