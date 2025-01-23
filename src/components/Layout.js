import React from "react";
import { motion, useScroll } from "framer-motion";
import "./Layout.css";

const Layout = ({ children }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="layout">
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {/* Page Content */}
      {children}
    </div>
  );
};

export default Layout;
