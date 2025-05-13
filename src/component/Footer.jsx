import React from "react";
import logo from "../assets/footer-logo.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../utilis/animationVariants";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-100  py-12 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 container mx-auto">
        {/* FOOTER-1 */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="space-y-6 mr-14"
        >
          {/* img */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="" className="w-32 h-auto" />
          </div>
          {/* description */}
          <p className="text-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* SOCIAL */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </motion.div>

        {/* FOOTER-2 */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="text-gray-700 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#Services" className="text-gray-700 hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        {/* FOOTER-3 */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h3 className="font-semibold text-xl mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Terms Of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:underline">
                Support Center
              </a>
            </li>
          </ul>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <div className="space-y-3">
            {/* ADDRESS */}
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-primary" />
              <p className="text-gray-700">123 Street, CiTy, Country</p>
            </div>
            {/* PHONE */}
            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="text-primary" />
              <p className="text-gray-700">+123 456 789</p>
            </div>
            {/* GMAIL Info */}
            <div className="flex gap-2 items-center">
              <FaEnvelope className="text-primary" />
              <p className="text-gray-700">trandinhgon@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
