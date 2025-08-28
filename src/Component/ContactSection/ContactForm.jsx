import React, { useState } from "react";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm("service_pl54puf", "template_cniapqn", form.current, {
          publicKey: "2N8zBiA5kgnJThRuc",
        })
        .then(
          () => {
             setName('');
             setEmail('');
             setMessage('');
             setSuccess('Message Sended');
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    };
  

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form
        action=""
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name "
          required
          className="h-12 rounded-lg bg-lightBrown px-2 "
          value={name}
          onChange={handleName}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email "
          required
          className="h-12 rounded-lg bg-lightBrown px-2 "
           value={email}
          onChange={handleEmail}
        />

        <textarea
          name="message"
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className=" rounded-lg bg-lightBrown p-2 "
          value={message}
          onChange={handleMessage}
        />

        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 "
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
