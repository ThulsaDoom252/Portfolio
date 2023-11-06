import React, {useEffect, useState} from 'react';
import Header from './Header';
import {useStyles} from '../../muiStyles';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const HeaderContainer = ({isSticky, currentSection, handleActiveSection}) => {
    const {width: currentScreenWidth} = useWindowDimensions()
    const classes = useStyles()

    return <Header
        isSticky={isSticky}
        currentScreenWidth={currentScreenWidth}
        classes={classes}
        currentSection={currentSection}
        handleActiveSection={handleActiveSection}/>;
};

export default HeaderContainer;