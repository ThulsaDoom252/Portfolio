import React, {useState} from 'react';
import Header from './Header';
import {useStyles} from '../../muiStyles';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const HeaderContainer = () => {
    const [activeNavItemIndex, setActiveNavItemIndex] = useState(null)

    const {width: currentScreenWidth} = useWindowDimensions()

    const classes = useStyles()

    return <Header
        currentScreenWidth={currentScreenWidth}
        classes={classes}
        activeNavItemIndex={activeNavItemIndex}
        setActiveNavItemIndex={setActiveNavItemIndex}/>;
};

export default HeaderContainer;