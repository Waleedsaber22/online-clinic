import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <span className="text-sm sm:text-center text-white">
        © 2023 Online Clinic . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm  text-white sm:mt-0">
        <li>
          <a
            href="#"
            className="mr-4  md:mr-6 hover:underline text-white hover:text-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4  md:mr-6 hover:underline text-white hover:text-white"
          >
            Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="#"
            className="mr-4  md:mr-6 hover:underline text-white hover:text-white"
          >
            Terms of Use
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:underline hover:text-white ">
            Legal
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
