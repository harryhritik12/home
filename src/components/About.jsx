import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/process1.jpg";

const About = () => {
    return (
        <section className="relative bg-gray-50 py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="md:w-1/2 rounded-xl overflow-hidden shadow-lg"
                >
                    <img src={aboutImage} alt="About Us" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">About Us</h2>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        BUSINESS BASKET INFRATECH PVT. LTD, formerly known as Universal Map Solutions, is an organization specializing in Remote Sensing (RS), Geographic Information System (GIS), and Global Positioning System (GPS) technologies. We integrate conventional techniques for optimal exploration, judicious exploitation, and maximum utilization of various natural resources. BUSINESS BASKET also specializes in natural and man-made disaster management, risk assessment, land information systems, environmental and climatic studies, Management Information System (MIS), and urban planning.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        BUSINESS BASKET was founded by highly qualified professionals with extensive experience and proven capabilities in GIS, Remote Sensing, GPS, ground surveys, digital mapping, cadastre map digitization, spatial data creation, utility mapping, transport planning, computer-aided cartography, consulting, application development, project design & management, and more. We pride ourselves on being a complete solution provider.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        BUSINESS BASKET also serves as an outsourcing partner, prioritizing cost-effectiveness over mere outsourcing. Capacity building, including training for decision-makers, implementing agencies, and grassroots workers, is a core activity. Our commitment to truthfulness, high-quality data production, and timely project deliveries is key to long-term success.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;