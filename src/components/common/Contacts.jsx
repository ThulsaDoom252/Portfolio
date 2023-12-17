import React from 'react';
import {Box, Button} from '@mui/material';
import {BiLogoFacebook, BiLogoGithub} from 'react-icons/bi';
import {CiInstagram} from 'react-icons/ci';
import {SlSocialTwitter} from 'react-icons/sl';
import {userData} from '../../config';
import CvButton from './CvButton';

const Contacts = ({
                      classes,
                      currentScreenWidth = 0,
                      showButton = true,
                      iconSize = currentScreenWidth <= 426 ? 24 : 25
                  }) => {

    const contactsIcons = [
        {icon: <BiLogoFacebook size={iconSize}/>, site: userData.facebook},
        {icon: <CiInstagram size={iconSize}/>, site: userData.instagram},
        {icon: <BiLogoGithub size={iconSize}/>, site: userData.github},
    ]

    return <Box className='contacts-block' display='flex' justifyContent='space-between' alignItems='center'>
        <ul className='contacts-block__list'>
            {contactsIcons.map((contact, index) => <li className='contacts-block__list-item' key={index}><a
                onClick={() => contact.site === 'null' && alert('Sorry, has no account here :D')}
                target={contact.site && '_blank'}
                href={contact.site !== 'null' ? contact.site : void 0}>{contact.icon}</a>
            </li>)}
        </ul>
        {showButton && <CvButton/>}
    </Box>
};

export default Contacts;