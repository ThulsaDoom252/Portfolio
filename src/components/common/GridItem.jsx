import React from 'react';
import {Grid} from '@mui/material';

const GridItem = ({children, xs = 12,  md = 6, lg = 4}) => {
    return (
        <Grid  item className='p-3' xs={xs}  md={md} lg={lg}>
            {children}
        </Grid>
    );
};

export default GridItem;