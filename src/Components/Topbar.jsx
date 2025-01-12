import React from "react";
import whatsapp1 from "../assets/icons-asset/whatsapp (1).png";
import callicon from "../assets/icons-asset/call.png";
import email from "../assets/icons-asset/gmail.png";
import facebook from "../assets/icons-asset/facebook.png";
import instagram from "../assets/icons-asset/instagram.png";
import twitter from "../assets/icons-asset/twitter.png";
import googleplus from "../assets/icons-asset/googleplus.png";

const Topbar = () => {
  return (
    <div className="lg:flex sm:flex sm:gap-4 sm:justify-between sm:items-center  xs:gap-4 xs:p-4 items-center justify-between w-full h-auto px-5 bg-[#222]">
      <div className="flex items-center justify-center text-white contact-bar text-[16px] text-start xs:my-2">
        <a
          href="mailto:fawadkhan1930@gmail.com"
          className="flex items-center justify-center gap-1 mr-2"
        >
          Email us <img src={email} alt="email icon" className="w-6 h-6" /> |
        </a>
        <a href="tel:+923489857193" className="flex items-center gap-1">
          Call us <img src={callicon} alt="call icon" className="w-6 h-6" /> |
        </a>
        <a
          href="https://wa.me/923489857193"
          className="flex items-center gap-2 ml-1"
        >
          WhatsApp us{" "}
          <img src={whatsapp1} alt="whatsapp icon" className="w-6 h-6" />
        </a>
      </div>
      <div className="flex justify-center gap-3 social-media-handles">
        <a href="https://www.facebook.com">
          <img src={facebook} alt="facebook" className="w-6 h-6" />
        </a>
        <a href="https://www.instagram.com">
          <img src={instagram} alt="instagram" className="w-6 h-6" />
        </a>
        <a href="https://www.twitter.com">
          <img src={twitter} alt="twitter" className="w-6 h-6" />
        </a>
        <a href="https://www.google.com">
          <img src={googleplus} alt="google+" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Topbar;
