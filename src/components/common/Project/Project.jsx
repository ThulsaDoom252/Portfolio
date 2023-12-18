import React from 'react';
import {Box, Button, Divider, Grid} from '@mui/material';
import Contacts from '../Contacts';
import GridItem from '../GridItem';
import {useStyles} from '../../../muiStyles';
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
                     type,
                     branch,
                     currentScreenWidth,
                     slideIndex,
                     images,
                     handleSlideChange,
                     sliderSettings,
                     sliderRef,
                 }) => {
    const classes = useStyles()

    const projectButtonStyle = {
        color: 'black',
        border: 'gray solid 1px',
        fontSize: '0.8rem',
        width: currentScreenWidth <= 510 ? '200px' : '300px',
    }

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
                        <a className='project-details__link' target='_blank' rel="noreferrer" href={gitLink}>View source
                            code</a>
                    </GridItem>
                    {deployLink && <GridItem padding='none' xs={6} md={4}>
                        <p className='project-details__subtitle'>Deployed</p>
                        <a className='project-details__link' target={'_blank'} rel='noreferrer'
                           href={deployLink}>View</a>
                    </GridItem>}
                </Grid>
                <Contacts showButton={false} iconSize={30}/>
                <Box className='project-details__image'>
                    <Slider arrows fade {...sliderSettings} ref={sliderRef}>
                        {images.map((image, index) =>
                            // eslint-disable-next-line
                            <img key={index} src={image} alt={`image${index}`}/>
                        )}
                    </Slider>
                </Box>
                <Divider/>
                <Box marginTop={5}>
                    <Grid container justifyContent={'center'}>
                        {images.map((image, index) =>

                            <React.Fragment key={index}>
                                <GridItem adaptive>
                                    <Box
                                        className={`project-details__item ${index === slideIndex && 'item-active'}`}
                                        onClick={() => handleSlideChange(index)}>
                                        { // eslint-disable-next-line
                                            <img key={index} className='project-details__thumbnail' src={image}
                                                 alt={'project-image'}/>}
                                    </Box>
                                </GridItem>
                            </React.Fragment>
                        )}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Project;