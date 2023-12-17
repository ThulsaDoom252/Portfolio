import React from 'react';
import {IoIosArrowDroprightCircle} from 'react-icons/io';

const RightArrow = ({onClick, color = 'gray'}) => {
    return (
        <div onClick={onClick} className='carousel-arrow carousel-arrow__right'>
            <IoIosArrowDroprightCircle style={{color}}/>
        </div>
    );
};

export default RightArrow;