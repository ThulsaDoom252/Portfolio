import React from 'react';
import {IoIosArrowDropleftCircle} from 'react-icons/io';

const LeftArrow = ({onClick, color = 'gray'}) => {
    return (
        <div onClick={onClick} className='carousel-arrow carousel-arrow__left'>
            <IoIosArrowDropleftCircle style={{color}}/>
        </div>
    );
};
export default LeftArrow;