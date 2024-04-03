import React from "react";
import styled from "styled-components";

const ButtonType = {
    CALCULATE: 'calculate',
    CLEAN: 'clean'
}

const Buttoncontainer = styled.button`
    width: 250px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.stroke};
    background-color: ${(props) => props.$type === ButtonType.CALCULATE ? props.theme.colors.primary : "transparent"};
    color: ${(props) => props.$type === ButtonType.CALCULATE ? props.theme.colors.white : props.theme.colors.stroke};
    cursor: pointer;
    font-size: ${(props) => props.theme.size.description};

    &:hover{
        ${(props) => props.$type === ButtonType.CALCULATE && `
            background-color: ${props.theme.colors.hover.calculate};

        `}

        ${(props) => props.$type === ButtonType.CLEAN && `
            color: ${props.theme.colors.primary};
            border-color: ${props.theme.colors.primary};
        `}

    }
`
const Button = (props) => {
    
    const { type = ButtonType.CALCULATE, children } = props

    return (
        <Buttoncontainer $type={type}>{children}</Buttoncontainer>
    )
}
export default Button