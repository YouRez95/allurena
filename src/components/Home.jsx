import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbNorthStar } from "react-icons/tb";
import { motion } from "motion/react";

import home1 from "../assets/home-1.webp";
import home2 from "../assets/home-2.svg";
import home3 from "../assets/home-3.webp";

export default function Home() {
  return (
    <section className="h-[40vh] sm:h-[50vh] md:h-[71vh] flex items-center justify-center">
      <div className="uppercase container m-auto leading-[110px] flex flex-col items-center ">
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center font-primary text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[116px]"
            animate={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 50 }}
            transition={{ duration: 0.5 }}
          >
            skin Routine{" "}
            <img
              className="max-w-10 ssm:max-w-16 sm:max-w-[85px] md:max-w-[107px] lg:max-w-40 mx-0 ssm:mx-2 lg:mx-5"
              src={home1}
              alt="image"
            />{" "}
            that <br />
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex items-center font-primary text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[116px]"
            animate={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 50 }}
            transition={{ duration: 0.5 }}
          >
            {/* <img
            src={home2}
            alt="image"
            className="hidden ssm:flex max-w-10 ssm:max-w-16 sm:max-w-[85px] border rounded-full md:max-w-[107px] lg:max-w-40 mx-0 lg:mx-5"
          /> */}
            <div className="poppins hidden bg-[#f1a19a5a] rounded-full sm:flex scale-[.5] lg:scale-[.8] text-base relative mx-0 lg:mx-5">
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
            works from
            <button className="poppins flex items-center justify-center relative text-2xl group transition-all uppercase font-medium bg-[#CDE9DD] h-6 sm:h-10 lg:h-14 xl:h-20 px-2 sm:px-5 md:px-9 lg:px-12 mx-2 lg:mx-5 rounded-full">
              <span className="relative z-10 text-white text-[10px] sm:text-[18px] duration-200 transition-all group-hover:text-[#242A2E]">
                join us
              </span>
              <div className="absolute bg-[#242A2E] w-full h-full top-[50%] origin-right duration-200 translate-y-[-50%] right-0 transition-all group-hover:scale-0 rounded-full" />
              <div className="absolute flex items-center justify-center w-3 h-3 md:w-6 md:h-6 -right-2 md:-right-3 rounded-full bg-[#f1f1f1] text-[#242A2E] border-[#242A2E] border top-[50%] translate-y-[-50%] transition-all duration-150 delay-100 group-hover:delay-150 group-hover:text-[#f1f1f1] group-hover:bg-[#242A2E]">
                <MdOutlineKeyboardArrowRight />
              </div>
            </button>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex items-center font-primary text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[116px]"
            animate={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 50 }}
            transition={{ duration: 0.5 }}
          >
            the{" "}
            <img
              src={home3}
              alt="image"
              className="max-w-10 ssm:max-w-16 sm:max-w-[85px] md:max-w-[107px] lg:max-w-40 mx-2 lg:mx-5"
            />{" "}
            inside out
          </motion.div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center font-primary text-3xl sm:text-6xl md:text-7xl lg:text-[90px] xl:text-[116px]"
            animate={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 50 }}
            transition={{ duration: 0.5 }}
          >
            & outside in
          </motion.div>
        </div>
      </div>
    </section>
  );
}
