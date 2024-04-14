import React from "react";
import styled from "styled-components";
import iconFlagBrazil from "../assets/icon-flag-brazil.svg"
import iconFlagUsa from "../assets/icon-flag-usa.svg"
import { motion } from "framer-motion"

const BackgroundOptionsContainer = styled(motion.div)`
    z-index: 0;
    width: 90px;
    height: 44px;
    position: absolute;
    right: 61px;
    top: 20px;
    border-radius: 10px 0 0 10px;
    background-color: #4F3998;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    overflow: hidden;

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
    
    const { selectedLanguage, isOpenLanguage } = props

    const animations = {
        open: {
          width: "90px",
          border: "1px solid black",
          transition: { width: { duration: 0.5 } }
        },
        closed: {
          width: "0px",
          border: "none",
          transition: { width: { duration: 0.5 } }
        }
    };

    const handleLanguage = (language) => {
        selectedLanguage(language)
    }

    return (
        <BackgroundOptionsContainer
            initial="closed"
            variants={animations}
            animate={isOpenLanguage ? "open" : "closed"}
            transition={{ duration: 0.5 }}
        >
            <ButtonContainer onClick={() => handleLanguage("portuguese")}><img src={iconFlagBrazil} title="Português-brasil" alt="teste"/></ButtonContainer>
            <ButtonContainer onClick={() => handleLanguage("english")}><img src={iconFlagUsa} title="Inglês-americano"alt="teste"/></ButtonContainer>
        </BackgroundOptionsContainer>
    )
}

export default BackgroundOptions