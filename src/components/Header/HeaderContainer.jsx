import React from 'react';
import Header from './Header';
import {useStyles} from '../../muiStyles';

const HeaderContainer = ({isSticky, isDrawerOpen, currentSection, currentScreenWidth, handleActiveSection, setIsDrawerOpen}) => {


    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    const classes = useStyles()

    return <Header
        isSticky={isSticky}
        isDrawerOpen={isDrawerOpen}
        currentScreenWidth={currentScreenWidth}
        classes={classes}
        currentSection={currentSection}
        handleActiveSection={handleActiveSection}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
    />;
};

export default HeaderContainer;