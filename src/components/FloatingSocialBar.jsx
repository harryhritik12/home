import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const phoneNumber = process.env.REACT_APP_PHONE_NUMBER;
const whatsappNumber = process.env.REACT_APP_WHATSAPP_NUMBER;
const email = process.env.REACT_APP_EMAIL;

const FloatingSocialBar = () => {
  const iconClass =
    "flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-transform transform hover:scale-110";

  return (
    <div className="fixed top-1/3 right-4 flex flex-col space-y-3 z-50">
      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${iconClass} bg-green-500 text-white`}
        aria-label="WhatsApp"
        whileTap={{ scale: 0.85 }} // Click effect
      >
        <FaWhatsapp size={22} />
      </motion.a>

      {/* Phone */}
      <motion.a
        href={`tel:${phoneNumber}`}
        className={`${iconClass} bg-blue-500 text-white`}
        aria-label="Phone"
        whileTap={{ scale: 0.85 }} // Click effect
      >
        <FaPhoneAlt size={20} />
      </motion.a>

      {/* Email */}
      <motion.a
        href={`mailto:${email}`}
        className={`${iconClass} bg-red-500 text-white`}
        aria-label="Email"
        whileTap={{ scale: 0.85 }} // Click effect
      >
        <FaEnvelope size={20} />
      </motion.a>
    </div>
  );
};

export default FloatingSocialBar;
