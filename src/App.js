import './App.less';
import 'reset-css';
import {ThemeProvider} from '@mui/material';
import {theme} from "./muiStyles"
import HeaderContainer from './components/Header/HeaderContainer';
import Greet from './components/Greet';
import About from './components/About/About';
import AboutContainer from './components/About/AboutContainer';
import Projects from './components/Projects';
import Landings from './components/Landings';

function App() {

    return (
        <ThemeProvider theme={theme}>
            <HeaderContainer/>
            <Greet/>
            <main>
                <AboutContainer/>
                <Projects/>
                <Landings/>
            </main>
        </ThemeProvider>
    );
}

export default App;
