import firedriveTite from "../../assets/apps/firedrive/fd_videos.webp"
import firedriveImage01 from "../../assets/apps/firedrive/fd_pics02.webp"
import firedriveImage02 from "../../assets/apps/firedrive/fd_audio.webp"

import networkTitle from "../../assets/apps/social-network/sn_auth.webp"
import networkImage01 from "../../assets/apps/social-network/sn_edit.webp"
import networkImage02 from "../../assets/apps/social-network/sn_users.webp"

import chatTitle from "../../assets/apps/chatlink/chat_01.webp"
import chatImage01 from "../../assets/apps/chatlink/chat_02.webp"

import portfolioTitle from "../../assets/apps/portfolio/pr_01.webp"
import portfolioImage01 from "../../assets/apps/portfolio/pr_02.webp"
import portfolioImage02 from "../../assets/apps/portfolio/pr_03.webp"

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
    {
        title: 'portfolio',
        branch: 'Website',
        type: 'Web-app',
        subTitle: 'Glimpse into my creations',
        description: 'Discover more about my professional background and skills , view my latest projects. Whether you\'re a potential collaborator, employer, or fellow enthusiast, this space is designed to give you a glimpse into what drives me and the skills I bring to the table.',
        itemThumbnailClass: 'project__thumbnail-portfolio',
        titleImage: portfolioTitle,
        image01: portfolioImage01,
        image02: portfolioImage02,
        gitLink: 'https://github.com/ThulsaDoom252/Portfolio',
        deployLink: null,
    }
]