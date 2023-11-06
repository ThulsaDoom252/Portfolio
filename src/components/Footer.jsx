import React from 'react';
import {Box, Typography} from '@mui/material';
import Logo from './Header/Logo';
import Contacts from './Header/Contacts';
import {useStyles} from '../muiStyles';

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className='footer'>
            <Box className='footer-block'>
                <Box display='flex' alignItems='center'>
                    <Logo/>
                    <Typography fontSize='2rem' fontWeight={700}>ThulsaDev</Typography>
                </Box>
                <Contacts classes={classes} showButton={false}/>
                <Typography className='description' fontSize='1rem'>Copyright © 2023 ThulsaDev-Themes. All Rights
                    Reserved.</Typography>
            </Box>
        </footer>
    );
};

export default Footer;