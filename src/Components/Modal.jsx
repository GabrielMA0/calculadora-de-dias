// HOOKS E BIBLIOTECAS
import { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import moment from 'moment';
import { motion, AnimatePresence} from "framer-motion"

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

const ModalContainer = styled(motion.div)`
    padding: 30px;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    border: 1px solid ${(props) => props.theme.colors.stroke};;
    filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
    overflow: hidden;
    transition: 1s;
    ${props => props.showResult ? props.animations.increaseContainer : props.animations.decreaseContainer};

    @media (max-width: 768px) {
        padding: 20px;
        gap: 20px;
        width: auto;
        height: ${props => props.showResult ? "100%" : "536px"};
    }
`
const Modal = (props) => {

    const { texts } = props
   
    const [inputDateInitial, setInputDateInitial] = useState("");
    const [inputDateEnd, setInputDateEnd] = useState("");
    const [checkBoxStates, setCheckBoxStates] = useState({
        days: false,
        weeks: false,
        months: false,
        years: false,
    });
    const [showResult, setShowResult] = useState(false);
    const [dateDifference, setDateDifference] = useState({});

    const animations = {
        increaseContainer: {
            height:"560px",
            transition: { duration: 0.7 }
        },
        decreaseContainer: {
            height:"368px",
            transition: { duration: 0.7 } 
        }
    };

    const handleInputs = (event) => {
        event.target.name === "inputDateInitial" ? setInputDateInitial(event.target.value) : setInputDateEnd(event.target.value)

        // setFormState(prevState => ({
        //     ...prevState,
        //     inputDateInitial: "Novo valor"
        // }));
  
    }

    const handleCheckbox = (checkBoxName) => {
        setCheckBoxStates(prevState => ({
            ...prevState,
            [checkBoxName]: !prevState[checkBoxName],
        }));
    };

    const calculateDates = useCallback(() => {

        const initialDate = moment(inputDateInitial)
        const finalDate = moment(inputDateEnd)

        const differences = { 
            differenceDays: finalDate.diff(initialDate, 'days'),
            differenceWeeks: finalDate.diff(initialDate, 'weeks'),
            differenceMonths: finalDate.diff(initialDate, 'months'),
            differenceYears: finalDate.diff(initialDate, 'years'),
        }

        setDateDifference(differences);
        setShowResult(true);
    }, [inputDateInitial, inputDateEnd]);

    const resetFields = useCallback(() => {
        setInputDateInitial("")
        setInputDateEnd("")
        setShowResult(false);
        setCheckBoxStates({
            days: false,
            weeks: false,
            months: false,
            years: false,
        });
    }, [setInputDateInitial, setInputDateEnd, setShowResult, setCheckBoxStates]);

    const disableButton = () => {
        return inputDateInitial.length && inputDateEnd.length && (checkBoxStates.days || checkBoxStates.weeks || checkBoxStates.months || checkBoxStates.years) ? false : true
    }

    useEffect(() => {
        if(!checkBoxStates.days && !checkBoxStates.weeks && !checkBoxStates.months && !checkBoxStates.years) setShowResult(false);
    }, [checkBoxStates.days, checkBoxStates.weeks, checkBoxStates.months, checkBoxStates.years])

    return (
        <ModalContainer
        initial={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{ duration: 0.3 }}
        showResult={showResult}
        animations={animations}
        >
            <Title>{texts.title}</Title>
            <Flex>
                <Input type="date" name="inputDateInitial" value={inputDateInitial} onChange={handleInputs}></Input>
                <Input type="date" name="inputDateEnd" value={inputDateEnd} onChange={handleInputs}></Input>
            </Flex>
                <Box>
                    <Observation>{texts.observationText}</Observation>
                    <Flex>
                        <CheckboxCustom id="days" name="days" checked={checkBoxStates.days} onChange={() => handleCheckbox('days')}><label htmlFor="days">{texts.labelCheckboxDays}</label></CheckboxCustom>
                        <CheckboxCustom id="weeks" name="weeks" checked={checkBoxStates.weeks} onChange={() => handleCheckbox('weeks')}><label htmlFor="weeks">{texts.labelCheckboxWeeks}</label></CheckboxCustom>
                        <CheckboxCustom id="months" name="months" checked={checkBoxStates.months} onChange={() => handleCheckbox('months')}><label htmlFor="months">{texts.labelCheckboxMonths}</label></CheckboxCustom>
                        <CheckboxCustom id="years" name="years" checked={checkBoxStates.years} onChange={() => handleCheckbox('years')}><label htmlFor="years">{texts.labelCheckboxYears}</label></CheckboxCustom>
                    </Flex>
                </Box>
            <Flex>
                <Button type="clean" onClick={resetFields}>{texts.buttonClearText}</Button>
                <Button type="calculate" disabled={disableButton()} onClick={calculateDates}>{texts.buttonCalculateText}</Button>
            </Flex>
            
            <ResultContainer>
                <Result 
                initial={{opacity: 0}}
                animate={showResult ? {opacity: 1} : {opacity: 0}}
                transition={{ duration: 0.5 }}
                >
                    {texts.subtitle}
                </Result>

                <AnimatePresence>
                    {checkBoxStates.days && (
                        <Flex 
                        initial={{transform: "translateX(-100%)"}}
                        animate={{transform: "translateX(0px)"}}
                        exit={{transform: "translateX(-100%)"}}
                        transition={{ duration: 0.5 }}>
                            <ResultText>{texts.resultDays}</ResultText>
                            <ResultText>{dateDifference.differenceDays}</ResultText>
                        </Flex>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                {checkBoxStates.weeks && (
                    <Flex
                    initial={{transform: "translateX(-100%)"}}
                    animate={{transform: "translateX(0px)"}}
                    exit={{transform: "translateX(-100%)"}}
                    transition={{ duration: 0.5 }}>
                        <ResultText>{texts.resultWeeks}</ResultText>
                        <ResultText>{dateDifference.differenceWeeks}</ResultText>
                    </Flex>
                )}
                </AnimatePresence>
                    
                <AnimatePresence>
                    {checkBoxStates.months && (
                        <Flex
                        initial={{transform: "translateX(-100%)"}}
                        animate={{transform: "translateX(0px)"}}
                        exit={{transform: "translateX(-100%)"}}
                        transition={{ duration: 0.5 }}>
                            <ResultText>{texts.resultMonths}</ResultText>
                            <ResultText>{dateDifference.differenceMonths}</ResultText>
                        </Flex>
                    )}
                </AnimatePresence>
                    
                <AnimatePresence>
                    {checkBoxStates.years && (
                        <Flex
                        initial={{transform: "translateX(-100%)"}}
                        animate={{transform: "translateX(0px)"}}
                        exit={{transform: "translateX(-100%)"}}
                        transition={{ duration: 0.5 }}>
                            <ResultText>{texts.resultYears}</ResultText>
                            <ResultText>{dateDifference.differenceYears}</ResultText>
                        </Flex>
                    )}
                </AnimatePresence>
            </ResultContainer>
        </ModalContainer>
    );
}

export default Modal;