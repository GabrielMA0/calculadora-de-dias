import React from "react";
import styled from "styled-components";
import iconLanguage from "../assets/icon-language.svg"

const OptionsLanguageContainer = styled.div`
    width: 44px;
    height: 44px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1;

    &:hover{
        background-color: #E2E2E2;
    }
`
 
const OptionsLanguage = (props) => {
    const { ...restProps} = props
    return (
        <OptionsLanguageContainer {...restProps}>
            <img src={iconLanguage} title="Alterar idioma da página" alt="icone de um planeta" />
        </OptionsLanguageContainer>
    )
}

export default OptionsLanguage