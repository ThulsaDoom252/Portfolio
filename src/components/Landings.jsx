import React from 'react';
import {Box, Grid} from '@mui/material';
import GridItem from './common/GridItem';
import ProjectItem from './common/ProjectItem';

const Landings = () => {
    return (
        <section id='landings' className='projects landings portfolio-section'>
            <Box className={'container'}>
                <h1 className='title text-center'>Landings</h1>
                <p className='description text-center'>Explore my captivating landing pages</p>
                <p className='description text-center'>Each designed to convert and engage</p>
                <Box className='row'>
                    <Grid container>
                        <GridItem lg={6} md={6}>
                            <ProjectItem title='burning-man' description='this will be epic'
                                         thumbnail='thumbnail-burning-man'/>
                        </GridItem>
                        <GridItem lg={6} md={6}>
                            <ProjectItem title='Barber-shop' description='Hairstyle reflects personality inside you'
                                         thumbnail='thumbnail-barber'/>
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </section>
    );
};

export default Landings;