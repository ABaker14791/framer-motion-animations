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
      <div className="divider"></div>
      <motion.div
        className="square"
        whileHover={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
      ></motion.div>
      <p className="square-text">
        Hover over the thing above to do some weird spinning sh*t
      </p>
      <div className="divider"></div>
      <motion.div
        className="square"
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      ></motion.div>
      <p className="square-text">
        Click and drag this one around, its limited to 50px each way
      </p>
    </div>
  );
};

export default SquareAnimations;
