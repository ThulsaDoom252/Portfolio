import React from 'react';
import {Grid} from '@mui/material';

const GridItem = ({padding = 'p-3', children, xs = 12, md = 6, lg = 4}) => {
    return (
        <Grid item className={padding} xs={xs} md={md} lg={lg}>
            {children}
        </Grid>
    );
};

export default GridItem;