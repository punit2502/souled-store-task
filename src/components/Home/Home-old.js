import React from "react";
import { Link } from "react-router-dom";
import CarouselHeader from "./CarouselHeader";
import LineHeading from "./LineHeading";

const HomeOld = () => {
  return (
    <div className="mt-4">
      <CarouselHeader />
      <div className="mx-12">
        <LineHeading title="Exclusive Membership" />
        <div>
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
              <div>
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
              <div className="ml-2">
                <div className="mb-3 sm:mb-4">
                  <Link to="/explore">
                    <img
                      src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/backpacks.jpg"
                      alt="backpacks"
                    />
                    <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                      BAGS
                    </h4>
                  </Link>
                </div>
                <div className="flex break-all">
                  <div className="mr-2">
                    <Link to="/explore">
                      <img
                        src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/socks.jpg"
                        alt="socks"
                      />
                      <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                        SOCKS
                      </h4>
                    </Link>
                  </div>
                  <div>
                    <Link to="/explore">
                      <img
                        src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/mugs.jpg"
                        alt="mugs"
                      />
                      <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                        MUGS
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Comment: Tile collection 2 starts */}
          <div className="mt-4">
            <div className="flex justify-center">
              <div className="">
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
              <div className="ml-2">
                <div className="flex">
                  <div className="mr-2">
                    <Link to="/explore">
                      <img
                        src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/socks.jpg"
                        alt="socks"
                      />
                      <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                        SOCKS
                      </h4>
                    </Link>
                  </div>
                  <div>
                    <Link to="/explore">
                      <img
                        src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/mugs.jpg"
                        alt="mugs"
                      />
                      <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                        MUGS
                      </h4>
                    </Link>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4">
                  <Link to="/explore">
                    <img
                      src="https://images.thesouledstore.com/public/theSoul/storage/home-tiles/backpacks.jpg"
                      alt="backpacks"
                    />
                    <h4 className="-mt-8 ml-2 text-white text-lg font-bold">
                      BAGS
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOld;
