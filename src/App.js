import './App.less';
import 'reset-css';
import {ThemeProvider} from '@mui/material';
import {theme, useStyles} from "./muiStyles"
import HeaderContainer from './components/Header/HeaderContainer';
import Greet from './components/Greet';
import AboutContainer from './components/About/AboutContainer';
import Projects from './components/Projects/Projects';
import Landings from './components/Landings/Landings';
import Footer from './components/Footer/Footer';
import useWindowDimensions from './hooks/useWindowDimensions';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import {useEffect, useState} from 'react';
import LandingsContainer from './components/Landings/LandingsContainer';
import FooterContainer from './components/Footer/FooterContainer';

function App() {

    const [currentSection, setCurrentSection] = useState(null)
    const [isSticky, setIsSticky] = useState(false)

    const {width: currentScreenWidth} = useWindowDimensions()

    const handleActiveSection = (section, isProjectSection) => {
        if (section !== currentSection) {
            !isProjectSection && setCurrentSection(section);
            const targetElement = document.getElementById(section);
            if (targetElement) {
                const offset = 100;
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        }
    }

    useEffect(() => {
        const stickyPos = 100
        const handleScroll = () => window.scrollY > stickyPos ? setIsSticky(true) : setIsSticky(false)

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     setCurrentSection(entry.target.id);
    //                 }
    //             });
    //         },
    //         {
    //             rootMargin: '-100px 0px 0px 0px' // отступ от верхней границы viewport
    //         }
    //     );
    //     const sections = document.querySelectorAll('section');
    //     sections.forEach((section) => {
    //         observer.observe(section);
    //     });
    //     return () => {
    //         sections.forEach((section) => {
    //             observer.unobserve(section);
    //         });
    //     };
    // }, []);


    return (
        <>
            <HeaderContainer currentSection={currentSection} isSticky={isSticky}
                             handleActiveSection={handleActiveSection} currentScreenWidth={currentScreenWidth}/>
            <Greet currentSection={currentSection} handleActiveSection={handleActiveSection}/>
            <main>
                <AboutContainer handleActiveSection={handleActiveSection} currentSection={currentSection}/>
                <ProjectsContainer handleActiveSection={handleActiveSection}/>
                <LandingsContainer handleActiveSection={handleActiveSection}/>
            </main>
            <FooterContainer currentScreenWidth={currentScreenWidth}/>
        </>

    );
}

export default App;
