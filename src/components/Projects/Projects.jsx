import React from 'react';
import {Box, Grid} from '@mui/material';
import GridItem from '../common/GridItem';
import ProjectItem from '../common/ProjectItem';
import Project from '../common/Project';
import {projectItems} from './content';
import Section from '../common/Section';

const Projects = ({isProjectDetailsVisible, handleProjectDetails, currentScreenWidth}) => {
    return (
        <Section id='projects'
                 className={`projects portfolio-section ${isProjectDetailsVisible ? 'project-details' : 'projects-list'}`}>
            <Box className='projects-container'>
                {!isProjectDetailsVisible ?
                    <>
                        <Box className='projects__top-block row'>
                            <h1 className='projects__title title'>My latest projects</h1>
                            <p className='description'>My Latest Creations</p>
                            <p className='description'>A glimpse into my work</p>
                        </Box>
                        <Box className='row'>
                            <Grid container display='flex' alignItems='center' justifyContent='left'>
                                {projectItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <GridItem>
                                            <ProjectItem thumbnail={item.itemThumbnailClass}
                                                         onClick={() => handleProjectDetails(item.title)}
                                                         title={item.title}
                                                         description={item.subTitle}/>
                                        </GridItem>
                                    </React.Fragment>
                                ))}
                            </Grid>
                        </Box>
                    </> : <>{projectItems.map((item, index) =>
                        <React.Fragment key={index}>
                            <Project
                                currentScreenWidth={currentScreenWidth}
                                onClick={() => handleProjectDetails('projects')}
                                title={item.title} subtitle={item.subTitle}
                                branch={item.branch}
                                type={item.type}
                                description={item.description}
                                deployLink={item.deployLink}
                                gitLink={item.gitLink}
                                titleImage={item.titleImage}
                                image01={item.image01}
                                image02={item.image02}
                            /></React.Fragment>)}</>}
            </Box>
        </Section>


    );
};

export default Projects;