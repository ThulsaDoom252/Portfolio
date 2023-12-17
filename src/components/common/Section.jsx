import React from 'react';

const Section = ({id, onEnter = () => void 0, className, children, topOffset = '90%'}) => {
    return (
        <section id={id}
                 className={className}>
            {children}
        </section>

    );
};

export default Section;