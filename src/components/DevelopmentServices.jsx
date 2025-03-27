import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gis from "../assets/DevelopmentServices/Gis.jpg";
import mobileApp from "../assets/DevelopmentServices/Mobileapplication.jpg";
import webApp from "../assets/DevelopmentServices/WebApplication.jpg";
import website from "../assets/DevelopmentServices/Website.jpg";

// Service Data
const developmentServices = [
  { title: "WebGIS - Land Management", img: gis, description: "Advanced land management using GIS technology." },
  { title: "Website Creation", img: website, description: "Custom website design and development services." },
  { title: "Web Application", img: webApp, description: "Scalable and robust web application solutions." },
  { title: "Mobile Application", img: mobileApp, description: "Feature-rich mobile applications for various platforms." },
];

// Animation Variants
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DevelopmentServices = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 md:px-16">
      {/* Hero Section */}
      <div className="relative bg-gray-700 h-[350px] flex items-center justify-center text-center text-white px-6 rounded-xl shadow-lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold tracking-wide"
          >
            Web Application Development Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="mt-3 text-lg max-w-2xl mx-auto opacity-90"
          >
            Maximize your business potential with robust and user-friendly web applications.
          </motion.p>
          <motion.button
            onClick={() => navigate("/consultation")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Request Free Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Service Buttons */}
      <div className="flex justify-center space-x-4 mt-10">
        <motion.button
          onClick={() => navigate("/services/outdoor")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-full shadow-md hover:bg-green-700 transition-all duration-300"
        >
          Outdoor Services
        </motion.button>
        <motion.button
          onClick={() => navigate("/services/indoor")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          Indoor Services
        </motion.button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">
        {developmentServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img 
                src={service.img} 
                alt={service.title} 
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentServices;
