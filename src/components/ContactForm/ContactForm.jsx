import React from 'react';
import {Box, Button} from '@mui/material';
import {activeColor, disabledBtnColor, primaryColor} from '../../muiStyles';
import Section from '../common/Section';
import {contacts} from '../../common';
import {contactData} from '../../config';

const ContactForm = ({
                         classes,
                         formRef,
                         isBtnDisabled,
                         formErrorsValues,
                         handleFormChange,
                         formValues,
                         handleSubmit
                     }) => {

        const submitBtnStyle = {
            width: '14rem',
            background: activeColor,
            color: isBtnDisabled ? disabledBtnColor : primaryColor,
            border: '1px solid',
            borderRadius: '0.2rem',
            marginTop: '20px',
            '&:hover': () => {
                if (!isBtnDisabled) {
                    return {
                        borderColor: `${activeColor} !important`,
                        backgroundColor: `transparent !important`,
                        color: activeColor,
                    }
                }
            },
        }

        const inputErrorStyle = {
            borderColor: activeColor
        }

        return (
            <Section id={contacts} className='portfolio-section'>
                <Box className='container'>
                    <h1 className='title text-center'>Contact Me</h1>
                    <p className='description text-center'>I am available for hire.</p>
                    <p className='description text-center'>Connect with me via phone: {contactData.phone} or
                        email: {contactData.email}</p>
                    <p className='description text-center'>Note: All fields marked with * must be filled</p>
                    <form ref={formRef} className='contact-form' onSubmit={(e) => handleSubmit(e)}>
                        <Box marginTop={'30px'} position={'relative'}>
                            <div className={'contact-form__error'}>
                                {formErrorsValues.name}
                            </div>
                            <input style={formErrorsValues.name ? inputErrorStyle : void 0} name='name'
                                   placeholder='Your Name*' type='text' onChange={handleFormChange}
                                   value={formValues.name}/>

                        </Box>
                        <Box marginTop={'30px'} position={'relative'}>
                            <div className={'contact-form__error'}>
                                {formErrorsValues.email}
                            </div>
                            <input style={formErrorsValues.email ? inputErrorStyle : void 0} name='email'
                                   placeholder='Your Email*' type='text' onChange={handleFormChange}
                                   value={formValues.email}/>
                        </Box>
                        <Box marginTop={'30px'} position={'relative'}>
                            <div className={'contact-form__error'}>{formErrorsValues.subject}</div>
                            <input style={formErrorsValues.subject ? inputErrorStyle : void 0} name='subject'
                                   placeholder='Subject' type='text' onChange={handleFormChange}
                                   value={formValues.subject}/>
                        </Box>
                        <Box marginTop={'30px'} position={'relative'}>
                            <div className={'contact-form__error'}>
                                {formErrorsValues.message}
                            </div>
                            <textarea style={formErrorsValues.message ? inputErrorStyle : void 0} name='message'
                                      placeholder='Message*' onChange={handleFormChange} value={formValues.message}/>
                        </Box>
                        <Box display='flex' justifyContent='center' marginTop={'20px'}>
                            <Button disabled={isBtnDisabled} type='submit' className={classes.customButton}
                                    sx={submitBtnStyle}>{isBtnDisabled ? 'Sending...' : 'Submit'}</Button>
                        </Box>
                    </form>
                </Box>
            </Section>
        );
    };

export default ContactForm;