import React, {useState} from 'react';
import {Box} from '@mui/material';
import Logo from './Logo';
import Navbar from './Navbar';
import Contacts from '../common/Contacts';
import {CiMenuBurger} from 'react-icons/ci';
import Drawer from '@mui/material/Drawer';
import BurgerMenu from '../BurgerMenu';

const Header = ({currentSection, handleActiveSection, classes, currentScreenWidth, isSticky}) => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <header className={`h-20 justify-between flex items-center  ${isSticky && 'sticky-header'}`}>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <Logo/>
                <Navbar currentSection={currentSection} handleActiveSection={handleActiveSection}/>
            </Box>
            <Contacts classes={classes} currentScreenWidth={currentScreenWidth}/>
            {currentScreenWidth <= 894 &&
                <button onClick={handleDrawerOpen} className='absolute right-10 z-10'><CiMenuBurger size={30}/>
                </button>}
            <div>
                <Drawer anchor="right"
                        open={open}
                        variant='temporary'
                        onClose={handleDrawerClose}>
                    <BurgerMenu onClick={handleDrawerClose} currentSection={currentSection}
                                handleActiveSection={handleActiveSection}/>
                </Drawer>
            </div>
        </header>
    );
};

export default Header;