import React from 'react';
import {Grid} from '@mui/material';

const GridItem = ({key, padding = 'p-3', children, xs = 12, md = 6, lg = 4}) => {
    return (
        <Grid key={key} item className={padding} xs={xs} md={md} lg={lg}>
            {children}
        </Grid>
    );
};

export default GridItem;