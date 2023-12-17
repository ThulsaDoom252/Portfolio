import React from 'react';
import {experience, skills} from '../../common';
const AboutMenu = ({aboutActiveBlock, setAboutActiveBlock}) => {
    const aboutBlocks = [skills, experience]
    return (
        <ul className='about__navbar'>
            {aboutBlocks.map((item, index) =>
                <li key={index}
                    onClick={() => setAboutActiveBlock(item)}
                    className={`about__navbar-item ${aboutActiveBlock === item && 'isActive'}`}>
                    <a>{item}</a>
                </li>)}
        </ul>
    );
};
export default AboutMenu;