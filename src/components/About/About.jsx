import React from 'react';
import {Box} from '@mui/material';
import aboutPhoto from '../../assets/photo01.jpg'
import AboutMenu from './About-menu';
import Skills from './Skills';
import Experience from './Experience';
import {skills} from '../../common';
import Section from '../common/Section';

const About = ({aboutActiveBlock, setAboutActiveBlock}) => {
    return (
        <Section id='about' className='about portfolio-section'>
            <Box className='container'>
                <Box className='about__row'>
                    <div className='about__first-col'>
                        <img className='w-full' src={aboutPhoto} alt="about-photo"/>
                    </div>
                    <div className='about__second-col'>
                        <div className='about__inner-block'>
                            <div className='about__top'>
                                <h1 className='about__title title'>About Me</h1>
                                <p className='about__description description'>React js/ts developer. Ui/ux designer.
                                    Crafting perfection</p>
                            </div>
                            <div className='about__bottom'>
                                <AboutMenu {...{aboutActiveBlock, setAboutActiveBlock}}/>
                                {aboutActiveBlock === skills ? <Skills/> : <Experience/>}
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </Section>
    );
};

export default About;