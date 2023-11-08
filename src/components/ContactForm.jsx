import React from 'react';
import {Box, Button} from '@mui/material';
import {activeColor, primaryColor, useStyles} from '../muiStyles';

const ContactForm = () => {

    const phoneNumber = +380666274210
    const email = 'thulsaDev@proton.me'

    const classes = useStyles()

    const submitBtnStyle = {
        width: '14rem',
        background: activeColor,
        color: primaryColor,
        border: '1px solid',
        borderRadius: '0.2rem',
        '&:hover': {
            borderColor: `${activeColor} !important`,
            backgroundColor: `transparent !important`,
            color: activeColor,
        },
    }

    return (
        <section id='contact' className='portfolio-section'>
            <Box className='container'>
                <h1 className='title text-center'>Contact Me</h1>
                <p className='description text-center'>I am available for hire.</p>
                <p className='description text-center'>Connect with me via phone: {phoneNumber} or
                    email: {email}</p>
                <form className='contact-form'>
                    <input placeholder='Your Name*' type='text'/>
                    <input placeholder='Your Email*' type='text'/>
                    <input placeholder='Write a subject' type='text'/>
                    <textarea placeholder='Your message'/>
                    <Box display='flex' justifyContent='center'>
                        <Button className={classes.customButton} sx={submitBtnStyle}>Submit</Button>
                    </Box>
                </form>
            </Box>
        </section>
    );
};

export default ContactForm;