import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { PropertyGrid } from "../components/PropertyGrid";

import oneL from "../assets/uploads/Link.png";
import twoL from "../assets/uploads/Link1.png";
import threeL from "../assets/uploads/Link2.png";
import fourL from "../assets/uploads/Link3.png";

import { FaLocationDot } from "react-icons/fa6";

import arrle from "../assets/uploads/framec.png";
import arrri from "../assets/uploads/framecc.png";

const HomePage = () => {
  //  ============ FILTER STATES ============
  const [locationInput, setLocationInput] = useState("");
  const [propertyTypeInput, setPropertyTypeInput] = useState("");
  const [bedrooms, setBedrooms] = useState(0);

  const [filters, setFilters] = useState(null);

  // bedroom counter
  const incre = () => setBedrooms(bedrooms + 1);
  const reduc = () => bedrooms > 0 && setBedrooms(bedrooms - 1);

  // APPLY FILTERS → sent to PropertyGrid
  const applyFilters = () => {
    setFilters({
      location: locationInput,
      propertyType: propertyTypeInput,
      bedrooms,
    });
  };

  return (
    <div className="homebg w-full">
      {/* HERO SECTION WITH BACKGROUND */}
      <div className="hero-bg min-h-screen">
        <NavBar />

        {/* HERO */}
        <div className="flex flex-col py-8 sm:py-20 lg:py-26 gap-4 sm:gap-8 lg:gap-[52px] px-3 sm:px-6 lg:px-0 w-full">
          <div className="flex flex-col text-center gap-3 sm:gap-6 lg:gap-8 mx-auto w-full">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-[#ffffff] leading-tight">
              Browse Our Properties
            </h1>
            <p className="text-sm sm:text-lg lg:text-2xl font-normal text-[#ffffff] leading-relaxed px-2 sm:px-6 lg:px-80">
              Find your perfect home among our curated properties. Start
              browsing now!
            </p>
          </div>

          {/* FILTER BAR */}
          <div className="w-full sm:w-[95%] lg:w-[1238px] mx-auto mt-2 sm:mt-6 bg-white/20 p-2 sm:p-6 rounded-lg sm:rounded-2xl">
            <div className="mx-auto bg-white rounded-lg sm:rounded-2xl shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 lg:gap-6">
              {/* LOCATION */}
              <div className="flex flex-col p-2 sm:p-4 flex-1 min-w-0">
                <label className="text-xs font-semibold tracking-wide text-gray-700 truncate">
                  LOCATION
                </label>
                <input
                  type="text"
                  placeholder="eg. Gbagada"
                  className="mt-1 text-xs sm:text-sm text-gray-500 outline-none w-full"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                />
              </div>

              <div className="hidden sm:block w-px h-8 sm:h-10 bg-gray-300"></div>

              {/* PROPERTY TYPE */}
              <div className="flex flex-col p-2 sm:p-4 flex-1 min-w-0">
                <label className="text-xs font-semibold tracking-wide text-gray-700 truncate">
                  PROPERTY TYPE
                </label>
                <input
                  type="text"
                  placeholder="eg. Duplex, Flat"
                  className="mt-1 text-xs sm:text-sm text-gray-500 outline-none w-full"
                  value={propertyTypeInput}
                  onChange={(e) => setPropertyTypeInput(e.target.value)}
                />
              </div>

              <div className="hidden sm:block w-px h-8 sm:h-10 bg-gray-300"></div>

              {/* BEDROOMS */}
              <div className="flex flex-col items-center justify-center p-2 sm:p-4 flex-1">
                <label className="text-xs font-semibold tracking-wide text-gray-700">
                  BEDROOM
                </label>
                <div className="flex items-center gap-1 sm:gap-3 mt-1">
                  <button
                    onClick={reduc}
                    className="w-5 h-5 sm:w-7 sm:h-7 border border-gray-400 rounded-full flex items-center justify-center text-xs sm:text-lg hover:bg-gray-100 transition"
                  >
                    −
                  </button>

                  <span className="text-gray-800 text-xs sm:text-base w-4 text-center">
                    {bedrooms}
                  </span>

                  <button
                    onClick={incre}
                    className="w-5 h-5 sm:w-7 sm:h-7 border border-gray-400 rounded-full flex items-center justify-center text-xs sm:text-lg hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* APPLY FILTER BUTTON */}
              <button
                onClick={applyFilters}
                className="bg-[#3D9970] w-full sm:w-auto lg:w-[200px] p-2 sm:p-4 rounded-lg sm:rounded-r-lg text-white text-xs sm:text-base font-medium hover:bg-[#2f7a5a] transition shrink-0"
              >
                Find Property
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PROPERTY GRID */}
      <div className="mt-8 sm:mt-12 lg:mt-16 mb-12 sm:mb-16 lg:mb-20 max-w-7xl px-4 sm:px-6 lg:px-10 mx-auto">
        <PropertyGrid
          filters={filters}
          resetFilters={() =>
            setFilters({ location: "", propertyType: "", bedrooms: null })
          }
        />
      </div>

      {/* DISCOVER PROPERTIES SECTION */}
      <section className="properties flex flex-col mx-auto items-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-0">
        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-5xl text-center">
          Discover Our Popular Properties
        </h2>

        <div className="mt-6 sm:mt-8 lg:mt-12 flex relative w-full justify-center overflow-x-auto">
          <img
            src={arrle}
            alt="left arrow"
            className="hidden lg:block w-10 h-10 lg:w-[54px] lg:h-[54px] absolute left-0 lg:left-[-30px] z-10 top-1/2 transform -translate-y-1/2"
          />

          <div className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto lg:overflow-visible px-2 sm:px-4 lg:px-0 pb-4 lg:pb-0">
            <div className="relative shrink-0 w-[250px] sm:w-[300px] lg:w-auto">
              <img
                src={twoL}
                alt="Semi Detached Duplex"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-2 sm:bottom-4 text-white left-2 sm:left-4 text-xs sm:text-sm">
                <h3 className="font-semibold">Semi Detached Duplex</h3>
                <p className="font-bold">₦1,430,000,000</p>
                <p>6 Bed | 3 Bath | 720 sq ft</p>
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaLocationDot className="text-xs sm:text-sm" />
                  <p className="text-xs sm:text-sm">Victoria Island, Lagos</p>
                </div>
              </div>
            </div>

            <div className="relative shrink-0 w-[250px] sm:w-[300px] lg:w-auto">
              <img
                src={oneL}
                alt="Special Duplex"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-2 sm:bottom-4 text-white left-2 sm:left-4 text-xs sm:text-sm">
                <h3 className="font-semibold">Special Duplex</h3>
                <p className="font-bold">₦670,000,000</p>
                <p>6 Bed | 3 Bath | 720 sq ft</p>
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaLocationDot className="text-xs sm:text-sm" />
                  <p className="text-xs sm:text-sm">Victoria Island, Lagos</p>
                </div>
              </div>
            </div>

            <div className="relative shrink-0 w-[250px] sm:w-[300px] lg:w-auto">
              <img
                src={threeL}
                alt="Split-Level House"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-2 sm:bottom-4 text-white left-2 sm:left-4 text-xs sm:text-sm">
                <h3 className="font-semibold">Split-Level House</h3>
                <p className="font-bold">₦340,000,000</p>
                <p>6 Bed | 3 Bath | 720 sq ft</p>
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaLocationDot className="text-xs sm:text-sm" />
                  <p className="text-xs sm:text-sm">Victoria Island, Lagos</p>
                </div>
              </div>
            </div>

            <div className="relative shrink-0 w-[250px] sm:w-[300px] lg:w-auto">
              <img
                src={fourL}
                alt="Twin Duplex"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-2 sm:bottom-4 text-white left-2 sm:left-4 text-xs sm:text-sm">
                <h3 className="font-semibold">Twin Duplex</h3>
                <p className="font-bold">₦290,000,000</p>
                <p>6 Bed | 3 Bath | 720 sq ft</p>
                <div className="flex items-center gap-1 sm:gap-2">
                  <FaLocationDot className="text-xs sm:text-sm" />
                  <p className="text-xs sm:text-sm">Victoria Island, Lagos</p>
                </div>
              </div>
            </div>
          </div>

          <img
            src={arrri}
            alt="right arrow"
            className="hidden lg:block w-10 h-10 lg:w-[54px] lg:h-[54px] absolute right-0 lg:right-[-30px] top-1/2 transform -translate-y-1/2"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
