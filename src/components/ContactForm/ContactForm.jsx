import React from 'react';
import {Box, Button} from '@mui/material';
import {activeColor, primaryColor, useStyles} from '../../muiStyles';
import {email, phoneNumber} from './contacts';
import Section from '../common/Section';

const ContactForm = () => {
    const classes = useStyles()

    const formValues = {
        name: '',
        senderEmail: '',
        subject: '',
        message: '',
    }

    const {name, senderEmail, subject, message} = formValues

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

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Submitted')
    }

    return (
        <Section id='contact' className='portfolio-section'>
            <Box className='container'>
                <h1 className='title text-center'>Contact Me</h1>
                <p style={{color: 'red'}} className='description  text-center'>Sorry, form is currently disabled</p>
                <p className='description text-center'>I am available for hire.</p>
                <p className='description text-center'>Connect with me via phone: {phoneNumber} or
                    email: {email}</p>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <input placeholder='Your Name*' type='text'/>
                    <input placeholder='Your Email*' type='text'/>
                    <input placeholder='Write a subject' type='text'/>
                    <textarea placeholder='Your message'/>
                    <Box display='flex' justifyContent='center'>
                        <Button disabled={true} type='submit' className={classes.customButton}
                                sx={submitBtnStyle}>Submit</Button>
                    </Box>
                </form>
            </Box>
        </Section>
    );
};

export default ContactForm;