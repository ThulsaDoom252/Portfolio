import React from 'react';
import {Box, Grid} from '@mui/material';
import GridItem from '../common/GridItem';
import ProjectItem from '../common/ProjectItem';
import {landingItems} from './content';
import Project from '../common/Project';

const Landings = ({isLandingDetailsVisible, handleLandingDetails}) => {
    return (
        <section id='landings'
                 className={`projects landings portfolio-section ${isLandingDetailsVisible ? 'project-details' : 'projects-list'}`}>
            <Box className='container'>
                {!isLandingDetailsVisible ?
                    <>
                        <h1 className='title text-center'>Landings</h1>
                        <p className='description text-center'>Explore my captivating landing pages</p>
                        <p className='description text-center'>Each designed to convert and engage</p>
                        <Box className='row'>
                            <Grid container>
                                {landingItems.map((item, index) => (
                                    <GridItem key={index} lg={6} md={6}>
                                        <ProjectItem title={item.title}
                                                     onClick={() => handleLandingDetails(item.title)}
                                                     description={item.subTitle}
                                                     thumbnail={item.itemThumbnailClass}/>
                                    </GridItem>
                                ))}
                            </Grid>
                        </Box>
                    </> : <>
                        {landingItems.map((item, index) => (
                            <Project key={index}
                                     onClick={() => handleLandingDetails('landings')}
                                     title={item.title}
                                     branch={item.branch}
                                     type={item.type}
                                     gitLink={item.gitLink}
                                     deployLink={item.deployLink}
                                     subtitle={item.subTitle}
                                     titleImage={item.titleImage}
                                     image01={item.image01}
                                     image02={item.image02}
                                     description={item.description}
                            />
                        ))}
                    </>}
            </Box>
        </section>
    );
};

export default Landings;