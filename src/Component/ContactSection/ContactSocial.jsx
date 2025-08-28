import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = ({Icon, link}) => {
  return (
    <div className='flex gap-4'>
       <SingleContactSocial link='https://github.com/suresh32332' Icon={FiGithub}/>
        <SingleContactSocial link='https://www.linkedin.com/in/suresh32/' Icon={FaLinkedinIn }/>
         <SingleContactSocial link='https://www.instagram.com/suresh__vfc/' Icon={FaInstagram }/>
        

   
    </div>
  )
}

export default ContactSocial
