import React from "react";
import Flickity from "react-flickity-component";

const Carousel = () => {
  const flickityOptions = {
    initialIndex: 0,
    autoPlay: true,
  };

  return (
    <Flickity
      className={"w-screen"}
      elementType={"div"}
      options={flickityOptions}
    >
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
    </Flickity>
  );
};

export default Carousel;
