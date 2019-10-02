import React from "react";
import ProductTile from "./ProductTile";

const Explore = () => {
  return (
    <div className="mt-4">
      <div>
        <img
          src="https://images.thesouledstore.com/public/theSoul/uploads/catalog/category/catbanmob-420190517165547.jpg"
          alt="banner"
        />
      </div>
      <div className="mt-8 mx-12">
        <div className="flex justify-between border-b-2 text-sm">
          <span>Home / T-Shirts</span>
          <span className="text-teal-700">Next &rsaquo;</span>
        </div>
        <div className="mt-4">
          <div className="flex justify-around">
            <ProductTile
              image="20190919181832-1.jpg"
              title="F.R.I.E.N.D.S: The One With All The Episodes"
              category="T-Shirts"
              price="599"
              exclprice="399"
            />
            <ProductTile
              image="20190919181832-1.jpg"
              title="F.R.I.E.N.D.S: The One With All The Episodes"
              category="T-Shirts"
              price="599"
              exclprice="399"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-around">
            <ProductTile
              image="20190919181832-1.jpg"
              title="F.R.I.E.N.D.S: The One With All The Episodes"
              category="T-Shirts"
              price="599"
              exclprice="399"
            />
            <ProductTile
              image="20190919181832-1.jpg"
              title="F.R.I.E.N.D.S: The One With All The Episodes"
              category="T-Shirts"
              price="599"
              exclprice="399"
            />
          </div>
        </div>
        <div className="mt-8">
          <ul className="flex justify-center items-center">
            <li className="mr-4 px-2 border border-gray-900 rounded-full">1</li>
            <li className="mr-4 px-1">2</li>
            <li className="mr-4 px-1">3</li>
            <li className="mr-4 px-1">4</li>
            <li className="mr-4 px-1">..</li>
            <li className="mr-4 px-1 text-sm text-teal-700">Next >></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Explore;
