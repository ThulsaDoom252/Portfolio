import React from 'react';
import {Box, Button, Divider, Grid} from '@mui/material';
import Contacts from './Contacts/Contacts';
import GridItem from './GridItem';
import {useStyles} from '../../muiStyles';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                     type,
                     branch,
                     currentScreenWidth,
                 }) => {
    const classes = useStyles()

    const projectButtonStyle = {
        color: 'black',
        border: 'gray solid 1px',
        fontSize: '0.8rem',
        width: currentScreenWidth <= 510 ? '200px' : '300px',
    }

    const images = [titleImage, image01, image02].filter(Boolean)

    return (
        <Box id={title} className='project-details__block'>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <h1 className='project-details__title title capitalize'>{title}</h1>
                <Button className={classes.customButton}
                        onClick={onClick}
                        sx={projectButtonStyle}>Back to list</Button>
            </Box>
            <Divider/>
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
                        <a className='project-details__link' target='_blank' href={gitLink}>View source code</a>
                    </GridItem>
                    {deployLink && <GridItem padding='none' xs={6} md={4}>
                        <p className='project-details__subtitle'>Deployed</p>
                        <a className='project-details__link' target={'_blank'} href={deployLink}>View</a>
                    </GridItem>}
                </Grid>
                <Contacts showButton={false} iconSize={30}/>
                <Box className='project-details__image'>
                    <img src={titleImage} alt="title-img"/>
                </Box>
                <Box marginTop={10}>
                    <Slider
                        dots
                        infinite
                        slidesToShow={images.length}
                        centerMode
                        slide
                        cssEase="linear"
                    >
                        {images.map((image, index) =>
                            <img key={index} className='project-details__thumbnail' src={image} alt={'project-image'}/>
                        )}
                    </Slider>
                </Box>
            </Box>
        </Box>
    );
};

export default Project;