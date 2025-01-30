import React from "react";
import whatsapp from "../assets/icons-asset/whatsapppillow.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923489857193"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 w-auto bg-white rounded-full bottom-10 right-5 animate-float shadow-2xl border-2  border-slate-800 shadow-slate-800 "
    >
      <img
        src={whatsapp}
        alt="WhatsApp"
        className="w-12 h-12 transition-all xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 animate-roll !hover:rotate-180 duration-2"
      />
    </a>
  );
};

export default WhatsAppButton;
