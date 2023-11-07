import React from 'react';
import {Box, Typography} from '@mui/material';
import Logo from './Header/Logo';
import Contacts from './common/Contacts';
import {useStyles} from '../muiStyles';

const Footer = () => {
    const classes = useStyles()

    return (
        <footer>
            <Box className='footer-block'>
                <Box display='flex' alignItems='center'>
                    <Logo/>
                    <Typography fontSize='2rem' fontWeight={700}>ThulsaDev</Typography>
                </Box>
                <Contacts classes={classes} showButton={false}  iconSize={30}/>
                <Typography className='footer-block__copyright description' fontSize='1rem'>Copyright © 2023
                    ThulsaDev-Themes.
                    All Rights
                    Reserved.</Typography>
            </Box>
        </footer>
    );
};

export default Footer;