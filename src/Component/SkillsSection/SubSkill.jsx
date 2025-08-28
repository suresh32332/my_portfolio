import React from 'react'


//---------------------------------------1.25--------------------





import SubSkillImage from "../../assets/SubSkill.jpg";
const SubSkill = () => {
  return (
     <div className='border-y-2 border-lightGrey relative  sm:hidden md:block '>   
        <div className='absolute bg-gradient-to-r to-cyan opacity-50 w-full h-full'>

        </div>

        <img  src={SubSkillImage} alt="sub skill image " />
    </div>
  )
}

export default SubSkill
