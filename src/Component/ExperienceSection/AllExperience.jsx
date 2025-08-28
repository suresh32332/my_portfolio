import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../Motion/Variants";
import { div } from "motion/react-client";

const experience = [
  {
    job: "front-end  Developer",
    company: "company name",
    date: "2022- present",
    responsibilities: [
      "Implementing resusable component.",
      "participating in large scale application.",
      "working on the performance of web appliction",
    ],
  },
  {
    job: "front-end  Developer",
    company: "company name",
    date: "2022- present",
    responsibilities: [
      "Implementing resusable component.",
      "participating in large scale application.",
      "working on the performance of web appliction",
    ],
  },
  {
    job: "front-end  Developer",
    company: "company name",
    date: "2022- present",
    responsibilities: [
      "Implementing resusable component.",
      "participating in large scale application.",
      "working on the performance of web appliction",
    ],
  },
];
const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experience.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />;
            {index < 2 ? (
                <motion.div
                 variants={fadeIn('right',0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{once : false,amount:0}}
                >
                     <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />

                </motion.div>
             
            ) : (
              " "
            )}
          </>
        );
      })}
    </div>
  );
};
export default AllExperience;
