import React from "react";
import styled from "styled-components";
import Title from './Title'
import Input from './Input'
import Flex from './Flex'
import CheckboxCustom from './CheckboxCustom'
import Observation from './Observation'
import Button from './Button'
import Box from './Box'
import Result from './Result'
import ResultText from './ResultText'
import ResultContainer from './ResultContainer'

export const ModalContainer = styled.div`
    padding: 30px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    border: 1px solid ${(props) => props.theme.colors.stroke};;
    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
`

const Modal = () => {
    return (
        <ModalContainer>
            <Title>Calculadora de dias</Title>
            <Flex>
                <Input type="date"></Input>
                <Input type="date"></Input>
            </Flex>
                <Box>
                    <Observation>OBS: Selecione pelo menos 1 opção*</Observation>
                    <Flex>
                        <CheckboxCustom>Mostrar dias</CheckboxCustom>
                        <CheckboxCustom>Mostrar meses</CheckboxCustom>
                        <CheckboxCustom>Mostrar anos</CheckboxCustom>
                    </Flex>
                </Box>
            <Flex>
                <Button type="clean">Limpar campos</Button>
                <Button type="calculate">Calcular</Button>
            </Flex>

            <Result>Resultado</Result>

            <ResultContainer>
                <Flex>
                    <ResultText>Quantidade de dias:</ResultText>
                    <ResultText>200</ResultText>
                </Flex>

                <Flex>
                    <ResultText>Quantidade de meses:</ResultText>
                    <ResultText>5</ResultText>
                </Flex>

                <Flex>
                    <ResultText>Quantidade de anos:</ResultText>
                    <ResultText>2</ResultText>
                </Flex>

            </ResultContainer>
        </ModalContainer>
    );
}
export default Modal;