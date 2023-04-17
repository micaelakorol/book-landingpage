import styled from "styled-components";
import { ContainerLinks } from "./Header";
import { Color } from "./Color";

const Header = styled.header`
@media(min-width: 767px){
    display: none;
}
.close{
    position: absolute;
    right: 20px;
}
`

const ContainerMobile = styled.section`
display: flex; 
flex-direction: column;
align-items: center;
background: rgba(0,0,0,.5);
padding: .5rem;
`


const ContainerLinksMob = styled(ContainerLinks)`
display: flex;
flex-direction: column;
width: 100%;
padding: 1rem;
a{
    margin: .4rem 0;
    color: ${Color.white}
}
`

export {Header,ContainerMobile,ContainerLinksMob}