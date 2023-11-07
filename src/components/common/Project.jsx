import React from 'react';
import {Box, Button, Grid} from '@mui/material';
import Contacts from './Contacts/Contacts';
import GridItem from './GridItem';
import {useStyles} from '../../muiStyles';

const Project = ({
                     title,
                     gitLink,
                     onClick,
                     deployLink,
                     subtitle,
                     description,
                     titleImage,
                     image01,
                     image02,
                     key,
                     type,
                     branch,
                 }) => {
    const classes = useStyles()
    return (
        <Box key={key} id={title} className='project-details__block'>
            <Box display='flex' justifyContent='space-between'>
                <h1 className='project-details__title title capitalize'>{title}</h1>
                <Button className={classes.customButton}
                        onClick={onClick}
                        sx={{color: 'black', border: 'gray solid 1px', width: '300px'}}>Back to list</Button>
            </Box>
            <p className='project-details__subtitle'>{subtitle}</p>
            <p>{description}</p>
            <Box>
                <Grid container padding={0} margin={0}>
                    <GridItem padding='none' xs={6} md={4}>
                        <p className='project-details__subtitle'>Branch</p>
                        <p>{branch}</p>
                    </GridItem>
                    <GridItem padding='none' xs={6} md={4}>
                        <p className='project-details__subtitle'>Type</p>
                        <p>{type}</p>
                    </GridItem>
                    <GridItem padding='none' xs={6} md={4}>
                        <p className='project-details__subtitle'>Github</p>
                        <a target='_blank' href={gitLink}>View source code</a>
                    </GridItem>
                    <GridItem padding='none' xs={6} md={4}>
                        <p className='project-details__subtitle'>Deployed</p>
                        <a target={'_blank'}  href={deployLink}>View</a>
                    </GridItem>
                </Grid>
                <Contacts showButton={false} iconSize={30}/>
                <Box className='project-details__thumbnail'>
                    <img src={titleImage} alt="title-img"/>
                </Box>
                <Box className='project-details__thumbnail'>
                    <img src={image01} alt="title-img"/>
                </Box>
                <Box className='project-details__thumbnail'>
                    <img src={image02} alt="title-img"/>
                </Box>
            </Box>
        </Box>
    );
};

export default Project;