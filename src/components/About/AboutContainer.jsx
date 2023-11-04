import React, {useState} from 'react';
import About from './About';
import {skills} from '../../common';

const AboutContainer = () => {
    const [activeSection, setActiveSection] = useState(skills)

    return <About {...{activeSection, setActiveSection}}/>
};

export default AboutContainer;