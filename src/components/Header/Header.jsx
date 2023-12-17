import React from 'react';
import {Box} from '@mui/material';
import Logo from './Logo';
import Navbar from './Navbar';
import Contacts from '../common/Contacts';
import {CiMenuBurger} from 'react-icons/ci';
import Drawer from '@mui/material/Drawer';
import BurgerMenu from '../BurgerMenu';
import {IoClose} from 'react-icons/io5';
import CvButton from '../common/CvButton';

const Header = ({
                    currentSection,
                    classes,
                    currentScreenWidth,
                    isSticky,
                    isDrawerOpen,
                    handleDrawerOpen,
                    handleDrawerClose,
                    handleActiveSection,
                }) => {

    const widthToShowDrawer = 894

    return (
        <header className={`h-20 justify-between flex items-center  ${isSticky && 'sticky-header'}`}>
            <Box
                display='flex'
                justifyContent='space-between'
                alignItems='center'>
                <Logo/>
                <Navbar currentSection={currentSection} handleActiveSection={handleActiveSection}/>
            </Box>
            <Contacts classes={classes} currentScreenWidth={currentScreenWidth} showButton={currentScreenWidth >= 654}/>

            {currentScreenWidth <= widthToShowDrawer &&
                <>
                    <button onClick={isDrawerOpen ? handleDrawerClose : handleDrawerOpen}
                            className='burger-menu-button absolute right-10 z-10'>
                        {isDrawerOpen ? <IoClose size={25}/> : <CiMenuBurger size={30}/>}

                    </button>
                    <div>
                        <Drawer anchor="right"
                                open={isDrawerOpen}
                                sx={{zIndex: 9}}
                                variant='temporary'
                                onClose={handleDrawerClose}>
                            <BurgerMenu onClick={handleDrawerClose}
                                        currentScreenWidth={currentScreenWidth}
                                        currentSection={currentSection}
                                        handleActiveSection={handleActiveSection}
                            />
                        </Drawer>
                    </div>
                </>}
        </header>
    );
};

export default Header;