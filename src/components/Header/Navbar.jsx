import React from 'react';
import {about, home, landings, projects} from '../../common';
const Navbar = ({currentSection, handleActiveSection}) => {
    const navItems = [home, about, projects, landings]
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