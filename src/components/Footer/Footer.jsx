import React from 'react';
import {Box, Typography} from '@mui/material';
import Logo from '../Header/Logo';
import Contacts from '../common/Contacts';
import {useStyles} from '../../muiStyles';

const Footer = ({currentScreenWidth}) => {
    const classes = useStyles()

    return (
        <footer className='footer'>
            <Box className='footer-block'>
                <Box display='flex' alignItems='center' flexDirection={currentScreenWidth <= 654 ? 'column' : 'row'}>
                    <Logo/>
                    <Typography fontSize='2rem' fontWeight={700}>ThulsaDev</Typography>
                </Box>
                <Contacts classes={classes} showButton={false} iconSize={30}/>
                <Typography className='footer-block__copyright description' fontSize='1rem'>Copyright © 2023
                    ThulsaDev-Themes.
                    All Rights
                    Reserved.</Typography>
            </Box>
        </footer>
    );
};

export default Footer;