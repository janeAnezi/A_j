import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

export default function SideBar() {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      width: "300px",  // Set the expanded width
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      width: "60px",  // Set the collapsed width
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      variants={variants}  // Attach the animation variants
    >
      <motion.div className="bg">
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} /> {/* Toggle button to handle open/close */}
    </motion.div>
  );
}
