import { RiScrollToBottomLine } from "react-icons/ri";
import { motion } from "framer-motion";

const TextVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const imageVariant = {
    hidden: {
        x: 200,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1,
        }
    }
}

export default function Hero() {
  return (
    <div className="hero ">
        <div className="wrapper">
            <motion.div className="textContainer" variants={TextVariants} initial="initial" animate="animate">
                <motion.h2 variants={TextVariants}>Anezi Jane</motion.h2>
                <motion.h1 variants={TextVariants}>Frontend Engineer and Instructor</motion.h1>
                <motion.div className="buttons" variants={TextVariants}>
                    <motion.button variants={TextVariants}>See my Latest Works</motion.button>
                    <motion.button variants={TextVariants}>Contact Me</motion.button>
                </motion.div>
                <RiScrollToBottomLine className="scroll" variants={TextVariants}/>
            </motion.div>
        </div>
        <marquee className="slidingTextContainer">
            Frontend Engineer && Instructor
        </marquee>
        
        <motion.div className="imageContainer" variants={imageVariant} initial="hidden" animate="visible">
            <motion.img src="/public/images/heroImg.png" alt="my profile image" variants={imageVariant}/>
        </motion.div>
    </div>
  )
}
