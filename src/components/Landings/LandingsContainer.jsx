import React, {useState} from 'react';
import Landings from './Landings';
import {delay} from '../../common';


const LandingsContainer = ({handleActiveSection}) => {
    const [isLandingDetailsVisible, toggleLandingDetails] = useState(false)

    const handleLandingDetails = async (section) => {
        toggleLandingDetails(!isLandingDetailsVisible)
        await delay(100)
        handleActiveSection(section)
    }

    return <Landings isLandingDetailsVisible={isLandingDetailsVisible} handleLandingDetails={handleLandingDetails}/>
};

export default LandingsContainer;