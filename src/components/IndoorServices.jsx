import React from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";

// Import Indoor Services Images
import imagery from "../assets/IndoorServices/ImageryServices.jpg";
import digitization from "../assets/IndoorServices/Digitization.jpg";
import geoRef from "../assets/IndoorServices/Geo-Ref.jpg";
import cadastral from "../assets/IndoorServices/CadastralMapping.jpg";
import baseMap from "../assets/IndoorServices/Base-Map-Creation.jpg";
import land from "../assets/IndoorServices/Land.jpg";
import landBase from "../assets/IndoorServices/LandBase.jpg";
import landBaseCreation from "../assets/IndoorServices/LandBaseCreation.jpg";
import data from "../assets/IndoorServices/Data.jpg";
import dataAnalysis from "../assets/IndoorServices/DataAnalysis.jpg";

const indoorServices = [
    { title: "Imagery Services", img: imagery },
    { title: "Digitization & Feature Extraction", img: digitization },
    { title: "Geo Referencing", img: geoRef },
    { title: "Cadastral Mapping", img: cadastral },
    { title: "Base Map Creation", img: baseMap },
    { title: "Land", img: land },
    { title: "Land Base", img: landBase },
    { title: "Land Base Creation", img: landBaseCreation },
    { title: "Data", img: data },
    { title: "Data Analysis", img: dataAnalysis },
];

const IndoorServices = () => {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Indoor Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {indoorServices.map((service, index) => (
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



export default IndoorServices;
