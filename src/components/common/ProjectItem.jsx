import React from 'react';
import Overlay from './Overlay';
import {Button} from '@mui/material';
import {useStyles} from '../../muiStyles';

const ProjectItem = ({thumbnail, title, description, onClick}) => {
    const classes = useStyles()
    return (
        <div className='portfolio'>
            <div className='portfolio__inner'>
                <div className={`portfolio__inner-thumbnail ${thumbnail}`}>
                    <div className='project__content'>
                        <p className='project__content-title'>{title}</p>
                        <p className='project__content-description description'>{description}</p>
                        <Button onClick={onClick} className={`${classes.customButton} project__content-button`}
                                variant='outlined'>View details</Button>
                    </div>
                    <Overlay onClick={onClick}/>
                </div>
            </div>
        </div>

    );
};

export default ProjectItem;