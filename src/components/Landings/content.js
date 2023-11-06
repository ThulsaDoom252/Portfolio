import burningManTitle from '../../assets/burningman/bm_header.jpg'
import burningManImage01 from "../../assets/burningman/bm_content.jpg"

import barberTitle from "../../assets/barber/barber_header.jpg"
import barberImage01 from "../../assets/barber/barber_history.jpg"
import barberImage02 from "../../assets/barber/barber_history.jpg"

export const landingItems = [
    {
        title: 'burning-man',
        branch: 'Landing',
        type: 'Website',
        subTitle: 'An epic and breathtaking event, burners - assemble!',
        description: 'Experience the magic and adventure of Burning Man like never before. Our platform offers a convenient and hassle-free way to secure your tickets for this iconic event. Join the vibrant community of Burners from around the world and become part of the unforgettable journey that is Burning Man.',
        itemThumbnailClass: 'thumbnail-burning-man',
        titleImage: burningManTitle,
        image01: burningManImage01,
        image02: '',
        gitLink: '',
        deployLink: '',
    },
    {
        title: 'barber-shop',
        branch: 'Landing',
        type: 'Website',
        subTitle: 'Hairstyle reflects your personality',
        description: 'Step into a world of timeless style and unmatched service. Our barbershop is your destination for precision cuts, classic shaves, and the ultimate grooming experience. Our skilled barbers are dedicated to helping you look and feel your best. Discover the art of men\'s grooming with us.',
        itemThumbnailClass: 'thumbnail-barber',
        titleImage: barberTitle,
        image01: barberImage01,
        image02: barberImage02,
        gitLink: '',
        deployLink: '',
    }
]