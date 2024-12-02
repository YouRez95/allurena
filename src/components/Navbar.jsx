import React, { useState } from "react";
import { motion } from "motion/react";
import ItemsNavbar from "./ItemsNavbar";
import ItemsNavbarWhite from "./ItemsNavbarWhite";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`h-[70px]`}>
      <ItemsNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <motion.div
        className="bg-[#D3D4D5] h-[1px]"
        style={{ transformOrigin: "center" }}
        animate={{ scaleX: 1 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 1 }}
      />
      <div
        className={`fixed z-50 bg-[#242A2E] transition-all duration-1000 ${
          menuOpen ? "top-[0px] h-[100vh]" : "-top-full h-0 delay-1000"
        }  left-0 right-0`}
      >
        <ItemsNavbarWhite menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </nav>
  );
}
