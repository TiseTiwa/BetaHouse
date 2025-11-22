import React, { useState } from "react";
import navImg from "../../public/Group 9282.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 sm:py-[29px] px-4 sm:px-6 lg:px-[48.9px] backdrop-blur gap-4 sm:gap-[106px]">
      <img src={navImg} alt="BetaHouse Logo" className="h-8 sm:h-10 w-auto" />

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 lg:gap-[33.05px] font-medium text-[#F5F5F5]">
        <a
          href=""
          className="text-sm lg:text-lg hover:text-green-400 transition"
        >
          Home
        </a>
        <a
          href=""
          className="text-sm lg:text-lg hover:text-green-400 transition"
        >
          Properties
        </a>
        <a
          href=""
          className="text-sm lg:text-lg hover:text-green-400 transition"
        >
          About Us
        </a>
        <a
          href=""
          className="text-sm lg:text-lg hover:text-green-400 transition"
        >
          Blog
        </a>
        <a
          href=""
          className="text-sm lg:text-lg hover:text-green-400 transition"
        >
          Contact Us
        </a>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-4 lg:gap-8 items-center">
        {isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-bold text-sm">
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
              </div>
              <span className="text-[#F5F5F5] text-sm lg:text-base">
                {user?.firstName}
              </span>
            </button>

            {/* Profile Dropdown Menu */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-gray-700">
                  <p className="text-[#F5F5F5] font-medium">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-gray-400 text-sm">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setShowProfileMenu(false);
                    navigate("/");
                  }}
                  className="w-full text-left px-4 py-2 text-[#F5F5F5] hover:bg-gray-800 transition text-sm"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to="/signup"
              className="border-2 p-2 lg:p-2.5 rounded-lg border-[#F5F5F5] px-4 lg:w-[140px] text-center text-[#F5F5F5] text-sm lg:text-base hover:bg-white/10 transition"
            >
              Sign Up
            </Link>
            <Link
              to="/signin"
              className="border-2 p-2 lg:p-2.5 rounded-lg border-[#3D9970] bg-[#3D9970] px-4 lg:w-[140px] text-center text-[#F5F5F5] text-sm lg:text-base hover:bg-[#2f7a5a] transition"
            >
              Login
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-[#F5F5F5] text-2xl"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur p-4 flex flex-col gap-4 lg:hidden">
          <a
            href=""
            className="text-[#F5F5F5] text-sm hover:text-green-400 transition"
          >
            Home
          </a>
          <a
            href=""
            className="text-[#F5F5F5] text-sm hover:text-green-400 transition"
          >
            Properties
          </a>
          <a
            href=""
            className="text-[#F5F5F5] text-sm hover:text-green-400 transition"
          >
            About Us
          </a>
          <a
            href=""
            className="text-[#F5F5F5] text-sm hover:text-green-400 transition"
          >
            Blog
          </a>
          <a
            href=""
            className="text-[#F5F5F5] text-sm hover:text-green-400 transition"
          >
            Contact Us
          </a>
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-600">
            {isAuthenticated ? (
              <>
                <div className="p-3 bg-gray-800 rounded-lg">
                  <p className="text-[#F5F5F5] font-medium text-sm">
                    {user?.firstName} {user?.lastName}
                  </p>
                  <p className="text-gray-400 text-xs">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                    navigate("/");
                  }}
                  className="border-2 p-2 rounded-lg border-red-500 text-center text-red-500 text-sm hover:bg-red-500/10 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="border-2 p-2 rounded-lg border-[#F5F5F5] text-center text-[#F5F5F5] text-sm hover:bg-white/10 transition"
                >
                  Sign Up
                </Link>
                <Link
                  to="/signin"
                  className="border-2 p-2 rounded-lg border-[#3D9970] bg-[#3D9970] text-center text-[#F5F5F5] text-sm hover:bg-[#2f7a5a] transition"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
