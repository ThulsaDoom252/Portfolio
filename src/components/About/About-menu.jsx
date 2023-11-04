import React from 'react';
import {experience, skills} from '../../common';

const AboutMenu = ({activeSection, setActiveSection}) => {

    const sections = [skills, experience]

    return (
        <ul className='about__navbar'>
            {sections.map((item, index) =>
                <li key={index}
                    onClick={() => setActiveSection(item)}
                    className={`about__navbar-item ${activeSection === item && 'isActive'}`}>
                    <a>{item}</a>
                </li>)}
        </ul>
    );
};

export default AboutMenu;