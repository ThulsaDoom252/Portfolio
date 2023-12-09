import burningManTitle from '../../assets/landings/burningman/bm_01.webp'
import burningManImage01 from "../../assets/landings/burningman/bm_02.webp"
import barberTitle from "../../assets/landings/barber/br01.webp"
import barberImage01 from "../../assets/landings/barber/br01.webp"
import barberImage02 from "../../assets/landings/barber/br01.webp"

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
        image02: null,
        gitLink: 'https://github.com/ThulsaDoom252/Burning-man',
        deployLink: 'https://burning-man-navy.vercel.app/',
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
        gitLink: 'https://github.com/ThulsaDoom252/landing-barber.git',
        deployLink: 'https://landing-barber-ukjj.vercel.app/',
    }
]