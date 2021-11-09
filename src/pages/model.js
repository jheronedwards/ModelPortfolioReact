import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Components
import ScrollForMore from "../components/scrollForMore";
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const Model = ({ imageDetails }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div className='location'>
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className='mua'>MUA: @mariapedraza_</div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                <motion.span variants={letter}>M</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>í</motion.span>
                <motion.span variants={letter}>a</motion.span>
              </motion.span>
              <motion.span className='last' variants={lastName}>
                <motion.span variants={letter}>P</motion.span>
                <motion.span variants={letter}>e</motion.span>
                <motion.span variants={letter}>d</motion.span>
                <motion.span variants={letter}>r</motion.span>
                <motion.span variants={letter}>a</motion.span>
                <motion.span variants={letter}>z</motion.span>
                <motion.span variants={letter}>a</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-50%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <motion.img
                    src={require("../images/img_maria-pedraza_895_garaytalent.jpg")}
                    alt='maria-pedraza-garaytalent-editorial'
                    style={{ scale: scale }}
                    initial={{ scale: 1.0 }}
                    animate={{
                      transition: { delay: 0.2, ...transition },
                      y: window.innerWidth > 1440 ? -1200 : -600,
                    }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            <h2 className='title'>
              About María Pedraza & <br /> Who she is.
            </h2>
            <p>
            "María Pedraza (born 26 January 1996) is a Spanish actress and Ballerina
            best known for portraying Alison Parker in the Spanish series Money Heist.
            She also starred in the Netflix series Élite, playing the role of Marina.
            Pedraza was discovered through her Instagram account by film director Esteban
            Crespo who invited her to attend an audition for the lead role of his debut opera AMAR.

            María has been featured in editorials including Vogue and Vanidad. She is an Instagram 
            sensation with over 2.5 million followers. 

            Versatile entertainer who became a professional classical dancer, a model and an 
            actress for both the small and silver screen. She made her film debut in Amar (2017),
            and was cast in the series Money Heist (2017) followed by Netflix's Elite (2018)" (IMDb).
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
