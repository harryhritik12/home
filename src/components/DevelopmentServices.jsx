import React from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";


// Import Development Services Images
import gis from "../assets/DevelopmentServices/Gis.jpg";
import mobileApp from "../assets/DevelopmentServices/Mobileapplication.jpg";
import webApp from "../assets/DevelopmentServices/WebApplication.jpg";
import website from "../assets/DevelopmentServices/Website.jpg";

const developmentServices = [
    { title: "WebGIS - Land Management", img: gis },
    { title: "Website Creation", img: website },
    { title: "Web Application", img: webApp },
    { title: "Mobile Application", img: mobileApp },
];

const DevelopmentServices = () => {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Development Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {developmentServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
                    >
                        <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default DevelopmentServices;
