import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BouncyCardsFeatures } from "./AboutUs";
import NavbarBarMain from "./NavbarMain";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ask");
  };

  return (
    <div>
      <NavbarBarMain />
      <BouncyCardsFeatures />
      <div id="animation-container" style={{ padding: "3%" }}>
        <motion.button
          whileHover={{ scale: 1.14 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
          onClick={handleClick}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
