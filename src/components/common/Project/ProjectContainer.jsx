import React, {useRef, useState} from 'react';
import LeftArrow from '../../Carousel/LeftArrow';
import RightArrow from '../../Carousel/RightArrow';
import Project from './Project';

const ProjectContainer = ({
                              currentScreenWidth,
                              onClick,
                              title,
                              branch,
                              type,
                              description,
                              deployLink,
                              gitLink,
                              titleImage,
                              image01,
                              image02
                          }) => {
    const sliderRef = useRef(null)
    const [slideIndex, setSlideIndex] = useState(0)
    const images = [titleImage, image01, image02].filter(Boolean)
    const handleSlideChange = (index) => {
        sliderRef.current.slickGoTo(index);
        setSlideIndex(index)
    }

    const sliderSettings = {
        prevArrow: <LeftArrow/>,
        nextArrow: <RightArrow/>,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: slideIndex,
        afterChange: handleSlideChange,
    }

    return <Project sliderRef={sliderRef}
                    sliderSettings={sliderSettings}
                    slideIndex={slideIndex}
                    handleSlideChange={handleSlideChange}
                    currentScreenWidth={currentScreenWidth}
                    onClick={onClick}
                    title={title}
                    branch={branch}
                    type={type}
                    description={description}
                    deployLink={deployLink}
                    gitLink={gitLink}
                    images={images}
    />
};
export default ProjectContainer;