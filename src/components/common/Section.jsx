import React from 'react';
import {Waypoint} from 'react-waypoint';


const Section = ({id, onEnter = () => void 0, className, children, topOffset = '90%'}) => {

    return (
        <Waypoint onEnter={onEnter} topOffset={topOffset}>
            <section id={id}
                     className={className}>
                {children}
            </section>
        </Waypoint>

    );
};

export default Section;