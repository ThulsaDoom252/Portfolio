import React from 'react';
import {Box} from '@mui/material';
import Logo from './Logo';
import Navbar from './Navbar';
import Contacts from '../common/Contacts';

const Header = ({currentSection, handleActiveSection, classes, currentScreenWidth, isSticky}) => {
    return (
        <header className={`h-20 justify-between flex items-center ${isSticky && 'sticky-header'}`}>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <Logo/>
                <Navbar currentSection={currentSection} handleActiveSection={handleActiveSection}/>
            </Box>
            <Contacts classes={classes} currentScreenWidth={currentScreenWidth}/>
        </header>
    );
};

export default Header;