import React from "react";
import navImgTwo from "../../public/Group 9282foot.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="text-[#ffffff] flex flex-col bg-[#035A33]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6 lg:px-[90px] pt-8 sm:pt-12 lg:pt-[66px] pb-8 sm:pb-10 gap-6 sm:gap-8 lg:gap-[148px]">
        <div className="flex flex-col font-normal text-sm sm:text-base">
          <div className="mb-4">
            <img
              src={navImgTwo}
              alt="BetaHouse Logo"
              className="h-8 sm:h-10 w-auto"
            />
          </div>
          <p className="leading-relaxed py-2 text-[#ffffffc4] text-xs sm:text-sm">
            Discover, rent, and find your ideal home hassle-free with BetaHouse.
            Take control of your rental journey today!
          </p>
          <div className="flex items-center gap-2 sm:gap-[15px] text-[#ffffffc4] mt-2 text-xs sm:text-sm">
            <FaLocationDot className="shrink-0" />
            <p>95 Tinubu Estate, Lekki, Lagos</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-[15px] text-[#ffffffc4] mt-2 text-xs sm:text-sm">
            <MdLocalPhone className="shrink-0" />
            <p>+234 675 8935 675</p>
          </div>
          <div className="flex items-center gap-2 sm:gap-[15px] text-[#ffffffc4] mt-2 text-xs sm:text-sm">
            <FaEnvelope className="shrink-0" />
            <p>support@rentbetahouse.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          <h5 className="font-semibold text-base sm:text-[21px]">
            Quick Links
          </h5>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            Home
          </a>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            Properties
          </a>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            About
          </a>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            Contact us
          </a>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            Blog
          </a>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          <h5 className="text-base sm:text-[21px] font-semibold">More</h5>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            Agents
          </a>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            Affordable Houses
          </a>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            FAQ's
          </a>
        </div>
        <div className="flex flex-col gap-3 sm:gap-4">
          <h5 className="text-base sm:text-[21px] font-semibold">
            Popular Search
          </h5>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            Apartment for sale
          </a>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            Apartment for rent
          </a>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            3 bedroom flat
          </a>
          <a
            href=""
            className="font-normal text-xs sm:text-base text-[#ffffffc4] hover:text-white transition"
          >
            Bungalow
          </a>
        </div>
      </div>
      <div className="border w-full border-[#6F6F6F]"></div>
      <div className="flex flex-col sm:flex-row justify-between py-6 sm:py-8 px-4 sm:px-6 lg:px-[142px] gap-4 text-xs sm:text-sm">
        <p>Copyright 2023 Betahouse | Designed by Michael.fig</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
