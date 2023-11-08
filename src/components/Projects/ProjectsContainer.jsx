import React, {useState} from 'react';
import Projects from './Projects';
import {delay} from '../../common';

const ProjectsContainer = ({handleActiveSection, currentScreenWidth}) => {
    const [isProjectDetailsVisible, toggleProjectDetails] = useState(false)

    const handleProjectDetails = async (section) => {
        toggleProjectDetails(!isProjectDetailsVisible)
        await delay(100)
        handleActiveSection(section)
    }

    return <Projects currentScreenWidth={currentScreenWidth} isProjectDetailsVisible={isProjectDetailsVisible} handleProjectDetails={handleProjectDetails}/>
};

export default ProjectsContainer;