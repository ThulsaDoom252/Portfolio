import React from 'react';
import Overlay from '../common/Overlay';
import {Button} from '@mui/material';
import {useStyles} from '../../muiStyles';

const Project = ({thumbnail, title, description}) => {
    const classes = useStyles()

    return (
        <div className={`portfolio  ${thumbnail}`}>
            <Overlay/>
            <div className='project__content'>
                <p className='project__content-title'>{title}</p>
                <p className='project__content-description description'>{description}</p>
                <Button className={`${classes.customButton} project__content-button`}
                        variant='outlined'>View details</Button>
            </div>
        </div>

    );
};

export default Project;