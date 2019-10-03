import React from "react";
import { Link } from "react-router-dom";
import CarouselHeader from "./CarouselHeader";
import LineHeading from "./LineHeading";

import "./Home.css";

const Home = () => {
  return (
    <div className="mt-4">
      <CarouselHeader />
      <div className="flex flex-col mx-8 items-center">
        <LineHeading title="Exclusive Membership" />
        <a href="https://www.thesouledstore.com/exclusive">
          <img
            src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles//exclusive_tile_199_299.jpg"
            alt="exclusive tile"
          />
        </a>
        <LineHeading title="Products" />
        {/* Container 1 starts */}
        <div className="container1">
          <div className="div11 h-full w-full">
            <Link to="/explore">
              <img
                src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/t-shirts.jpg"
                alt="T-shirts"
              />
              <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                T-SHIRTS
              </h4>
            </Link>
          </div>
          <div className="div12 ml-2 mb-2 h-full w-full">
            <Link to="/explore">
              <img
                src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/backpacks.jpg"
                alt="backpacks"
              />
              <h4 className="-mt-8 ml-2 text-white text-lg font-bold">BAGS</h4>
            </Link>
          </div>
          <div className="div13 ml-2 h-full w-full">
            <Link to="/explore">
              <img
                src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/socks.jpg"
                alt="socks"
              />
              <h4 className="-mt-8 ml-2 text-white text-lg font-bold">SOCKS</h4>
            </Link>
          </div>
          <div className="div14 ml-3 h-full w-full">
            <Link to="/explore">
              <img
                src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/mugs.jpg"
                alt="mugs"
              />
              <h4 className="-mt-8 ml-2 text-white text-lg font-bold">MUGS</h4>
            </Link>
          </div>
        </div>
        {/* Container 2 starts */}
        <div className="container2 mt-8">
          <div className="div21 mr-2 object-cover">
            <Link to="/explore">
              <img
                src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/notebooks.jpg"
                alt="notebooks"
              />
              <h4 className="-mt-8 ml-2 text-white text-lg font-bold">BOOKS</h4>
            </Link>
          </div>
          <div className="div22 h-full w-full">
            <Link to="/explore">
              <img
                src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/badges.jpg"
                alt="badges"
              />
              <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                BADGES
              </h4>
            </Link>
          </div>
          <div className="div23 mt-2 h-full w-full">
            <Link to="/explore">
              <img
                src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/boxers.jpg"
                alt="boxers"
              />
              <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                BOXERS
              </h4>
            </Link>
          </div>
          <div className="div24 ml-2 h-full w-full">
            <Link to="/explore">
              <img
                src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/tshirt-dress.jpg"
                alt="T-Shirts Dress"
              />
              <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                T-SHIRT DRESS
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
