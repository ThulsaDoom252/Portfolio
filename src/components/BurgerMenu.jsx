import React from 'react';
import Navbar from './Header/Navbar';
import CvButton from './common/CvButton';

const BurgerMenu = ({currentSection, handleActiveSection, currentScreenWidth}) => {
    return (
        <div className='burger-menu'>
            <Navbar currentSection={currentSection} handleActiveSection={handleActiveSection}/>
            {currentScreenWidth <= 654 && <CvButton fullWidthInDrawer/>}
        </div>
    );
};
export default BurgerMenu;