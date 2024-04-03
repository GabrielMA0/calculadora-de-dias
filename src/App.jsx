import { ThemeProvider } from 'styled-components';
import './App.css';
import Modal from './Components/Modal';
import Main from './Components/Main';
import Header from './Components/Header';
import OptionsLanguage from './Components/OptionsLanguage';
import BackgroundOptions from './Components/BackgroundOptions';
import { Theme } from './Components/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header>
        <OptionsLanguage></OptionsLanguage>
        <BackgroundOptions></BackgroundOptions>
      </Header>
      <Main>
        <Modal></Modal>
      </Main>
    </ThemeProvider>
  );
}

export default App;
