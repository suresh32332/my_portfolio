import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../Motion/Variants";

const certificates = [
  {
    title: "Java Full Stack Development",
    provider: "Udemy",
    link: "https://drive.google.com/file/d/1Ku87zW9hedlN6aG3lJsw7a0oS3WmKHI5/view?usp=sharing", // replace with your link
  },
  {
    title: "Python Full Stack Development",
    provider: "Guvi",
    link: "https://drive.google.com/file/d/1jWFMw4Qmoz1lXwPWyu2sljGR0ghcnJNy/view?usp=sharing",
  },
  {
    title: "Internship Training ",
    provider: "NSIC",
    link: "https://drive.google.com/file/d/10bgnjxrr1t9y4jXpdsshwLaI4I_erxjO/view?usp=sharing",
  },
];

const CertificatesSectionMain = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <section id="certificates" className="font-body  py-12 pb-3 ">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-cyan">
            Certificates & Achievements
          </h2>

          <div className="text-body grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className=" bg-brown  rounded-2xl shadow-md p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold  text-orange">
                    {cert.title}
                  </h3>
                  <p className="text-white mt-1">Issued by {cert.provider}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-center text-white px-4 py-2 rounded-lg hover:bg-darkCyan bg-cyan transition-all duration-500 "
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default CertificatesSectionMain;
