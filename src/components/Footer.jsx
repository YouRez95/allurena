import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="m-1 lg:m-5 text-white bg-[#242A2E]">
      <div className="flex flex-col items-center gap-20 p-5 container m-auto">
        <h2 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl text-center">
          LET'S TALK <br /> ABOUT BEAUTY
        </h2>

        <div className="relative group transition-all cursor-pointer overflow-hidden">
          <p className="uppercase absolute transition-all duration-150 -top-10 group-hover:top-0">
            Go back to top
          </p>
          <p className="underline uppercase translate-y-0 transition-all duration-150 group-hover:translate-y-10">
            Go back to top
          </p>
        </div>

        <div className="bg-white/50 h-[0.5px] w-full" />

        <div className="flex justify-between items-start w-full flex-col lg:flex-row space-y-10 lg:space-y-0 gap-5">
          {/* Website map */}
          <div className="space-y-7 flex-1">
            <span className="block text-xl">Website Map</span>
            <ul className="grid grid-cols-2 gap-x-7 gap-y-3 font-light text-sm max-w-56">
              <li className="relative group transition-all cursor-pointer overflow-hidden">
                <p className="absolute transition-all duration-150 -top-10 group-hover:top-0">
                  Popular
                </p>
                <p className="translate-y-0 transition-all duration-150 group-hover:translate-y-10">
                  Popular
                </p>
              </li>
              <li className="relative group transition-all cursor-pointer overflow-hidden">
                <p className="absolute transition-all duration-150 -top-10 group-hover:top-0">
                  Catalog
                </p>
                <p className="translate-y-0 transition-all duration-150 group-hover:translate-y-10">
                  Catalog
                </p>
              </li>
              <li className="relative group transition-all cursor-pointer overflow-hidden">
                <p className="absolute transition-all duration-150 -top-10 group-hover:top-0">
                  About
                </p>
                <p className="translate-y-0 transition-all duration-150 group-hover:translate-y-10">
                  About
                </p>
              </li>
              <li className="relative group transition-all cursor-pointer overflow-hidden">
                <p className="absolute transition-all duration-150 -top-10 group-hover:top-0">
                  Reviews
                </p>
                <p className="translate-y-0 transition-all duration-150 group-hover:translate-y-10">
                  Reviews
                </p>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-7 flex-1">
            <span className="block text-xl">Contacts</span>
            <ul className="grid grid-cols-2 gap-x-7 gap-y-3 font-light text-sm max-w-96">
              <li className="relative group transition-all cursor-pointer overflow-hidden">
                <p className="absolute transition-all duration-150 -top-10 group-hover:top-0">
                  mail@mail.com
                </p>
                <p className="translate-y-0 transition-all duration-150 group-hover:translate-y-10">
                  mail@mail.com
                </p>
              </li>
              <li className="relative group transition-all cursor-pointer overflow-hidden">
                <p className="absolute transition-all duration-150 -top-10 group-hover:top-0">
                  www.allurena.com
                </p>
                <p className="translate-y-0 transition-all duration-150 group-hover:translate-y-10">
                  www.allurena.com
                </p>
              </li>
              <li className="relative group transition-all cursor-pointer overflow-hidden">
                <p className="absolute transition-all duration-150 -top-10 group-hover:top-0">
                  MA: +212666666666
                </p>
                <p className="translate-y-0 transition-all duration-150 group-hover:translate-y-10">
                  MA: +212666666666
                </p>
              </li>
              <li className="relative group transition-all cursor-pointer overflow-hidden">
                <p className="absolute transition-all duration-150 -top-10 group-hover:top-0">
                  Maroc, Casablanca
                </p>
                <p className="translate-y-0 transition-all duration-150 group-hover:translate-y-10">
                  Maroc, Casablanca
                </p>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-10 h-full flex-1 min-w-72 max-w-96 w-full">
            <span className="block text-xl">Subscribe</span>
            <form className="w-full relative">
              <input
                type="text"
                className="bg-transparent outline-none border-b-[0.5px] w-full text-sm font-light min-h-10 placeholder:text-white placeholder:text-sm"
                placeholder="E-mail"
                required
              />
              <button className="absolute top-[50%] group w-6 h-6 cursor-pointer -translate-y-[50%] right-1 bg-white rounded-full flex items-center justify-center">
                <div className="bg-[#242A2E] ease-in-out h-full w-full rounded-full absolute inset-0 scale-0 group-hover:scale-100 transition-all duration-300" />
                <IoIosArrowForward className="text-black relative group-hover:text-white transition-all" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="relative w-10 h-10 p-1 flex group items-center rounded-full border border-white/50 justify-center cursor-pointer">
            <div className="absolute bg-white w-[95%] h-[95%] top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] rounded-full scale-0 group-hover:scale-100 transition-all duration-200 ease-in-out" />
            <FaFacebookF className="text-white group-hover:text-black relative" />
          </div>
          <div className="relative w-10 h-10 p-1 flex group items-center rounded-full border border-white/50 justify-center cursor-pointer">
            <div className="absolute bg-white w-[95%] h-[95%] top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] rounded-full scale-0 group-hover:scale-100 transition-all duration-200 ease-in-out" />
            <FaBehance className="text-white group-hover:text-black relative" />
          </div>
          <div className="relative w-10 h-10 p-1 flex group items-center rounded-full border border-white/50 justify-center cursor-pointer">
            <div className="absolute bg-white w-[95%] h-[95%] top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] rounded-full scale-0 group-hover:scale-100 transition-all duration-200 ease-in-out" />
            <FaLinkedinIn className="text-white group-hover:text-black relative" />
          </div>
          <div className="relative w-10 h-10 p-1 flex group items-center rounded-full border border-white/50 justify-center cursor-pointer">
            <div className="absolute bg-white w-[95%] h-[95%] top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] rounded-full scale-0 group-hover:scale-100 transition-all duration-200 ease-in-out" />
            <FaInstagram className="text-white group-hover:text-black relative" />
          </div>
          <div className="relative w-10 h-10 p-1 flex group items-center rounded-full border border-white/50 justify-center cursor-pointer">
            <div className="absolute bg-white w-[95%] h-[95%] top-[50%] right-[50%] translate-x-[50%] -translate-y-[50%] rounded-full scale-0 group-hover:scale-100 transition-all duration-200 ease-in-out" />
            <FaDribbble className="text-white group-hover:text-black relative" />
          </div>
        </div>
      </div>
    </footer>
  );
}
