import React from 'react';
import {Box, Grid} from '@mui/material';
import GridItem from './common/GridItem';
import ProjectItem from './common/ProjectItem';

const Projects = () => {
    return (
        <section id='projects' className='projects portfolio-section'>
            <Box className='container'>
                <Box className='projects__top-block row'>
                    <h1 className='projects__title title'>My latest projects</h1>
                    <p className='description'>My Latest Creations</p>
                    <p className='description'>A glimpse into my work</p>
                </Box>
                <Box className='row'>
                    <Grid container display='flex' alignItems='center' justifyContent='left'>
                        <GridItem>
                            <ProjectItem thumbnail='project__thumbnail-firedrive' title='Firedrive'
                                         description='Stream and store your files with ease'/>
                        </GridItem>
                        <GridItem>
                            <ProjectItem thumbnail='project__thumbnail-network' title='Social-network'
                                         description='Community of react developers'/>
                        </GridItem>
                        <GridItem>
                            <ProjectItem thumbnail='project__thumbnail-chatlink' title='Chatlink'
                                         description='Stay in touch'/>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </section>
    );
};

export default Projects;