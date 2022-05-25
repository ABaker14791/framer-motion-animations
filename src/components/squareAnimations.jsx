import React from "react";
import { motion } from "framer-motion";

const SquareAnimations = () => {
  return (
    <div className="container">
      <h1 className="title">Animations</h1>
      <motion.div
        className="square"
        animate={{ x: "0" }}
        initial={{ x: "-100vw" }}
      ></motion.div>
      <motion.p
        className="square-text"
        animate={{ x: "0" }}
        initial={{ x: "100vw" }}
        transition={{ delay: 0.4 }}
      >
        Animate on the x axis
      </motion.p>
      <div className="divider"></div>
      <motion.div
        className="square"
        animate={{ y: "0" }}
        initial={{ y: "100vh" }}
      ></motion.div>
      <motion.p
        className="square-text"
        animate={{ y: "0" }}
        initial={{ y: "100vh" }}
        transition={{ delay: 0.4 }}
      >
        Animate on the y axis
      </motion.p>
    </div>
  );
};

export default SquareAnimations;
