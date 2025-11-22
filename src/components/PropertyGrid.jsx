import React from "react";
import bedd from "../../public/Icon.png";
import throom from "../../public/Icon (1).png";
import heartt from "../../public/Link (4).png";
import sharee from "../../public/Icon (2).png";
import swetch from "../../public/swetch.png";
import filterImg from "../../public/filter.png";
import laft from "../../public/uis_angle-left.png";
import raght from "../../public/uis_angle-left (1).png";

// ====== STATIC PROPERTIES LIST ======
const properties = [
  {
    image: "/public/div.project-inner.png",
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    beds: 6,
    baths: 3,
    price: "₦ 3,340,000,000",
  },
  {
    image: "/public/div.project-inner (1).png",
    title: "Exquisite Haven Villa",
    location: "Festac, Lagos",
    beds: 5,
    baths: 3,
    price: "₦ 4,000,000/1 Year",
  },
  {
    image: "/public/div.project-inner (2).png",
    title: "Luxe Palatial Villa",
    location: "Gbagada, Lagos",
    beds: 7,
    baths: 3,
    price: "₦ 5,350,000,000",
  },
  {
    image: "/public/div.project-inner (3).png",
    title: "Harmony Luxury Villa",
    location: "Mushin Lagos",
    beds: 4,
    baths: 3,
    price: "₦ 4,000,000/1 Year",
  },
  {
    image: "/public/div.project-inner (4).png",
    title: "Real House Luxury Villa",
    location: "Victoria Island, Lagos",
    beds: 6,
    baths: 4,
    price: "₦ 350,000,000",
  },
  {
    image: "/public/div.project-inner (5).png",
    title: "Real House Luxury Villa",
    location: "Lekki-Ajah, Lagos",
    beds: 5,
    baths: 3,
    price: "₦ 4,200,000/1 Year",
  },
  {
    image: "/public/div.project-inner (6).png",
    title: "Infinite Bliss Villa",
    location: "Ishiagu, Enugu",
    beds: 5,
    baths: 3,
    price: "₦ 2,350,000,000",
  },
  {
    image: "/public/div.project-inner (7).png",
    title: "Real Houae Luxury Villa",
    location: "Works Layout, Owerri",
    beds: 8,
    baths: 6,
    price: "₦ 3,350,000/1 Year",
  },
  {
    image: "/public/div.project-inner (8).png",
    title: "Real House Villa",
    location: "Ikeja, Lagos",
    beds: 6,
    baths: 6,
    price: "₦ 600,000,000",
  },
];

// ====== CARD COMPONENT ======
const PropertyCard = ({ image, title, location, beds, baths, price }) => (
  <div className="rounded-lg sm:rounded-2xl overflow-hidden border border-[#DDD8D8] hover:shadow-lg transition">
    <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>

    <div className="p-3 sm:p-4 space-y-2">
      <h3 className="font-semibold text-sm sm:text-lg text-gray-900 line-clamp-2">
        {title}
      </h3>

      <div className="flex items-center text-xs sm:text-sm text-gray-600 gap-1">
        <svg width="14" height="14" fill="currentColor" className="shrink-0">
          <path d="M8 0a5 5 0 0 0-5 5c0 4 5 11 5 11s5-7 5-11a5 5 0 0 0-5-5zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
        </svg>
        <span className="line-clamp-1">{location}</span>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-gray-700 text-xs sm:text-sm mt-2">
        <span className="flex items-center gap-1 shrink-0">
          <img src={bedd} alt="" className="w-4 h-4" />
          {beds} Beds
        </span>

        <span className="flex items-center gap-1 shrink-0">
          <img src={throom} alt="" className="w-4 h-4" />
          {baths} Baths
        </span>
      </div>

      <div className="flex justify-between items-center pt-2 sm:pt-3 border-t border-t-[#DDD8D8] my-3 sm:my-6">
        <p className="font-semibold text-xs sm:text-sm text-gray-900 line-clamp-1">
          {price}
        </p>

        <div className="flex items-center gap-2 sm:gap-3 text-gray-600">
          <img
            src={swetch}
            alt=""
            className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:opacity-70"
          />
          <img
            src={sharee}
            alt=""
            className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:opacity-70"
          />
          <img
            src={heartt}
            alt=""
            className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer hover:opacity-70"
          />
        </div>
      </div>
    </div>
  </div>
);

// ====== RESULT HEADER EXPORT ======
export const ResultHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full px-4 sm:px-6 max-w-7xl mx-auto gap-4 sm:gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <button className="flex items-center gap-2 text-gray-800 font-medium text-sm sm:text-base hover:text-gray-600 transition">
          <img src={filterImg} alt="filter" className="w-4 h-4 sm:w-5 sm:h-5" />
          More Filter
        </button>

        <p className="text-gray-800 text-xs sm:text-sm">
          Showing <span className="font-semibold">1–10</span> of{" "}
          <span className="font-semibold">15</span> results
        </p>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
        <span className="text-gray-600">Sort by:</span>
        <select className="bg-transparent cursor-pointer font-semibold text-gray-900 outline-none">
          <option>Default</option>
        </select>
      </div>
    </div>
  );
};

// ====== MAIN GRID EXPORT ======
// Main Property Grid Component (No Dependencies)
export const PropertyGrid = ({ filters, resetFilters }) => {
  // Safely normalize filter inputs
  const locationFilter =
    typeof filters?.location === "string" ? filters.location.toLowerCase() : "";

  const typeFilter =
    typeof filters?.propertyType === "string"
      ? filters.propertyType.toLowerCase()
      : "";

  const bedroomFilter =
    typeof filters?.bedrooms === "number" ? filters.bedrooms : null;

  // Real-time filtering
  const filteredProperties = properties.filter((p) => {
    const matchesLocation =
      !locationFilter || p.location.toLowerCase().includes(locationFilter);

    const matchesBedrooms = !bedroomFilter || p.beds >= bedroomFilter;

    const matchesType =
      !typeFilter || p.title.toLowerCase().includes(typeFilter);

    return matchesLocation && matchesBedrooms && matchesType;
  });

  return (
    <>
      <ResultHeader />

      {/* NO RESULT UI */}
      {filteredProperties.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 text-center px-4">
          <div className="text-2xl sm:text-3xl font-bold text-gray-700 mb-3 sm:mb-4">
            No Results Found
          </div>
          <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
            Try adjusting your filters or search keywords.
          </p>

          {/* RELOAD BUTTON */}
          <button
            onClick={resetFilters}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-[#3E8C6A] text-white rounded-lg shadow hover:bg-[#2f6c52] transition text-sm sm:text-base"
          >
            Reload Properties
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 max-w-7xl mx-auto">
          {filteredProperties.map((p, index) => (
            <PropertyCard key={index} {...p} />
          ))}
        </div>
      )}

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 py-6 px-4 overflow-x-auto">
        <button className="text-gray-500 hover:text-gray-700 shrink-0">
          <img src={laft} alt="Previous" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className="flex items-center gap-2 sm:gap-4 text-gray-700 font-medium text-sm sm:text-base">
          <span className="bg-[#3E8C6A] text-white px-2 sm:px-3 py-1 rounded-md">
            1
          </span>

          <button className="hover:text-black px-2 sm:px-3 py-1">2</button>
          <button className="hover:text-black px-2 sm:px-3 py-1">3</button>
          <button className="hover:text-black px-2 sm:px-3 py-1">4</button>
        </div>

        <button className="text-gray-500 hover:text-gray-700 shrink-0">
          <img src={raght} alt="Next" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </>
  );
};
