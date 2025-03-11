import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import servicesData from "../data/data";

const Services = () => {
    const [activeTab, setActiveTab] = useState("indoor");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [changingCategory, setChangingCategory] = useState(false);
    const navigate = useNavigate();
    const services = servicesData[activeTab];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % services.length);
        }, 7000);
        return () => clearInterval(interval);
    }, [activeTab, services.length]);

    const handleTabChange = (category) => {
        if (category !== activeTab) {
            setChangingCategory(true);
            setTimeout(() => {
                setActiveTab(category);
                setCurrentIndex(0);
                setChangingCategory(false);
            }, 500);
        }
    };

    return (
        <section className="max-w-7xl mx-auto py-20 px-6 md:px-16">
            <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">Our Services</h2>

            <div className="flex justify-center space-x-8 border-b border-gray-300 pb-6 mb-10">
                {Object.keys(servicesData).map((category) => (
                    <button
                        key={category}
                        onClick={() => handleTabChange(category)}
                        className={`text-lg font-semibold capitalize px-4 py-2 rounded-full transition-all duration-300 ${
                            activeTab === category ? "bg-blue-600 text-white shadow-lg" : "text-gray-700 hover:text-blue-600"
                        }`}
                    >
                        {category} Services
                    </button>
                ))}
            </div>

            <div className="relative flex items-center justify-center h-[450px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-3xl p-8">
                <AnimatePresence mode="wait">
                    {changingCategory ? (
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center text-2xl font-medium text-blue-600"
                        >
                            Loading {activeTab} Services...
                        </motion.div>
                    ) : (
                        <motion.div
                            key={services[currentIndex].id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col md:flex-row items-center w-full gap-10"
                        >
                            <motion.div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                                <img src={services[currentIndex].img} alt={services[currentIndex].title} className="w-full h-full object-cover" />
                            </motion.div>

                            <div className="md:w-1/2 text-center md:text-left">
                                <h3 className="text-4xl font-bold text-blue-600 mb-4">{services[currentIndex].title}</h3>
                                <TypeAnimation
                                    sequence={[
                                        services[currentIndex].description, 5000,
                                        "", 1000,
                                    ]}
                                    wrapper="p"
                                    speed={50}
                                    className="text-lg leading-relaxed text-gray-700 mb-6"
                                    repeat={Infinity}
                                />
                                <button
                                    onClick={() => navigate(`/services/${activeTab}`)}
                                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
                                >
                                    View All Services
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Services;