import React, {useState} from 'react';
import About from './About';
import {skills} from '../../common';

const AboutContainer = () => {
    const [aboutActiveBlock, setAboutActiveBlock] = useState(skills)

    return <About {...{aboutActiveBlock, setAboutActiveBlock}}/>
};

export default AboutContainer;