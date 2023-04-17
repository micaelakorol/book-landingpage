import styled from "styled-components";
import { Container } from "./ContactUs";
import { Color } from "./Color";
import { Link } from "./Header";

const FooterPage = styled(Container)`
background: ${Color.veryDarkBlue};
min-height: 30px;
display: grid;
grid-template-columns: repeat(4, 15%) 40%;
place-items: center;
.icon{
    cursor: pointer;
}
@media(max-width:768px){
    grid-template-columns: 3fr; 
    svg{
        margin-top: .4rem;
    }
}
`

const LinkFooter = styled(Link)`
color: ${Color.white};
font-size: .7rem;
@media(max-width:768px){
    margin: .3rem 0;
}
`


export {FooterPage,LinkFooter}