import {createTheme} from '@mui/material';
import {makeStyles} from '@mui/styles'

// theme colors variables
const primaryColor = '#fff6f6'
const activeColor = '#f9004d'
const btnBorderColor = '#575151'

const prtojectBtnColor = '#212020'

// mui custom theme
export const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            active: activeColor,
            borderColor: btnBorderColor,
        },
        background: {
            default: activeColor,
        },
    },
});

// mui custom classes with theme apply
export const useStyles = makeStyles((theme) => ({
    customButton: {
        borderRadius: '0.5rem',
        padding: '0.7rem',
        borderColor: `${theme.palette.primary.borderColor} !important`,
        transition: '0.7s ease !important',

        '&:hover': {
            transform: 'translateY(-4px)',
            borderColor: `${theme.palette.primary.active} !important`,
            backgroundColor: `${theme.palette.primary.active} !important`,
        },
    },


    projectButton: {
        width: 300,
        color: prtojectBtnColor,
        border: 'gray solid 1px',
    }
}));