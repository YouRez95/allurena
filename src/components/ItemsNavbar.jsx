import { motion } from "motion/react";

export default function ItemsNavbar({ setMenuOpen }) {
  return (
    <motion.div
      className={`container h-[70px] flex transition-all items-center justify-between mx-auto`}
      animate={{ opacity: 1, translateY: 0 }}
      initial={{ opacity: 0, translateY: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4 sm:gap-10">
        <div
          className={`flex group transition-all cursor-pointer flex-col items-center gap-1`}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div className="w-10 sm:w-14 group-hover:w-7 transition-all ease-in-out h-[2px] bg-black" />
          <div className="w-10 sm:w-14 h-[2px] bg-black" />
          <div className="w-10 sm:w-14 group-hover:w-7 transition-all ease-in-out h-[2px] bg-black" />
        </div>

        <span className="uppercase font-medium text-xs ssm:text-s">% sale</span>
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
    </motion.div>
  );
}
