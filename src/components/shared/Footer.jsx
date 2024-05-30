import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import footerBg from "../../assets/images/more/footer-banner.png";
import logo from "/logo.png";

const Footer = () => {
  return (
    <footer
      className="mt-32 w-full"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-width pt-20 sm:pt-28 pb-10 sm:flex items-center gap-10">
        <div className="w-full">
          <img className="w-16" src={logo} alt="logo" />
          <h1 className="text-2xl sm:text-3xl rancho-font mb-6">
            Coffee Espresso
          </h1>
          <p className="text-sm">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-3 text-2xl mt-6">
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="w-full mt-8 sm:mt-0">
          <h1 className="text-2xl sm:text-3xl rancho-font mb-6">
            Get in Touch
          </h1>
          <div>
            <p>+88017********</p>
            <p>info@gmail.com</p>
            <p>Sylhet, Bangladesh</p>
          </div>
        </div>
      </div>
      <p className="text-center py-3 rancho-font   bg-[#374151] text-white">Copyright Espresso Emporium ! All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
