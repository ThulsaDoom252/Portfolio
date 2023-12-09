import React, {useState} from 'react';
import Projects from './Projects';
import {delay} from '../../common';

const ProjectsContainer = ({currentScreenWidth, handleActiveSection}) => {
    const [isProjectDetailsVisible, toggleProjectDetails] = useState(false)

    const handleProjectDetails = async (section) => {
        toggleProjectDetails(!isProjectDetailsVisible)
        await delay(100)
        debugger
        handleActiveSection(section, null, true)
    }

    return <Projects currentScreenWidth={currentScreenWidth} isProjectDetailsVisible={isProjectDetailsVisible}
                     handleProjectDetails={handleProjectDetails}/>
};

export default ProjectsContainer;