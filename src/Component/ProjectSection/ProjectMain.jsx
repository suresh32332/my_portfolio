import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import emsImage from "../../assets/all_emp.jpg";
import chatbot from "../../assets/chatbot.jpg";
import myPortfolio from "../../assets/my_portfolio.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../Motion/Variants";

const projects = [
  {
    name: " My Portfolio",
    year: "Aug2025",
    align: "right",
    image: myPortfolio,
    link: "#",
  },
  {
    name: "Employee Management System",
    year: "Jun2025",
    align: "left",
    image: emsImage,
    link: "#",
  },
  {
    name: " ChatBot for Government Schemes ",
    year: "Apr2024",
    align: "right",
    image: chatbot,
    link: "#",
  }
  
];
const ProjectMain = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      id="project"
      className="font-body max-w-[1200px] mx-auto px-4"
    >
      <ProjectText />
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectMain;
