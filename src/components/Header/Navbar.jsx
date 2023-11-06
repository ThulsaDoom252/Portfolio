import React from 'react';

const Navbar = ({currentSection, handleActiveSection}) => {
    const navItems = ['home', 'about',  'projects', 'landings']

    return (
        <ul className='flex justify-between navbar'>
            {navItems.map((item, index) => {
                return <li key={index} className={`navbar__item ${item === currentSection && "isActive"}`}
                           onClick={() => handleActiveSection(item)}><a>{item}</a></li>
            })}
        </ul>
    );
};

export default Navbar;