import React from 'react';
import {navItems} from '../../common';
import CvButton from '../common/CvButton';

const Navbar = ({currentSection, handleActiveSection}) => {
    return (
        <ul className='flex justify-between navbar'>
            {navItems.map((item, index) => {
                return <li key={index} className={`navbar__item ${item === currentSection && "isActive"}`}
                ><a href={`#${item}`} onClick={(e) => handleActiveSection(item, e)}>{item}</a></li>
            })}
        </ul>
    );
};
export default Navbar;