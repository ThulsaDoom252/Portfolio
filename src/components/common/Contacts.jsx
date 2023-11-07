import React from 'react';
import {Box, Button} from '@mui/material';
import {BiLogoFacebook} from 'react-icons/bi';
import {CiInstagram} from 'react-icons/ci';
import {SlSocialTwitter} from 'react-icons/sl';

const Contacts = ({classes, currentScreenWidth = 0, showButton = true, iconSize = currentScreenWidth <= 426 ? 24 : 25}) => {

    const contactsIcons = [<BiLogoFacebook size={iconSize}/>, <CiInstagram size={iconSize}/>,
        <SlSocialTwitter size={iconSize}/>]

    return <Box className='contacts-block' display='flex' justifyContent='space-between' alignItems='center'>
        <ul className='contacts-block__list'>
            {contactsIcons.map((icon, index) => <li key={index}><a>{icon}</a></li>)}
        </ul>
        {showButton &&
            <Button className={classes.customButton} sx={{display: currentScreenWidth <= 654 ? 'none' : 'block'}}
                    variant='outlined'>Contact
                me</Button>}
    </Box>
};

export default Contacts;