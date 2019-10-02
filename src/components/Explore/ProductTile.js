import React from "react";

const ProductTile = ({ image, title, category, price, exclprice }) => {
  return (
    <div
      style={{ maxWidth: "15rem" }}
      className="rounded overflow-hidden shadow-lg"
    >
      <img
        className="w-full"
        src={`https://images.thesouledstore.com/public/theSoul/uploads/catalog/product/${image}`}
        alt={title}
      />
      <div className="px-6 py-4 text-sm ">
        <div
          style={{ fontSize: "0.75rem" }}
          className="font-semibold text-gray-800 mb-2 truncate"
        >
          {title}
        </div>
        <div className="border-t-2 pt-2">
          <div className="flex justify-between text-gray-800">
            <div className="">{category}</div>
            <div>Rs. {price}</div>
          </div>
          <div className="flex justify-between font-bold text-blue-900 mt-1">
            <div className="">For Excl. Member </div>
            <div>Rs. {exclprice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
