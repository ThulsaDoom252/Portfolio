import './App.less';
import 'reset-css';
import {ThemeProvider} from '@mui/material';
import {theme} from "./muiStyles"
import HeaderContainer from './components/Header/HeaderContainer';

function App() {

    return (
        <ThemeProvider theme={theme}>
            <HeaderContainer/>
        </ThemeProvider>
    );
}

export default App;
