import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import SkillsSingle from "./SkillsSingle";
import { FaReact } from "react-icons/fa6";
import {motion} from "framer-motion";
import {fadeIn} from "../../Motion/Variants"
import { FaJava } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

const skills = [
  {
    skill: "HTML",
    icon:  IoLogoHtml5 ,
  },
  {
    skill: "CSS",
    icon:  FaCss3Alt ,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript ,
  },
  {
    skill: "React",
    icon:  FaReact ,
  },
  {
    skill:"Java",
    icon:FaJava,
  },
  {
    skill:"Spring Boot",
    icon :SiSpring,
  },
   {
    skill:"Hibernate",
    icon: SiHibernate,
  },
  {
    skill:"MySQL",
    icon:FaDatabase  ,
  },
    {
    skill:"GitHub",
    icon:  FaGithub,
  },
    {
      skill: "VS Code",
      icon:VscVscodeInsiders,
    },
    {
      skill: "Postman",
      icon:SiPostman,
    },

  
]

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
             variants={fadeIn('up',`0.${index}`)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{once : false,amount:0}}
            >
            <SkillsSingle key={index} text={item.skill} imgSvg={<item.icon/>} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
