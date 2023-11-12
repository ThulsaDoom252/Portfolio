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
import ContactForm from './components/ContactForm/ContactForm';

function App() {
    const [currentSection, setCurrentSection] = useState(null)
    const [isSticky, setIsSticky] = useState(false)

    const {width: currentScreenWidth} = useWindowDimensions()

    useEffect(() => {
        const stickyPos = 50
        const handleScroll = () => window.scrollY > stickyPos ? setIsSticky(true) : setIsSticky(false)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleActiveSection = (section) => {
        const targetElement = document.getElementById(section);
        if (targetElement) {
            const offset = 100;
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'instant'
            });
        }
    }

    useEffect(() => {
        const handleScrollAnchor = () => {

            const scrollPosition = window.scrollY;
            const homeSection = document.getElementById('home')
            const aboutSection = document.getElementById('about')
            const projectsSection = document.getElementById('projects');
            const landingsSection = document.getElementById('landings');

            const offsetModifier = 7

            const sectionsPos = [homeSection.offsetTop, aboutSection.offsetTop, projectsSection.offsetTop, landingsSection.offsetTop]

            const modifiedSectionsPost = sectionsPos.map(section => section - offsetModifier)

            if (scrollPosition >= modifiedSectionsPost[0] && scrollPosition < modifiedSectionsPost[1]) {
                setCurrentSection('home')
            } else if (scrollPosition >= modifiedSectionsPost[1] && scrollPosition < modifiedSectionsPost[2]) {
                setCurrentSection('about')
            } else if (
                scrollPosition >= modifiedSectionsPost[2] &&
                scrollPosition < modifiedSectionsPost[3]
            ) {
                setCurrentSection('projects');
            } else if (scrollPosition >= modifiedSectionsPost[3]) {
                setCurrentSection('landings');
            }
        };
        window.addEventListener('scroll', handleScrollAnchor);

        return () => {
            window.removeEventListener('scroll', handleScrollAnchor);
        };
    }, []);

    return (
        <>
            <HeaderContainer currentSection={currentSection} isSticky={isSticky}
                             currentScreenWidth={currentScreenWidth}/>
            <Home/>
            <main>
                <AboutContainer/>
                <ProjectsContainer handleActiveSection={handleActiveSection} currentScreenWidth={currentScreenWidth}/>
                <LandingsContainer currentScreenWidth={currentScreenWidth} handleActiveSection={handleActiveSection}/>
                {/*<ContactForm/>*/}
            </main>
            <FooterContainer currentScreenWidth={currentScreenWidth}/>
        </>
    );
}

export default App;
