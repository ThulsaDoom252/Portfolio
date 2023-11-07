import React from 'react';
import Navbar from './Header/Navbar';

const BurgerMenu = ({currentSection, handleActiveSection}) => {
    return (
        <div
            className='burger-menu'>
            <Navbar currentSection={currentSection} handleActiveSection={handleActiveSection}/>
        </div>
    );
};

export default BurgerMenu;