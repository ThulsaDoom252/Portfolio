import React, {useEffect, useState} from 'react';
import Header from './Header';
import {useStyles} from '../../muiStyles';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const HeaderContainer = () => {
    const {width: currentScreenWidth} = useWindowDimensions()
    const classes = useStyles()
    const [currentSection, setCurrentSection] = useState(null)
    const [isSticky, setIsSticky] = useState(false)

    const handleActiveSection = (section) => {
        setCurrentSection(section)
        const targetElement = document.getElementById(section);
        if (targetElement) {
            targetElement.scrollIntoView();
        }
    }

    useEffect(() => {
        const stickyPos = 100
        const handleScroll = () => window.scrollY > stickyPos ? setIsSticky(true) : setIsSticky(false)

        const handleRect = () => {
            // Получаем все элементы, которые представляют собой секции на странице
            const sections = document.querySelectorAll('.section');

            // Определяем, на какой секции находится пользователь
            for (const section of sections) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    setCurrentSection(section.id);
                    console.log(section.id)
                    break; // Найденная секция, выходим из цикла
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handleRect)

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handleRect);
        };
    }, []);


    return <Header
        isSticky={isSticky}
        currentScreenWidth={currentScreenWidth}
        classes={classes}
        currentSection={currentSection}
        handleActiveSection={handleActiveSection}/>;
};

export default HeaderContainer;