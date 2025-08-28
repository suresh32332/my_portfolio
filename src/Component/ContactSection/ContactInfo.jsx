import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="sureshsuresh32332@gmail.com " Image={ MdOutlineMail }/>
         <SingleInfo text="+91-9385981834 " Image={ FaPhoneAlt}/>
          <SingleInfo text="Kallakurichi, Tamil Nadu " Image={ IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo
