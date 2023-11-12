import React, {useEffect, useState} from 'react';
import {delay} from '../common';
import {Box} from '@mui/material';
import Section from './common/Section';

const Home = () => {
    const [textIndex, setTextIndex] = useState(0)
    const [slideAnimation, toggleSlideAnimation] = useState(false)
    const texts = ['React developer', 'Ui/ux designer']

    const handleAnimationSlide = async () => {
        toggleSlideAnimation(true)
        await delay(700)
        setTextIndex((prevIndex) => (prevIndex === 0 ? 1 : 0))
        toggleSlideAnimation(false)
    }

    useEffect(() => {
        const timeout = 3500
        const interval = setInterval(() => {
            handleAnimationSlide()
        }, timeout)

        return () => clearInterval(interval)
    }, [])

    return (
        <Section id='home' className='greet portfolio-section'>
            <Box className='container'>
                <div className='greet__main-text'>
                    <p className='greet__label description'>welcome to my world</p>
                    <h1 className='greet__title'>Hi, i'm Vladimir</h1>
                    <h1 className={` greet__title ${slideAnimation && 'greet-animated-slide'} ${textIndex === 0 ? 'greet__react-text' : 'greet__designer-text'}`}>{texts[textIndex]}</h1>
                    <h1 className='greet__subtitle'>based in Ukraine</h1>
                </div>
            </Box>
        </Section>
    );
};

export default Home;