import React from "react";
import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className=" font-body flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10 ">About Me </h2>
      <p className="text-white ">
        I am a Computer Science Engineering graduate (2024 pass-out) from
        Government College of Engineering, Tirunelveli, with a Diploma in
        Electrical and Electronics Engineering (2020 pass-out) from Government
        Polytechnic College, Sankarapuram.
        <br />
        <br/>
        Skilled in Java, Spring Boot, React, and MySQL, I enjoy building web
        applications, solving problems, and collaborating in teams. I am seeking
        an entry-level software developer role where I can apply my skills,
        contribute to projects, and grow my career.
      </p>

      {/* Button scrolls to Project section */}
      <Link
        to="project"
        smooth={true}
        spy={true}
        duration={500}
        offset={-130}
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
