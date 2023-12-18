import './App.less';
import 'reset-css';
import HeaderContainer from './components/Header/HeaderContainer';
import Home from './components/Home';
import AboutContainer from './components/About/AboutContainer';
import useWindowDimensions from './hooks/useWindowDimensions';
import ProjectsContainer from './components/Projects/ProjectsContainer';
import {useEffect, useState} from 'react';
import LandingsContainer from './components/Landings/LandingsContainer';
import FooterContainer from './components/Footer/FooterContainer';
import {about, contacts, home, landings, projects} from './common';
import ContactFormContainer from './components/ContactForm/ContactFormContainer';
import FloatBtn from './components/FloatBtn';

function App() {
    const [currentSection, setCurrentSection] = useState(home)
    const [currentlyClickedNavItem, setCurrentlyClickedNavItem] = useState(null)
    const [isSticky, setIsSticky] = useState(false)
    const [isFloatBtnVisible, toggleFloatBtn] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const {width: currentScreenWidth} = useWindowDimensions()

    //handle sticky header on scroll
    useEffect(() => {
        const stickyPos = 50
        const handleScroll = () => window.scrollY > stickyPos ? setIsSticky(true) : setIsSticky(false)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //Handling active navItem on scroll
    useEffect(() => {
        const handleScrollAnchor = () => {
            const scrollPosition = window.scrollY;
            const homeSection = document.getElementById('home')
            const aboutSection = document.getElementById('about')
            const projectsSection = document.getElementById('projects');
            const landingsSection = document.getElementById('landings');
            const contactsSection = document.getElementById(('contacts'))
            const offsetModifier = 100
            const sectionsPos = [homeSection.offsetTop, aboutSection.offsetTop, projectsSection.offsetTop, landingsSection.offsetTop, contactsSection.offsetTop]
            const modifiedSectionsPos = sectionsPos.map(section => section !== homeSection.offsetTop && section - offsetModifier)

            if (scrollPosition >= modifiedSectionsPos[0] && scrollPosition < modifiedSectionsPos[1]) {
                handleScrolledSection(home)
            } else if (scrollPosition >= modifiedSectionsPos[1] && scrollPosition < modifiedSectionsPos[2]) {
                handleScrolledSection(about)
            } else if (
                scrollPosition >= modifiedSectionsPos[2] &&
                scrollPosition < modifiedSectionsPos[3]
            ) {
                handleScrolledSection(projects)
            } else if (scrollPosition >= modifiedSectionsPos[3] && scrollPosition < modifiedSectionsPos[4]) {
                handleScrolledSection(landings)
            } else if (scrollPosition >= modifiedSectionsPos[4]) {
                handleScrolledSection(contacts)
            }
        };
        window.addEventListener('scroll', handleScrollAnchor);

        return () => {
            window.removeEventListener('scroll', handleScrollAnchor);
        };
        //eslint-disable-next-line
    }, [currentSection, currentlyClickedNavItem]);


    useEffect(() => {
        if (isDrawerOpen) {
            isFloatBtnVisible && toggleFloatBtn(false)
        } else {
            (!isFloatBtnVisible && currentSection !== home) && toggleFloatBtn(true)
        }
        //eslint-disable-next-line
    }, [isDrawerOpen]);

    function handleScrolledSection(section) {
        if (section !== home) {
            (!isFloatBtnVisible && !isDrawerOpen) && toggleFloatBtn(true)
        } else {
            isFloatBtnVisible && toggleFloatBtn(false)
        }

        if (!currentlyClickedNavItem && section !== currentSection) {
            setCurrentSection(section)
        } else if (section === currentlyClickedNavItem) {
            setCurrentlyClickedNavItem(null)
        }
    }

    function handleActiveSection(section, event, isDetailMode, backToMainMode, instant) {
        event && event.preventDefault()
        !isDetailMode && setCurrentlyClickedNavItem(section)
        if (currentSection !== section || backToMainMode) {
            setCurrentSection(section)
            handleScroll(section, instant)
        }
    }

    const handleScroll = (section, instant) => {
        const targetElement = document.getElementById(section)
        const offset = 100;
        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: instant || 'smooth',
        });
    }

    return (
        <>
            <HeaderContainer currentSection={currentSection}
                             isSticky={isSticky}
                             handleActiveSection={handleActiveSection}
                             currentScreenWidth={currentScreenWidth}
                             isDrawerOpen={isDrawerOpen}
                             setIsDrawerOpen={setIsDrawerOpen}
            />
            <FloatBtn isFloatBtnVisible={isFloatBtnVisible} handleScroll={handleScroll}/>
            <Home/>
            <main>
                <AboutContainer/>
                <ProjectsContainer handleActiveSection={handleActiveSection}
                                   currentScreenWidth={currentScreenWidth}/>
                <LandingsContainer currentScreenWidth={currentScreenWidth}
                                   handleActiveSection={handleActiveSection}/>
                <ContactFormContainer/>
            </main>
            <FooterContainer currentScreenWidth={currentScreenWidth}/>
        </>
    );
}

export default App;
