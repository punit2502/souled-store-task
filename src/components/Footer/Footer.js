import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faSnapchat,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="mt-4 mt-12 py-12 bg-gray-400">
      <div
        className="flex justify-center"
        style={{ justifyContent: "space-evenly" }}
      >
        <div>
          <h5 className="uppercase text-red-600 font-bold">Need Help</h5>
          <ul className="mt-4 text-sm text-gray-900">
            <li>Contact Us</li>
            <li className="mt-2">FAQs</li>
            <li className="mt-2">Shipping & Tracking</li>
            <li className="mt-2">Return & Exchange</li>
            <li className="mt-2">T&Cs</li>
            <li className="mt-2">Sitemap</li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase text-red-600 font-bold">COMPANY</h5>
          <ul className="mt-4 text-sm text-gray-900">
            <li>About Us</li>
            <li className="mt-2">Schools & Colleges</li>
            <li className="mt-2">Bulk & Custom Orders</li>
            <li className="mt-2">Souled Army</li>
            <li className="mt-2">Careers</li>
            <li className="mt-2">Gift Vouchers</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex justify-center items-center">
        <span>Follow us:</span>
        <FontAwesomeIcon
          className="ml-2"
          icon={faFacebook}
          color="#3b5998"
          size="2x"
        />
        <FontAwesomeIcon
          className="ml-2"
          icon={faInstagram}
          color="#c13584"
          size="2x"
        />
        <FontAwesomeIcon
          className="ml-2"
          icon={faSnapchat}
          color="#fffc00"
          size="2x"
        />
        <FontAwesomeIcon
          className="ml-2"
          icon={faTwitter}
          color="#1da1f2"
          size="2x"
        />
      </div>
      <div className="mt-4 mx-12">
        <div className="text-sm underline">
          <svg
            className="inline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              fill="gray"
              d="M19.511,17.98L10.604,1.348C10.48,1.133,10.25,1,10,1C9.749,1,9.519,1.133,9.396,1.348L0.49,17.98
	c-0.121,0.211-0.119,0.471,0.005,0.68C0.62,18.871,0.847,19,1.093,19h17.814c0.245,0,0.474-0.129,0.598-0.34
	C19.629,18.451,19.631,18.191,19.511,17.98z M11,17H9v-2h2V17z M11,13.5H9V7h2V13.5z"
            />
          </svg>
          Report: Inappropriate Content or Copyright Infringement
        </div>
        <div className="mt-4">
          <span className="text-sm">100% Secure Payments:</span>
          <div className="flex">
            <img
              className="h-6 mr-3"
              src="https://www.thesouledstore.com/static/images/icons/masterdcard.png"
              alt="mastercard"
            />
            <img
              className="h-6 mr-3"
              src="https://www.thesouledstore.com/static/images/icons/mobikwik.png"
              alt="mobikwik"
            />
            <img
              className="h-6 mr-3"
              src="https://www.thesouledstore.com/static/images/icons/paytm.png"
              alt="paytm"
            />
            <img
              className="h-6 mr-3"
              src="https://www.thesouledstore.com/static/images/icons/americanExpress.png"
              alt="american express"
            />
          </div>
        </div>
        <div className="mt-4">
          <span className="text-sm">Shipping Partners:</span>
          <div className="flex">
            <img
              className="h-8 mr-3"
              src="https://www.thesouledstore.com/static/images/icons/fedex.png"
              alt="fedex"
            />
            <img
              className="h-8 mr-3"
              src="https://www.thesouledstore.com/static/images/icons/dtdc.png"
              alt="dtdc"
            />
            <img
              className="h-8 mr-3"
              src="https://www.thesouledstore.com/static/images/icons/delivery.png"
              alt="delhivery"
            />
            <img
              className="h-8 mr-3"
              src="https://www.thesouledstore.com/static/images/icons/rapid.png"
              alt="rapid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
