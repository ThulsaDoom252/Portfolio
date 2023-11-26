import React, {useEffect, useState} from 'react';
import Header from './Header';
import {useStyles} from '../../muiStyles';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const HeaderContainer = ({isSticky, currentSection, currentScreenWidth, handleActiveSection}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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