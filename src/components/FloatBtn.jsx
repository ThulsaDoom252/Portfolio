import React from 'react';
import {MdKeyboardArrowUp} from 'react-icons/md';
import {home} from '../common';

const FloatBtn = ({isFloatBtnVisible, handleScroll}) => {
    return (
        <div onClick={() => handleScroll(home)} className={`float__btn ${isFloatBtnVisible && 'visible'}`}>
            <MdKeyboardArrowUp size={30}/>
        </div>
    );
};

export default FloatBtn;