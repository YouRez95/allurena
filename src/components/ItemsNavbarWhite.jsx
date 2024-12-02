import { useState } from "react";
import { PiStarFourFill } from "react-icons/pi";
import menu1 from "../assets/menu-1.png";
import menu2 from "../assets/menu-2.png";
import menu3 from "../assets/menu-3.png";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function ItemsNavbarWhite({ menuOpen, setMenuOpen }) {
  const [hoveredItems, setHoveredItems] = useState([]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    setMenuOpen(false);
    setTimeout(() => {
      section.scrollIntoView({ behavior: "smooth" });
    }, 1500);
  };

  function handleLeaveTheHoveredItem(e) {
    setHoveredItems([]);
  }

  return (
    <div className="flex flex-col justify-between h-full text-white">
      <div
        className={`border-b border-[#d3d4d550] transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-1 delay-[1.3s]" : "opacity-0 delay-500"
        }`}
      >
        <div
          className={`container mx-auto h-[70px] flex items-center justify-between`}
        >
          <div className="flex items-center gap-4 sm:gap-10">
            <div
              className={`flex relative transition-all bg-white rounded-full px-4 py-3 cursor-pointer flex-col items-center`}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <div
                className={`w-5 h-[2px] transition-all duration-500 bg-black ${
                  menuOpen ? "rotate-45 delay-[1.5s]" : "rotate-0 delay-100"
                }`}
              />
              <div
                className={`w-5 absolute h-[2px] transition-all duration-500 bg-black ${
                  menuOpen ? "-rotate-45 delay-[1.5s]" : "rotate-0 delay-100"
                }`}
              />
            </div>

            <span className="uppercase font-medium text-xs ssm:text-s">
              % sale
            </span>
          </div>
          <div>
            <span className="logo text-lg ssm:text-xl sm:text-3xl capitalize">
              allurena
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-10">
            <button className="uppercase font-light text-xs ssm:text-sm">
              search
            </button>
            <button className="uppercase font-light text-xs ssm:text-sm">
              bag (0)
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-[400px] md:h-[200px]">
        <div
          className={`absolute left-[50%] translate-x-[-50%] transition-all duration-300 bg-[#d3d4d583] h-[1px] top-[0px]
          ${menuOpen ? "w-full delay-[1.5s]" : "w-0 delay-300"}
        `}
        />
        <div
          className={`absolute left-[50%] translate-x-[-50%] transition-all duration-300 bg-[#d3d4d583] h-[1px] bottom-0
          ${menuOpen ? "w-full delay-[1.5s]" : "w-0 delay-300"}
        `}
        />
        <ul
          className={`flex flex-col md:flex-row h-full w-full  uppercase transition-all duration-300 ease-in-out justify-start m-auto items-center gap-5 lg:gap-10 xl:gap-12 2xl:gap-16
          ${menuOpen ? "opacity-1 delay-[1.6s]" : "opacity-0 delay-200"}
        `}
          onMouseLeave={handleLeaveTheHoveredItem}
        >
          <li
            className={`relative font-light-light py-5 md:py-10 transition-all duration-200 ease-[cubic-bezier(0.4, 0, 1, 1)] cursor-pointer
                ${
                  hoveredItems.length > 0 && hoveredItems.includes(1) === true
                    ? "text-gray-400 text-4xl md:text-5xl lg:text-[55px] xl:text-[73px] 2xl:text-[90px]"
                    : "text-5xl md:text-6xl lg:as_h2 xl:as_h1 lg:text-[70px] xl:text-[90px] 2xl:text-[116px]"
                }
            `}
            onMouseEnter={() => setHoveredItems([2, 3])}
            onClick={() => scrollToSection("popular")}
          >
            <img
              src={menu1}
              className={`absolute max-w-[60px] md:max-w-[100px] lg:max-w-[160px] transition-all duration-500 ease-[cubic-bezier(0.4, 0, 1, 1)] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
                hoveredItems.length > 0 && hoveredItems.includes(1) === false
                  ? "scale-100 top-[-10%]"
                  : "scale-0 top-[50%]"
              }`}
              alt=""
            />
            popular
          </li>
          <li>
            <PiStarFourFill className="w-7 h-7" />
          </li>
          <li
            className={`relative font-light-light py-5 md:py-10 transition-all duration-200 ease-[cubic-bezier(0.4, 0, 1, 1)] cursor-pointer
            ${
              hoveredItems.length > 0 && hoveredItems.includes(2) === true
                ? "text-gray-400 text-4xl md:text-5xl lg:text-[55px] xl:text-[73px] 2xl:text-[90px]"
                : "text-5xl md:text-6xl lg:as_h2 xl:as_h1 lg:text-[70px] xl:text-[90px] 2xl:text-[116px]"
            }
         `}
            onMouseEnter={() => setHoveredItems([1, 3])}
            onClick={() => scrollToSection("about")}
          >
            <img
              src={menu2}
              className={`absolute max-w-[60px] md:max-w-[100px] lg:max-w-[160px] transition-all duration-500 ease-[cubic-bezier(0.4, 0, 1, 1)] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
                hoveredItems.length > 0 && hoveredItems.includes(2) === false
                  ? "scale-100 top-[110%]"
                  : "scale-0 top-[50%]"
              }`}
              alt=""
            />
            about
          </li>
          <li>
            <PiStarFourFill className="w-7 h-7 " />
          </li>
          <li
            className={`relative font-light-light py-5 md:py-10 transition-all duration-200 ease-[cubic-bezier(0.4, 0, 1, 1)] cursor-pointer
            ${
              hoveredItems.length > 0 && hoveredItems.includes(3) === true
                ? "text-gray-400 text-4xl md:text-5xl lg:text-[55px] xl:text-[73px] 2xl:text-[90px]"
                : "text-5xl md:text-6xl lg:as_h2 xl:as_h1 lg:text-[70px] xl:text-[90px] 2xl:text-[116px]"
            }
         `}
            onMouseEnter={() => setHoveredItems([1, 2])}
            onClick={() => scrollToSection("reviews")}
          >
            <img
              src={menu3}
              className={`absolute max-w-[60px] md:max-w-[100px] lg:max-w-[160px] transition-all duration-500 ease-[cubic-bezier(0.4, 0, 1, 1)] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
                hoveredItems.length > 0 && hoveredItems.includes(3) === false
                  ? "scale-100 top-[110%]"
                  : "scale-0 top-[50%]"
              }`}
              alt=""
            />
            reviews
          </li>
        </ul>
        <div />
      </div>

      <div className="py-10 relative">
        <div
          className={`absolute left-[50%] translate-x-[-50%] transition-all duration-300 bg-[#d3d4d546] h-[.4px] top-[0px]
          ${menuOpen ? "w-full delay-[1.5s]" : "w-0 delay-300"}
        `}
        />
        <div
          className={`container hidden lg:flex transition-all duration-300 mx-auto justify-between items-center
        ${menuOpen ? "opacity-100 delay-[1.5s]" : "opacity-0 delay-300"}`}
        >
          <div className="flex items-start text-sm gap-5 text-[#d3d4d5]">
            <img src={logo} alt="logo" className="max-w-11" />
            <div className="flex flex-col font-light">
              <span>2024 Youness Alwani</span>
              <span>Design Inspired from halo lab</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <FaFacebookF className="border border-[#d3d4d583] w-8 h-8 p-2 rounded-full hover:bg-[#d3d4d5] cursor-pointer hover:text-[#242A2E]" />
            <FaLinkedinIn className="border border-[#d3d4d583] w-8 h-8 p-2 rounded-full hover:bg-[#d3d4d5] cursor-pointer hover:text-[#242A2E]" />
            <FaInstagram className="border border-[#d3d4d583] w-8 h-8 p-2 rounded-full hover:bg-[#d3d4d5] cursor-pointer hover:text-[#242A2E]" />
            <FaGithub className="border border-[#d3d4d583] w-8 h-8 p-2 rounded-full hover:bg-[#d3d4d5] cursor-pointer hover:text-[#242A2E]" />
          </div>

          <p className="text-[#d3d4d5] font-light text-sm">
            Commission-free investing, plus <br /> all tools that you need.
          </p>
        </div>
        <div
          className={`flex container lg:hidden m-auto w-fit items-center gap-6 ${
            menuOpen ? "opacity-100 delay-[1.5s]" : "opacity-0 delay-300"
          }`}
        >
          <FaFacebookF className="border border-[#d3d4d583] w-8 h-8 p-2 rounded-full hover:bg-[#d3d4d5] cursor-pointer hover:text-[#242A2E]" />
          <FaLinkedinIn className="border border-[#d3d4d583] w-8 h-8 p-2 rounded-full hover:bg-[#d3d4d5] cursor-pointer hover:text-[#242A2E]" />
          <FaInstagram className="border border-[#d3d4d583] w-8 h-8 p-2 rounded-full hover:bg-[#d3d4d5] cursor-pointer hover:text-[#242A2E]" />
          <FaGithub className="border border-[#d3d4d583] w-8 h-8 p-2 rounded-full hover:bg-[#d3d4d5] cursor-pointer hover:text-[#242A2E]" />
        </div>
      </div>
    </div>
  );
}
