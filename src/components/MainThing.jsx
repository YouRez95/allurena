import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbNorthStar } from "react-icons/tb";

import mainthing1 from "../assets/mainthing1.webp";
import mainthing2 from "../assets/mainthing2.webp";
import mainthing3 from "../assets/mainthing3.webp";

export default function MainThing() {
  return (
    <section className="h-[40vh] sm:h-[50vh] md:h-[71vh] flex items-center justify-center">
      <div className="uppercase container m-auto leading-[110px] flex flex-col items-center">
        {/* MAIN THING */}
        <div className="flex items-center font-primary text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[116px]">
          Main Thing{" "}
          <img
            className="max-w-10 ssm:max-w-16 sm:max-w-[85px] md:max-w-[107px] lg:max-w-40 mx-0 ssm:mx-2 lg:mx-5"
            src={mainthing1}
            alt="image"
          />{" "}
        </div>

        {/* FOR EVERY GIRL */}
        <div className="flex items-center font-primary text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[116px]">
          For{" "}
          <img
            src={mainthing2}
            alt="image"
            className="max-w-10 ssm:max-w-16 sm:max-w-[85px] md:max-w-[107px] lg:max-w-40 mx-2 lg:mx-5"
          />{" "}
          every girl
        </div>

        <div className="flex items-center font-primary text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[116px]">
          <div className="poppins hidden bg-white rounded-full sm:flex scale-[.5] lg:scale-[.8] text-base relative mx-0 lg:mx-5">
            <div className="w-7 h-[2px] -right-7 top-[50%] translate-y-[-50%] absolute bg-black" />
            <div className="w-7 h-[2px] -left-7 top-[50%] translate-y-[-50%] absolute bg-black" />
            <div className="w-[50%] h-[50%] flex justify-center items-center rounded-full left-0 translate-x-[50%] top-[50%] translate-y-[-50%] absolute bg-black">
              <TbNorthStar className="text-white w-[50%] h-[50%]" />
            </div>
            <div className="circle-text">
              <span>S</span>
              <span>H</span>
              <span>O</span>
              <span>P</span>
              <span>N</span>
              <span>O</span>
              <span>W</span>
              <span>S</span>
              <span>H</span>
              <span>O</span>
              <span>P</span>
              <span>N</span>
              <span>O</span>
              <span>W</span>
            </div>
          </div>
          Is to establish an
        </div>

        <div className="flex items-center font-primary text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[116px]">
          order of skin
          <button className="poppins flex items-center justify-center relative text-2xl group transition-all uppercase font-medium bg-[#CDE9DD] h-6 sm:h-10 lg:h-14 xl:h-20 px-2 sm:px-5 md:px-9 lg:px-12 mx-2 lg:mx-5 rounded-full">
            <span className="relative z-10 text-white text-[10px] sm:text-[18px] duration-200 transition-all group-hover:text-[#242A2E]">
              join us
            </span>
            <div className="absolute bg-[#242A2E] w-full h-full top-[50%] origin-right duration-200 translate-y-[-50%] right-0 transition-all group-hover:scale-0 rounded-full" />
            <div className="absolute flex items-center justify-center w-3 h-3 md:w-6 md:h-6 -right-2 md:-right-3 rounded-full bg-[#f1f1f1] text-[#242A2E] border-[#242A2E] border top-[50%] translate-y-[-50%] transition-all duration-150 delay-100 group-hover:delay-150 group-hover:text-[#f1f1f1] group-hover:bg-[#242A2E]">
              <MdOutlineKeyboardArrowRight />
            </div>
          </button>
        </div>

        <div className="flex items-center font-primary text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[116px]">
          <img
            src={mainthing3}
            alt="image"
            className="max-w-10 ssm:max-w-16 sm:max-w-[85px] md:max-w-[107px] lg:max-w-40 mx-2 lg:mx-5"
          />{" "}
          Daily care
        </div>
      </div>
    </section>
  );
}
