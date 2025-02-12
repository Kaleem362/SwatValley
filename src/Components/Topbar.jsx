import React from "react";
import whatsapp1 from "../assets/icons-asset/whatsapp (1).png";
import callicon from "../assets/icons-asset/call.png";
import email from "../assets/icons-asset/gmail.png";
import facebook from "../assets/icons-asset/facebook.png";
import instagram from "../assets/icons-asset/instagram.png";
import twitter from "../assets/icons-asset/twitter.png";
import googleplus from "../assets/icons-asset/googleplus.png";
import { Helmet } from "react-helmet-async";

const Topbar = () => {
  return (
    <>
      <Helmet>
        <title>Swat Tours - [Page Name]</title>
        <meta
          name="description"
          content="the top bar of the website with contact information and social media handles"
        />
        <link rel="canonical" href="https://theswattours.com/" />
      </Helmet>
      <div className="lg:flex sm:flex sm:gap-4 sm:justify-between sm:items-center  xs:gap-4 xs:p-4 items-center justify-between w-full lg:h-8 sm:h-auto px-5 bg-[#222] p-4">
        <div className=" flex items-center justify-center  text-white contact-bar  text-[14px] my-2 sm:text-[16px] text-start xs:my-2 animate-fadeInFromLeft">
          <a
            href="mailto:fawadkhan1930@gmail.com"
            className="flex items-center justify-center gap-1 mr-2 min-w-fit "
          >
            Email us{" "}
            <img
              src={email}
              alt="email icon"
              className="w-6 h-6 animate-fadeIn"
            />{" "}
            |
          </a>
          <a
            href="tel:+923489857193"
            className="flex items-center gap-1 min-w-fit animate-fadeIn"
          >
            +923489857193{" "}
            <img src={callicon} alt="call icon" className="w-6 h-6" /> |
          </a>
          <a
            href="https://wa.me/923489857193"
            className="flex items-center gap-2 ml-2 min-w-fit animate-fadeIn"
          >
            WhatsApp us{" "}
            <img src={whatsapp1} alt="whatsapp icon" className="w-6 h-6" />
          </a>
        </div>
        <div className="flex justify-center gap-3 xs:mt-4 md:mt-0 social-media-handles animate-fadeInFromRight">
          <a href="https://www.facebook.com/fawadkhan1930?mibextid=kFxxJD">
            <img
              src={facebook}
              alt="facebook"
              className="w-6 h-6 animate-fadeIn"
            />
          </a>
          <a href="https://www.instagram.com/the_swat_tours?igsh=MTgzbWRjdDNvamZwdg==">
            <img
              src={instagram}
              alt="instagram"
              className="w-6 h-6 animate-fadeIn"
            />
          </a>
          <a href="https://www.twitter.com">
            <img
              src={twitter}
              alt="twitter"
              className="w-6 h-6 animate-fadeIn"
            />
          </a>
          <a href="https://www.google.com">
            <img
              src={googleplus}
              alt="google+"
              className="w-6 h-6 animate-fadeIn"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Topbar;
