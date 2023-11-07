import React from 'react';
import {Box} from '@mui/material';

const Overlay = ({onClick}) => {
    return <a className={'link-overlay'} onClick={onClick}/>
};

export default Overlay;