import firedriveTite from "../../assets/firedrive/fd_videos.jpg"
import firedriveImage01 from "../../assets/firedrive/fd_pics02.jpg"
import firedriveImage02 from "../../assets/firedrive/fd_audio.jpg"

import networkTitle from "../../assets/social-network/sn_auth.jpg"
import networkImage01 from "../../assets/social-network/sn_edit.jpg"
import networkImage02 from "../../assets/social-network/sn_users.jpg"

import chatTitle from "../../assets/chatlink/chat01.jpg"
import chatImage01 from "../../assets/chatlink/chat02.jpg"

export const projectItems = [
    {
        title: 'firedrive',
        branch: 'Media-storage',
        type: 'Web-app',
        subTitle: 'Stream and store your files with ease',
        description: 'Immerse yourself in the world of your media. Dive into breathtaking visuals with image viewing, experience the magic of cinema with video playback, and let the music surround your soul with seamless audio listening',
        itemThumbnailClass: 'project__thumbnail-firedrive',
        titleImage: firedriveTite,
        image01: firedriveImage01,
        image02: firedriveImage02,
        gitLink: 'https://github.com/ThulsaDoom252/FireDrive',
        deployLink: 'https://firedrive2-4137d.web.app/',
    },
    {
        title: 'social-network',
        branch: 'Social-network',
        type: 'Web-app',
        subTitle: 'Community of react-developers',
        description: 'A thriving digital ecosystem designed exclusively for React aficionados, offering a space to connect, collaborate, and co-create within the ever-evolving realm of front-end development',
        itemThumbnailClass: 'project__thumbnail-network',
        titleImage: networkTitle,
        image01: networkImage01,
        image02: networkImage02,
        gitLink: 'https://github.com/ThulsaDoom252/Social-network-mobx',
        deployLink: 'https://social-network-mobx.vercel.app/',
    },
    {
        title: 'chatlink',
        branch: 'Chat',
        type: 'Web-app',
        subTitle: 'Stay in touch',
        description: '"A versatile digital chat platform that redefines the art of real-time communication, offering a plethora of options including instant messaging, seamless photo and video sharing, and effortless connections for engaging and profound conversations',
        itemThumbnailClass: 'project__thumbnail-chatlink',
        titleImage: chatTitle,
        image01: chatImage01,
        image02: '',
        gitLink: 'https://github.com/ThulsaDoom252/ChatLink',
        deployLink: 'https://chat-link-eight.vercel.app/',
    },
]