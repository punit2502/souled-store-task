import React from "react";
import CarouselHeader from "./CarouselHeader";
import LineHeading from "./LineHeading";

const Home = () => {
  return (
    <div className="mt-4">
      <CarouselHeader />
      <div className="mx-12">
        <LineHeading title="Exclusive Membership" />
        <div className="">
          <a
            className="flex justify-center"
            href="https://www.thesouledstore.com/exclusive"
          >
            <img
              src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles//exclusive_tile_199_299.jpg"
              alt="exclusive tile"
            />
          </a>
          <LineHeading title="Products" />
          {/* Comment: Tile collection 1 starts */}
          <div>
            <div className="flex justify-center">
              <div className="max-h-64">
                <img
                  className=""
                  src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/t-shirts.jpg"
                  alt="T-shirts"
                />
                <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                  T-SHIRTS
                </h4>
              </div>
              <div className="ml-2 max-h-64">
                <div className="mb-3">
                  <img
                    src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/backpacks.jpg"
                    alt="backpacks"
                  />
                  <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                    BAGS
                  </h4>
                </div>
                <div className="flex">
                  <div className="mr-2">
                    <img
                      src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/socks.jpg"
                      alt="socks"
                    />
                    <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                      SOCKS
                    </h4>
                  </div>
                  <div>
                    <img
                      src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/mugs.jpg"
                      alt="mugs"
                    />
                    <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                      MUGS
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Comment: Tile collection 2 starts */}
          <div>
            <div className="flex justify-center mt-4">
              <div className="max-h-64">
                <img
                  className=""
                  src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/tshirt-dress.jpg"
                  alt="T-shirts dresses"
                />
                <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                  T-SHIRT DRESSES
                </h4>
              </div>
              <div className="ml-2 max-h-64">
                <div className="flex mb-3">
                  <div className="mr-2">
                    <img
                      src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/notebooks.jpg"
                      alt="notebooks"
                    />
                    <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                      BOOKS
                    </h4>
                  </div>
                  <div>
                    <img
                      src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/badges.jpg"
                      alt="badges"
                    />
                    <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                      BADGES
                    </h4>
                  </div>
                </div>
                <div className="">
                  <img
                    src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/boxers.jpg"
                    alt="boxers"
                  />
                  <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                    BOXERS
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
