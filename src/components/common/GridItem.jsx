import React from 'react';
import {Grid} from '@mui/material';

const GridItem = ({
                      padding = 'p-3',
                      adaptiveGridValue = 3,
                      adaptive,
                      children,
                      xs = adaptive ? adaptiveGridValue : 12,
                      md = adaptive ? adaptiveGridValue : 6,
                      lg = adaptive ? adaptiveGridValue : 4
                  }) => {
    return (
        <Grid item className={padding} xs={xs} md={md} lg={lg}>
            {children}
        </Grid>
    );
};

export default GridItem;