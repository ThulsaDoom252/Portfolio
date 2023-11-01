import './App.less';
import 'reset-css';
import {ThemeProvider} from '@mui/material';
import {theme} from "./muiStyles"
import HeaderContainer from './components/Header/HeaderContainer';
import Greet from './components/Greet';

function App() {

    return (
        <ThemeProvider theme={theme}>
            <HeaderContainer/>
            <Greet/>
        </ThemeProvider>
    );
}

export default App;
