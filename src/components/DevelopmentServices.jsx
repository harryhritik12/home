import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import gis from "../assets/DevelopmentServices/Gis.jpg";
import mobileApp from "../assets/DevelopmentServices/Mobileapplication.jpg";
import webApp from "../assets/DevelopmentServices/WebApplication.jpg";
import website from "../assets/DevelopmentServices/Website.jpg";

const developmentServices = [
  {
    title: "WebGIS - Land Management",
    img: gis,
    description: "Advanced land management using GIS technology.",
  },
  {
    title: "Website Creation",
    img: website,
    description: "Custom website design and development services.",
  },
  {
    title: "Web Application",
    img: webApp,
    description: "Scalable and robust web application solutions.",
  },
  {
    title: "Mobile Application",
    img: mobileApp,
    description: "Feature-rich mobile applications for various platforms.",
  },
];

const DevelopmentServices = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto py-20 px-6 md:px-16">
      {/* Navigation Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center sm:text-left">
          Our Development Services
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigate("/services/indoor")}
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Indoor Services
          </button>
          <button
            onClick={() => navigate("/services/outdoor")}
            className="px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
          >
            Outdoor Services
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {developmentServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentServices;
