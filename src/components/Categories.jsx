import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";
import logoCleansers from "../assets/cleansers.svg";
import logoTreatments from "../assets/treatements.svg";
import logoMois from "../assets/mois.svg";
import logoSun from "../assets/sun.svg";
import logoToneMist from "../assets/toner&mist.svg";
import logoMasks from "../assets/masks.svg";
import cat1 from "../assets/cat1.webp";
import cat2 from "../assets/cat2.webp";
import cat3 from "../assets/cat3.webp";

export default function Categories() {
  return (
    <section className="container m-auto overflow-x-hidden">
      <div className="flex flex-col gap-5">
        <motion.div
          className="bg-[#D3D4D5] w-full h-[1px] flex-shrink-0"
          style={{ transformOrigin: "center" }}
          animate={{ scaleX: 1 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.7 }}
        />
        <div className="overflow-x-scroll">
          <ul className="flex justify-between text-[16px] md:text-[20px] items-center min-w-[1000px] overflow-hidden">
            <motion.li
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 50 }}
              transition={{ duration: 0.5 }}
              className="flex cursor-pointer overflow-hidden relative h-full group gap-2 py-2 px-2 justify-center items-center"
            >
              <img
                src={logoCleansers}
                alt=""
                className="group-hover:animate-scaling"
              />
              <span className="capitalize transition-all duration-200 translate-y-0 group-hover:translate-y-[110%]">
                cleansers
              </span>
              <span className="capitalize absolute right-2 transition-all duration-200 -top-full group-hover:top-[50%] translate-y-[-50%]">
                cleansers
              </span>
            </motion.li>

            <motion.li
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 50 }}
              transition={{ duration: 0.5 }}
              className="flex cursor-pointer overflow-hidden relative h-full group gap-2 py-2 px-2 justify-center items-center"
            >
              <img
                src={logoTreatments}
                alt=""
                className="group-hover:animate-scaling"
              />
              <span className="capitalize transition-all duration-200 translate-y-0 group-hover:translate-y-[110%]">
                treatments
              </span>
              <span className="capitalize absolute right-2 transition-all duration-200 -top-full group-hover:top-[50%] translate-y-[-50%]">
                treatments
              </span>
            </motion.li>

            <motion.li
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 50 }}
              transition={{ duration: 0.5 }}
              className="flex cursor-pointer overflow-hidden relative h-full group gap-2 py-2 px-2 justify-center items-center"
            >
              <img
                src={logoMois}
                alt=""
                className="group-hover:animate-scaling"
              />
              <span className="capitalize transition-all duration-200 translate-y-0 group-hover:translate-y-[110%]">
                moisturisers
              </span>
              <span className="capitalize absolute right-2 transition-all duration-200 -top-full group-hover:top-[50%] translate-y-[-50%]">
                moisturisers
              </span>
            </motion.li>

            <motion.li
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 50 }}
              transition={{ duration: 0.5 }}
              className="flex cursor-pointer overflow-hidden relative h-full group gap-2 py-2 px-2 justify-center items-center"
            >
              <img
                src={logoSun}
                alt=""
                className="group-hover:animate-scaling"
              />
              <span className="capitalize transition-all duration-200 translate-y-0 group-hover:translate-y-[110%]">
                sunscreens
              </span>
              <span className="capitalize absolute right-2 transition-all duration-200 -top-full group-hover:top-[50%] translate-y-[-50%]">
                sunscreens
              </span>
            </motion.li>

            <motion.li
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 50 }}
              transition={{ duration: 0.5 }}
              className="flex cursor-pointer overflow-hidden relative h-full group gap-2 py-2 px-2 justify-center items-center"
            >
              <img
                src={logoToneMist}
                alt=""
                className="group-hover:animate-scaling"
              />
              <span className="capitalize transition-all duration-200 translate-y-0 group-hover:translate-y-[110%]">
                Toners and Mists
              </span>
              <span className="capitalize absolute right-2 transition-all duration-200 -top-full group-hover:top-[50%] translate-y-[-50%]">
                Toners and Mists
              </span>
            </motion.li>

            <motion.li
              animate={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 50 }}
              transition={{ duration: 0.5 }}
              className="flex cursor-pointer overflow-hidden relative h-full group gap-2 py-2 px-2 justify-center items-center"
            >
              <img
                src={logoMasks}
                alt=""
                className="group-hover:animate-scaling"
              />
              <span className="capitalize transition-all duration-200 translate-y-0 group-hover:translate-y-[110%]">
                masks
              </span>
              <span className="capitalize absolute right-2 transition-all duration-200 -top-full group-hover:top-[50%] translate-y-[-50%]">
                masks
              </span>
            </motion.li>
          </ul>
        </div>
        <motion.div
          className="bg-[#D3D4D5] w-full h-[1px]"
          style={{ transformOrigin: "center" }}
          animate={{ scaleX: 1 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.7 }}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-7 my-7">
        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          whileHover={{ scale: 0.95 }}
          className="relative flex-1 max-h-[400px] transition-all duration-200 group hover:scale-95 overflow-hidden cursor-pointer"
        >
          <div className="absolute bg-[#D68B6D] w-10 h-10 transition-all duration-200 -right-10 -top-10 group-hover:-right-0 group-hover:-top-0" />
          <div className="absolute bg-white flex items-end justify-center w-[56.56px] rotate-45 h-[56.56px] transition-all duration-200 translate-x-7 -translate-y-7 -right-10 -top-10 group-hover:-right-0 group-hover:-top-0">
            <MdArrowOutward className="-rotate-45 -translate-y-3 scale-0 transition-all duration-200 group-hover:scale-100" />
          </div>
          <img src={cat1} alt="" className="object-[0px_-24px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, amount: 0.7 }}
          whileHover={{ scale: 0.95 }}
          className="relative flex-1 max-h-[400px] transition-all duration-200 group hover:scale-95 overflow-hidden cursor-pointer"
        >
          <div className="absolute bg-[#9AC1CC] w-10 h-10 transition-all duration-200 -right-10 -top-10 group-hover:-right-0 group-hover:-top-0" />
          <div className="absolute bg-white flex items-end justify-center w-[56.56px] rotate-45 h-[56.56px] transition-all duration-200 translate-x-7 -translate-y-7 -right-10 -top-10 group-hover:-right-0 group-hover:-top-0">
            <MdArrowOutward className="-rotate-45 -translate-y-3 scale-0 transition-all duration-200 group-hover:scale-100" />
          </div>
          <img src={cat2} alt="" className="object-[0px_-24px] h-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.9 }}
          whileHover={{ scale: 0.95 }}
          className="relative flex-1 max-h-[400px] transition-all duration-200 group hover:scale-95 overflow-hidden cursor-pointer"
        >
          <div className="absolute bg-[#9BB0A7] w-10 h-10 transition-all duration-200 -right-10 -top-10 group-hover:-right-0 group-hover:-top-0" />
          <div className="absolute bg-white flex items-end justify-center w-[56.56px] rotate-45 h-[56.56px] transition-all duration-200 translate-x-7 -translate-y-7 -right-10 -top-10 group-hover:-right-0 group-hover:-top-0">
            <MdArrowOutward className="-rotate-45 -translate-y-3 scale-0 transition-all duration-200 group-hover:scale-100" />
          </div>
          <img src={cat3} alt="" className="object-[0px_-24px]" />
        </motion.div>
      </div>
    </section>
  );
}
