import React from 'react'
import {motion} from "framer-motion";
import {fadeIn} from "../../Motion/Variants"

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4 h-full justify-center md:text-left sm:text-center'>
   
      <motion.h1 
       variants={fadeIn('right',0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once : false,amount:0}}
      className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange'>Suresh T</motion.h1>
         <motion.h3 
      variants={fadeIn('down',0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once : false,amount:0}}
       className='llg:text-2xl sm:text-xl uppercase text-cyan'>Java Full stack Developer</motion.h3>
      <motion.p 
       variants={fadeIn('up',0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once : false,amount:0}}
      className='text-lg mt-4 text-white'>Passionate Java Full Stack Developer skilled in Java, Spring Boot, React, and MySQL; eager to build scalable and impactful solutions</motion.p>
    </div>
  )
}

export default HeroText
