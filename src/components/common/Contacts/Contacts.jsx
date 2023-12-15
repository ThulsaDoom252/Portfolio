import React from 'react';
import {Box, Button} from '@mui/material';
import {BiLogoFacebook} from 'react-icons/bi';
import {CiInstagram} from 'react-icons/ci';
import {SlSocialTwitter} from 'react-icons/sl';
import {contactData} from '../../../config';

const Contacts = ({
                      classes,
                      currentScreenWidth = 0,
                      showButton = true,
                      iconSize = currentScreenWidth <= 426 ? 24 : 25
                  }) => {

    const contactsIcons = [
        {icon: <BiLogoFacebook size={iconSize}/>, site: contactData.facebook},
        {icon: <CiInstagram size={iconSize}/>, site: contactData.instagram},
        {icon: <SlSocialTwitter size={iconSize}/>, site: contactData.twitter},
    ]

    return <Box className='contacts-block' display='flex' justifyContent='space-between' alignItems='center'>
        <ul className='contacts-block__list'>
            {contactsIcons.map((contact, index) => <li className='contacts-block__list-item' key={index}><a
                onClick={() => contact.site === 'null' && alert('Sorry, has no account here :D')}
                target={contact.site && '_blank'}
                href={contact.site !== 'null' ? contact.site : void 0}>{contact.icon}</a>
            </li>)}
        </ul>
        {showButton &&
            <Button className={classes.customButton} sx={{display: currentScreenWidth <= 654 ? 'none' : 'block'}}
                    variant='outlined'>Contact
                me</Button>}
    </Box>
};

export default Contacts;