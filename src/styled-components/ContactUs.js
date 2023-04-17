import styled from "styled-components";
import { Color } from "./Color";
import { TitleFeatures } from "./Features";

const Container = styled.section`
  width: 100vw;
  background: ${Color.blue};
  padding: 2rem;
  min-height: 250px;
  text-align: center;
  overflow: hidden;
  @media(max-width: 768px){
    padding: .5rem;
  }
`;

const PContact = styled.p`
  color: ${Color.white};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.7rem;
  margin: 2rem 0;
`;

const Title = styled(TitleFeatures)`
  color: ${Color.white};
  width: 30%;
  margin: 0 auto 2rem auto;
  @media(max-width: 900px){
    width: 90%;
    font-size: 1rem;
  }
`;

const BtnContactUs = styled.button`
  margin: 0 0.5rem;
  padding: 0.4rem;
  border-radius: 0.3rem;
  font-size: .9rem;
  color: ${(props) => (props.alert ? "hsl(0, 94%, 66%)" : "#fff")};
  background: ${(props) => (props.alert ? "#fff" : "hsl(0, 94%, 66%)")};
  border: ${(props) =>
    props.alert ? "2.5px solid hsl(0, 94%, 66%)" : "2.5px solid transparent"};
  font-weight: ${(props) => (props.alert ? '500' : null) };
  &:hover {
    color: ${Color.red};
    background: ${Color.white};
  }
`;
const Error = styled.i`
  font-size: 0.6rem;
  border-radius: 0.5rem;
  margin-right: 7.3rem;
  color: ${Color.white};
`;

const Inputs = styled.input`
  padding: 0.3rem;
  border-radius: 0.3rem;
  outline: none;
  border: ${(props) =>
    props.alert ? "2.5px solid hsl(0, 94%, 66%)" : "2.5px solid transparent"};
  ::placeholder {
    font-size: 0.7rem;
  }
`;

export { Container, PContact, Title, BtnContactUs, Error, Inputs };
