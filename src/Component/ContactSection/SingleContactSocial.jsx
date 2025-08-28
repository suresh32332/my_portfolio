import React from "react";

const SingleContactSocial = ({ Icon, link }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center cursor-pointer  hover:bg-darkCyan bg-cyan transition-all duration-500"
      >
        <Icon />
      </a>
    </>
  );
};

export default SingleContactSocial;
