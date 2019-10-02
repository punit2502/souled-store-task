import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselHeader = () => {
  return (
    <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
      <img
        src="https://images.thesouledstore.com/public/theSoul/uploads/slider/20190926110619.jpg"
        alt="banner 1"
      />
      <img
        src="https://images.thesouledstore.com/public/theSoul/uploads/slider/20190711164015.jpg"
        alt="banner 2"
      />
      <img
        src="https://images.thesouledstore.com/public/theSoul/uploads/slider/20190711164038.jpg"
        alt="banner 3"
      />
    </Carousel>
  );
};

export default CarouselHeader;
