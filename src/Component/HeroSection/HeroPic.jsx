import React from "react";
import { PiHexagon } from "react-icons/pi";
import profileImage from "../../assets/pro1.png";
import {motion} from "framer-motion";
import {fadeIn} from "../../Motion/Variants"

const HeroPic = () => {
  return (
    <motion.div 
     variants={fadeIn('left',0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once : false,amount:0}}
    className="h-full flex items-center justify-center">
      <img src={profileImage} alt="suresh" className="md:max-h-[500px]  w-auto " />

      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
<PiHexagon className="w-auto h-[100px] sm:h-[500px] md:h-[600px] text-cyan-500 blur-md animate-[spin_20s_linear_infinite]"/> 

  </div>


    </motion.div>
  );
};

export default HeroPic;
