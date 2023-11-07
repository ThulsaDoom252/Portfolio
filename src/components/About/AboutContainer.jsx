import React, {useState} from 'react';
import About from './About';
import {skills} from '../../common';

const AboutContainer = ({handleActiveSection, currentSection}) => {
    const [aboutActiveBlock, setAboutActiveBlock] = useState(skills)

    return <About {...{aboutActiveBlock, currentSection, setAboutActiveBlock, handleActiveSection, }}/>
};

export default AboutContainer;