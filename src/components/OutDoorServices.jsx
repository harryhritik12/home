import React from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

// Import Outdoor Services Images
import landSurvey from "../assets/outDoorServices/LandSurvey.jpg";
import cadastralSurvey from "../assets/outDoorServices/Cadastral survey.jpg";
import doorSurvey from "../assets/outDoorServices/Door.jpg";
import dataCollection from "../assets/outDoorServices/Census Survey.jpg";
import utilitySurvey from "../assets/outDoorServices/Utility.jpg";
import droneSurvey from "../assets/outDoorServices/Drone surveys.jpg";
import roadSurvey from "../assets/outDoorServices/Road&Highwaysurvey.jpg";
import gasPipeline from "../assets/outDoorServices/Gas Pipeline Survey.jpg";
import waterPipeline from "../assets/outDoorServices/WaterPipelineSurvey.jpg";
import topoSurvey from "../assets/outDoorServices/TopographicSurvey.jpg";
import consumerIndexing from "../assets/outDoorServices/Consumer Indexing Survey.jpg";
import propertyTax from "../assets/outDoorServices/Property Tax Survey.jpg";
import censusSurvey from "../assets/outDoorServices/Census Survey.jpg";
import groundTrothing from "../assets/outDoorServices/Ground trothing.jpg";
import poiAddress from "../assets/outDoorServices/POI & Address.jpg";
import networkSurvey from "../assets/outDoorServices/Assets survey and mapping.jpg";
const outdoorServices = [
    { title: "Land Survey", img: landSurvey },
    { title: "Cadastral Survey", img: cadastralSurvey },
    { title: "Door To Door Survey", img: doorSurvey },
    { title: "Data Collection & Verification", img: dataCollection },
    { title: "Utility Survey", img: utilitySurvey },
    { title: "Drone Surveys", img: droneSurvey },
    { title: "Road & Highway Survey", img: roadSurvey },
    { title: "Gas Pipeline Survey", img: gasPipeline },
    { title: "Water Pipeline Survey", img: waterPipeline },
    { title: "Topographic Survey", img: topoSurvey },
    { title: "Consumer Indexing", img: consumerIndexing },
    { title: "Property Tax Survey", img: propertyTax },
    { title: "Census Survey", img: censusSurvey },
    { title: "Ground Trothing", img: groundTrothing },
    { title: "POI & Address Point Verification", img: poiAddress },
    { title: "Network Survey & Assets Mapping", img: networkSurvey },
];

const OutdoorServices = () => {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Outdoor Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {outdoorServices.map((service, index) => (
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

export default OutdoorServices;
