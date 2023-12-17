import React, {useRef, useState} from 'react';
import {useSnackbar} from 'notistack';
import {defaultFormValues, emailErrStr, emailFormat, emailValidator, requiredField, shortMessage} from './data';
import emailjs from '@emailjs/browser';
import {config} from '../../config';
import {useStyles} from '../../muiStyles';
import {delay} from '../../common';
import ContactForm from './ContactForm';

const ContactFormContainer = () => {
    const classes = useStyles()
    const formRef = useRef()
    const [isBtnDisabled, disableBtn] = useState(false)
    const {enqueueSnackbar: snackbar} = useSnackbar();
    const [formValues, setFormValues] = useState({...defaultFormValues})
    const [formErrorsValues, setFormErrorsValues] = useState({...defaultFormValues})
    const sendEmail = async (e) => {
        e.preventDefault()
        console.log(config)
        return new Promise(r => {
            emailjs.sendForm(config.serviceId, config.templateId, formRef.current, config.publicKey)
                .then(() => {
                    r(true)
                })
                .catch(e => {
                    console.error('Sending email error: ', e)
                    r(false)
                })
        })
    };
    const validateForm = (values) => {
        return new Promise(r => {
            const updatedFormErrors = {...defaultFormValues}
            !values.name ? updatedFormErrors.name = requiredField : void 0
            !values.email ? updatedFormErrors.email = requiredField : !emailValidator.test(values.email) ? updatedFormErrors.email = emailFormat : void 0
            !values.message ? updatedFormErrors.message = requiredField : values.message.length < 10 ? updatedFormErrors.message = shortMessage : void 0
            r(updatedFormErrors)
        })
    };
    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formErrors = await validateForm(formValues)
        const isValid = Object.values(formErrors).every(value => !value);
        if (!isValid) {
            setFormErrorsValues(prevState => ({...prevState, ...formErrors}))
            return
        }
        disableBtn(true)
        try {
            const isEmailSend = await sendEmail(e)
            await delay(2000)
            isEmailSend ? snackbar('Message sent!') : snackbar(emailErrStr, {variant: 'error'})
        } catch (e) {
            console.error('Submit form error:', e)
            snackbar(emailErrStr, {variant: 'error'})
        }
        disableBtn(false)
    }

    return <ContactForm {...{
        classes,
        formRef,
        formValues,
        isBtnDisabled,
        formErrorsValues,
        handleFormChange,
        handleSubmit
    }}/>
};

export default ContactFormContainer;