import './App.less';
import 'reset-css';
import {ThemeProvider} from '@mui/material';
import {theme, useStyles} from "./muiStyles"
import HeaderContainer from './components/Header/HeaderContainer';
import Greet from './components/Greet';
import AboutContainer from './components/About/AboutContainer';
import Projects from './components/Projects';
import Landings from './components/Landings';
import Footer from './components/Footer';
import useWindowDimensions from './hooks/useWindowDimensions';

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
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
