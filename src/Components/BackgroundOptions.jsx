import React from "react";
import styled from "styled-components";
import iconFlagBrazil from "../assets/icon-flag-brazil.svg"
import iconFlagUsa from "../assets/icon-flag-usa.svg"

const BackgroundOptionsContainer = styled.div`
    z-index: 0;
    width: 90px;
    height: 44px;
    position: fixed;
    right: 61px;
    top: 20px;
    border-radius: 10px 0 0 10px;
    background-color: #4F3998;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
        cursor: pointer;
        border: 2px solid transparent;
        border-radius: 2px;
        transition: 0.3s;


        &:hover{
            border: 2px solid ${(props) => props.theme.colors.white};
        }
    }
`

const ButtonContainer = styled.button`
    padding: 0;
    border: none;
    background: none;
`

const BackgroundOptions = (props) => {
    const { selectedLanguage } = props

    const handleLanguage = (language) => {
        selectedLanguage(language)
    }

    return (
        <BackgroundOptionsContainer>
            <ButtonContainer onClick={() => handleLanguage("portuguese")}><img src={iconFlagBrazil} title="Português-brasil" alt="teste"/></ButtonContainer>
            <ButtonContainer onClick={() => handleLanguage("english")}><img src={iconFlagUsa} title="Inglês-americano"alt="teste"/></ButtonContainer>
        </BackgroundOptionsContainer>
    )
}

export default BackgroundOptions