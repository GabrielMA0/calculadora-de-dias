import React from "react";
import styled from "styled-components";
import iconLanguage from "../assets/icon-language.svg"
import { motion } from "framer-motion"

const OptionsLanguageContainer = styled(motion.div)`
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

    @media (max-width: 768px) {
        position: relative;
        top: 0;
        right: 0;
    }
`
 
const OptionsLanguage = (props) => {
    const { ...restProps} = props

    const animations = {
        showIcon: {
            transform:"translate(0px)",
            transition: { transform: { duration: 0.7 }}
        },
        hideIcon: {
            transform:"translate(66px, 0px)",
            transition: { transform: { duration: 0.7 } }
        }
    };

    return (
        <OptionsLanguageContainer {...restProps}
        initial="hideIcon"
        variants={animations}
        animate="showIcon"
        transition={{ duration: 0.5 }}
        >
            <img src={iconLanguage} title="Alterar idioma da página" alt="icone de um planeta" />
        </OptionsLanguageContainer>
    )
}

export default OptionsLanguage