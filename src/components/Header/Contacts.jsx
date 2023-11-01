import React from 'react';
import {Box, Button} from '@mui/material';
import {BiLogoFacebook} from 'react-icons/bi';
import {CiInstagram, CiMenuBurger} from 'react-icons/ci';
import {SlSocialTwitter} from 'react-icons/sl';

const Contacts = ({classes, currentScreenWidth}) => {

    const contactsIcons = [<BiLogoFacebook/>, <CiInstagram/>, <SlSocialTwitter/>]

    return <Box className='header-contacts' display='flex' justifyContent='space-between' alignItems='center'>
        <ul className='header-contact-list'>
            {contactsIcons.map((icon, index) => <li key={index}><a>{icon}</a></li>)}
        </ul>
        <Button className={classes.customButton} sx={{display: currentScreenWidth <= 654 ? 'none' : 'block'}}
                variant='outlined'>Contact
            me</Button>
        <button className={'burger-menu-btn'}><CiMenuBurger/></button>
    </Box>
};

export default Contacts;