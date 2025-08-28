import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../Motion/Variants";
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
    icon: IoLogoHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "React",
    icon: FaReact,
  },
  {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "Spring",
    icon: SiSpring,
  },
  {
    skill: "Hibernate",
    icon: SiHibernate,
  },
  {
    skill: "MySql",
    icon: FaDatabase,
  },
  {
    skill: "GitHub",
    icon: FaGithub,
  },
   {
    skill: "VS code",
    icon:VscVscodeInsiders,
  },
  {
    skill: "Postman",
    icon:SiPostman,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
