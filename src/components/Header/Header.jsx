import React from 'react';
import {Box} from '@mui/material';
import Logo from './Logo';
import Navbar from './Navbar';
import Contacts from './Contacts';

const Header = ({activeNavItemIndex, setActiveNavItemIndex, classes, currentScreenWidth}) => {
    return (
        <header className='h-20 justify-between flex items-center'>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <Logo/>
                <Navbar
                    activeNavItemIndex={activeNavItemIndex}
                    setActiveNavItemIndex={setActiveNavItemIndex}/>
            </Box>
            <Contacts classes={classes} currentScreenWidth={currentScreenWidth}/>
        </header>
    );
};

export default Header;