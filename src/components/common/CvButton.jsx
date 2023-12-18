import React from 'react';
import {Button, Tooltip} from '@mui/material';
import {BsDownload} from 'react-icons/bs';
import {useStyles} from '../../muiStyles';
import {userData} from '../../config';

const CvButton = ({fullWidthInDrawer}) => {
    const classes = useStyles()
    const handleDownload = () => {
        const {cv, name} = userData
        const url = cv
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        link.click();
    };

    return (
        <Tooltip title={'Download cv'}>
            <Button onClick={handleDownload}
                    sx={{width: fullWidthInDrawer ? '90%' : void 0}}
                    className={`${classes.customButton} project__content-button`}
                    variant='outlined'> &nbsp;CV  &nbsp;&nbsp; <BsDownload/></Button>
        </Tooltip>
    );
};

export default CvButton;