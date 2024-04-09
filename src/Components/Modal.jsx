// HOOKS E BIBLIOTECAS
import { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import moment from 'moment';

// COMPONENTS
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

const ModalContainer = styled.div`
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
const Modal = (props) => {
    const { texts } = props
    // const [formState, setFormState] = useState({
    //     inputDateInitial: "",
    //     inputDateEnd: "",
    //     checkBoxDays: false,
    //     checkBoxMonths: false,
    //     checkBoxYears: false
    //   });
   
    const [inputDateInitial, setInputDateInitial] = useState("");
    const [inputDateEnd, setInputDateEnd] = useState("");
    const [checkBoxDays, setCheckBoxDays] = useState(false);
    const [checkBoxWeeks, setCheckBoxWeeks] = useState(false);
    const [checkBoxMonths, setCheckBoxMonths] = useState(false);
    const [checkBoxYears, setCheckBoxYears] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [dateDifference, setDateDifference] = useState({});

    const handleInputs = (event) => {
        event.target.name === "inputDateInitial" ? setInputDateInitial(event.target.value) : setInputDateEnd(event.target.value)

        // setFormState(prevState => ({
        //     ...prevState,
        //     inputDateInitial: "Novo valor"
        // }));
  
    }

    const handleCheckbox = (event) => {
        if(event.target.name === "checkBoxDays") return setCheckBoxDays(!checkBoxDays);
        if(event.target.name === "checkBoxWeeks") return setCheckBoxWeeks(!checkBoxWeeks);
        if(event.target.name === "checkBoxMonths") return setCheckBoxMonths(!checkBoxMonths);
        if(event.target.name === "checkBoxYears") return setCheckBoxYears(!checkBoxYears);
    };

    const calculateDates = useCallback(() => {

        const dataInicial = moment(inputDateInitial)
        const dataFinal = moment(inputDateEnd)

        const Differenças = { 
            differenceDays: dataFinal.diff(dataInicial, 'days'),
            differenceWeeks: dataFinal.diff(dataInicial, 'weeks'),
            differenceMonths: dataFinal.diff(dataInicial, 'months'),
            differenceYears: dataFinal.diff(dataInicial, 'years'),
        }

        setDateDifference(Differenças);
        setShowResult(true);
    }, [inputDateInitial, inputDateEnd]);

    const resetFields = useCallback(() => {
        setInputDateInitial("")
        setInputDateEnd("")
        setShowResult(false);
        setCheckBoxDays(false);
        setCheckBoxWeeks(false);
        setCheckBoxMonths(false);
        setCheckBoxYears(false);
    }, [setInputDateInitial, setInputDateEnd, setShowResult, setCheckBoxDays, setCheckBoxMonths, setCheckBoxYears, setCheckBoxWeeks]);

    const disableButton = () => {
        return inputDateInitial.length && inputDateEnd.length && (checkBoxDays || checkBoxMonths || checkBoxYears || checkBoxWeeks) ? false : true
    }

    useEffect(() => {
        if(!checkBoxDays && !checkBoxMonths && !checkBoxYears && !checkBoxWeeks) setShowResult(false);
    }, [checkBoxDays, checkBoxMonths, checkBoxYears, checkBoxWeeks])

    return (
        <ModalContainer>
            <Title>{texts.title}</Title>
            <Flex>
                <Input type="date" name="inputDateInitial" value={inputDateInitial} onChange={handleInputs}></Input>
                <Input type="date" name="inputDateEnd" value={inputDateEnd} onChange={handleInputs}></Input>
            </Flex>
                <Box>
                    <Observation>{texts.observationText}</Observation>
                    <Flex>
                        <CheckboxCustom id="checkBoxDays" name="checkBoxDays" checked={checkBoxDays} onChange={handleCheckbox}><label htmlFor="checkBoxDays">{texts.labelCheckboxDays}</label></CheckboxCustom>
                        <CheckboxCustom id="checkBoxWeeks" name="checkBoxWeeks" checked={checkBoxWeeks} onChange={handleCheckbox}><label htmlFor="checkBoxWeeks">{texts.labelCheckboxWeeks}</label></CheckboxCustom>
                        <CheckboxCustom id="checkBoxMonths" name="checkBoxMonths" checked={checkBoxMonths} onChange={handleCheckbox}><label htmlFor="checkBoxMonths">{texts.labelCheckboxMonths}</label></CheckboxCustom>
                        <CheckboxCustom id="checkBoxYears" name="checkBoxYears" checked={checkBoxYears} onChange={handleCheckbox}><label htmlFor="checkBoxYears">{texts.labelCheckboxYears}</label></CheckboxCustom>
                    </Flex>
                </Box>
            <Flex>
                <Button type="clean" onClick={resetFields}>{texts.buttonClearText}</Button>
                <Button type="calculate" disabled={disableButton()} onClick={calculateDates}>{texts.buttonCalculateText}</Button>
            </Flex>

            {showResult && (
                <>
                    <Result>{texts.subtitle}</Result>

                    <ResultContainer>
                        {checkBoxDays && (
                            <Flex>
                                <ResultText>{texts.resultDays}</ResultText>
                                <ResultText>{dateDifference.differenceDays}</ResultText>
                            </Flex>
                        )}

                        {checkBoxWeeks && (
                            <Flex>
                                <ResultText>{texts.resultWeeks}</ResultText>
                                <ResultText>{dateDifference.differenceWeeks}</ResultText>
                            </Flex>
                        )}
                        
                        {checkBoxMonths && (
                            <Flex>
                                <ResultText>{texts.resultMonths}</ResultText>
                                <ResultText>{dateDifference.differenceMonths}</ResultText>
                            </Flex>
                        )}

                        {checkBoxYears && (
                            <Flex>
                                <ResultText>{texts.resultYears}</ResultText>
                                <ResultText>{dateDifference.differenceYears}</ResultText>
                            </Flex>
                        )}

                        
                    </ResultContainer>
                </>
            )}

        </ModalContainer>
    );
}

export default Modal;