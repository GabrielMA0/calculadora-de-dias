import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme';
import { useCallback, useState } from "react";
import Modal from './Components/Modal';
import Main from './Components/Main';
import Header from './Components/Header';
import OptionsLanguage from './Components/OptionsLanguage';
import BackgroundOptions from './Components/BackgroundOptions';

function App() {

  const [isOpenLanguage, setIsOpenLanguage] = useState(false);

  const languageOptionData = () => {
    setIsOpenLanguage(!isOpenLanguage)
  };

  const [texts, setTexts] = useState({
    title: "Calculadora de dias",
    observationText: "OBS: selecione pelo menos 1 opção",
    labelCheckboxDays: "Mostrar dias",
    labelCheckboxWeeks: "Mostrar semanas",
    labelCheckboxMonths: "Mostrar meses",
    labelCheckboxYears: "Mostrar anos",
    buttonClearText: "Limpar campos",
    buttonCalculateText: "Calcular",
    subtitle: "Resultado",
    resultDays: "Quantidade de dias:",
    resultWeeks: "Quantidade de semanas:",
    resultMonths: "Quantidade de meses:",
    resultYears: "Quantidade de anos:",
  })

  const selectedLanguage = useCallback((data) => {
    if(data === "english"){
      setTexts({
        title: "Date Calculator",
        observationText: "NOTE: select at least 1 option",
        labelCheckboxDays: "Show days",
        labelCheckboxWeeks: "Show weeks",
        labelCheckboxMonths: "Show months",
        labelCheckboxYears: "Show years",
        buttonClearText: "Clear fields",
        buttonCalculateText: "Calculate",
        subtitle: "Result",
        resultDays: "Number of days:",
        resultWeeks: "Number of weeks:",
        resultMonths: "Number of months:",
        resultYears: "Number of years:",
      })
    } else { 
      setTexts({
        title: "Calculadora de dias",
        observationText: "OBS: selecione pelo menos 1 opção",
        labelCheckboxDays: "Mostrar dias",
        labelCheckboxWeeks: "Mostrar semanas",
        labelCheckboxMonths: "Mostrar meses",
        labelCheckboxYears: "Mostrar anos",
        buttonClearText: "Limpar campos",
        buttonCalculateText: "Calcular",
        subtitle: "Resultado",
        resultDays: "Quantidade de dias:",
        resultWeeks: "Quantidade de semanas:",
        resultMonths: "Quantidade de meses:",
        resultYears: "Quantidade de anos:",
      })
    }
  }, [setTexts]);
  
  return (
    <ThemeProvider theme={Theme}>
      <Header>
        <OptionsLanguage onClick={languageOptionData}></OptionsLanguage>
        <BackgroundOptions isOpenLanguage={isOpenLanguage} selectedLanguage={selectedLanguage}></BackgroundOptions>
      </Header>
      <Main>
        <Modal texts={texts}></Modal>
      </Main>
    </ThemeProvider>
  );
}

export default App;
