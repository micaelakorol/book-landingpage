import styled from "styled-components";
import { Color } from "./Color";

const Svg = styled.span`
svg{
    color: ${Color.white};
    margin: 0 1rem;
    cursor: pointer;
    
    &:hover{
        color: ${Color.red};
    }
}
`

export {Svg}