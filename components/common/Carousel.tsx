import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import image1 from '../../public/+Vida.png';
import image2 from '../../public/+VidaGray.png';
import image3 from '../../public/masVidaLogo.png';

interface Props {
  className: string;
}

const CarouselReact = ({ className }: Props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;


  const goToNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };


  useEffect(() => {
    const timer = setInterval(goToNextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  
  return (
    <Carousel
      className={`${className}`}
      selectedItem={activeSlide}
      onChange={setActiveSlide}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <div>
        <Image src={image1} alt='primera' width={600} height={600} className='rounded-full' />
      </div>
      <div>
        <Image src={image2} alt='segunda' width={600} height={600} className='rounded-full' />
      </div>
      <div>
        <Image src={image3} alt='tercera' width={600} height={600} className='rounded-full' />
      </div>
    </Carousel>
  );
}

export default CarouselReact;
