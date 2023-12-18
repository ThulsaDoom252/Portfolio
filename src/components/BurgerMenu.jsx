import React from 'react';
import Navbar from './Header/Navbar';
import CvButton from './common/CvButton';
import Contacts from './common/Contacts';

const BurgerMenu = ({
                        currentSection,
                        handleActiveSection,
                        currentScreenWidth,
                        widthToRelocateCvBtn,
                        widthToRelocateContacts,
                        classes,
                    }) => {
    return (
        <div className='burger-menu'>
            <Navbar currentSection={currentSection} handleActiveSection={handleActiveSection}/>
            {currentScreenWidth <= widthToRelocateCvBtn && <CvButton fullWidthInDrawer/>}
            {currentScreenWidth <= widthToRelocateContacts &&
                <Contacts classes={classes} currentScreenWidth={currentScreenWidth}/>}
        </div>
    );
};
export default BurgerMenu;