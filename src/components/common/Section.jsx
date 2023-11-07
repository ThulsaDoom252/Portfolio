import React, {useEffect} from 'react';
import {useInView} from 'react-intersection-observer'

const Section = ({id, onSectionChange, className, children, currentSection}) => {

    const [ref, inView] = useInView({
        threshold: 0.1
    })

    // useEffect(() => {
    //     if (inView && currentSection !== id) {
    //         onSectionChange(id)
    //     }
    // }, [inView, id, currentSection, onSectionChange]);


    return (
        <section id={id} ref={ref} className={className}>
            {children}
        </section>
    );
};

export default Section;