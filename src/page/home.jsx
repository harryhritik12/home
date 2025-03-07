import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import process from "../assets/process1.jpg";
import team1 from "../assets/team/team.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";
import aboutImage from "../assets/process1.jpg";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    const services = [
        {
            title: "Development Services",
            img: process,
            description: [
                "We offer top-notch development services to build scalable and efficient applications.",
                "Our team specializes in modern technologies to deliver robust solutions.",
                "Partner with us for innovative and reliable software development."
            ]
        },
        {
            title: "Financial Services",
            img: process,
            description: [
                "Our financial services ensure your business stays financially healthy and compliant.",
                "We provide expert financial advice tailored to your business needs.",
                "Trust us to manage your finances with precision and care."
            ]
        },
        {
            title: "Construction Services",
            img: process,
            description: [
                "We provide reliable construction services for residential and commercial projects.",
                "Our team ensures quality and safety in every construction endeavor.",
                "Build your dreams with our professional construction solutions."
            ]
        },
    ];

    const teamMembers = [
        { name: "Robert", role: "Principal Designer", img: team1 },
        { name: "Patton", role: "Senior Designer", img: team2 },
        { name: "Virat", role: "Project Manager", img: team3 },
        { name: "Prabhat", role: "Art Advisor", img: team4 },
    ];

    // Unique animations for each service image on page load
    const initialAnimations = [
        { opacity: 0, x: -100, rotate: -10 }, // Slide in from left with rotation
        { opacity: 0, y: 100, scale: 0.8 }, // Slide in from bottom with scaling
        { opacity: 0, x: 100, rotate: 10 }, // Slide in from right with rotation
    ];

    // Unique animations for each service image on hover
    const hoverAnimations = [
        { scale: 1.1, rotate: 5, transition: { type: "spring", stiffness: 300 } }, // Scale and rotate
        { scale: 1.05, y: -10, transition: { type: "spring", stiffness: 300 } }, // Scale and move up
        { scale: 1.1, rotate: -5, transition: { type: "spring", stiffness: 300 } }, // Scale and rotate
    ];

    return (
        <div className="bg-white text-gray-900 min-h-screen font-sans">
            {/* About Section */}
            <section className="max-w-7xl mx-auto py-20 px-6 md:px-16">
                <div className="flex flex-col md:flex-row items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="md:w-1/2"
                    >
                        <img src={aboutImage} alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="md:w-1/2 mt-8 md:mt-0 md:pl-12"
                    >
                        <h2 className="text-4xl font-bold mb-6">About Us</h2>
                        <p className="text-lg leading-relaxed text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto py-20 px-6 md:px-16">
                <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <motion.div
                                className="md:w-1/2"
                                initial={initialAnimations[index]} // Unique initial animation
                                whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }} // Reset on view
                                whileHover={hoverAnimations[index]} // Unique hover animation
                                transition={{ duration: 0.7 }}
                            >
                                <img src={service.img} alt={service.title} className="w-full h-auto rounded-lg shadow-lg" />
                            </motion.div>
                            <div className="md:w-1/2 md:px-12 mt-8 md:mt-0">
                                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
                                <TypeAnimation
                                    sequence={[
                                        service.description[0], 2000,
                                        service.description[1], 2000,
                                        service.description[2], 2000,
                                    ]}
                                    wrapper="p"
                                    speed={0}
                                    repeat={Infinity}
                                    className="text-lg leading-relaxed text-gray-700"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 bg-gray-100">
                <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                        >
                            <img src={member.img} alt={member.name} className="w-full h-56 object-cover" />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="max-w-7xl mx-auto py-20 px-6 md:px-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-4xl font-bold text-center mb-6"
                >
                    Get in Touch
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg text-center mb-6"
                >
                    Have questions or need help? Reach out to us!
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-between"
                >
                    <div className="text-center md:text-left">
                        <p className="text-lg mb-2">
                            <strong>Email:</strong>
                            <a href="mailto:support@businessbasket.in" className="underline hover:text-blue-500 transition duration-300">
                                support@businessbasket.in
                            </a>
                        </p>
                        <p className="text-lg">
                            <strong>Phone:</strong>
                            <a href="tel:+917503677953" className="underline hover:text-blue-500 transition duration-300">
                                +91 7503677953
                            </a>
                        </p>
                    </div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:text-blue-500 text-2xl transition duration-300"
                        >
                            <FaFacebookF />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-900 hover:text-blue-500 text-2xl transition duration-300"
                        >
                            <FaTwitter />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
        </div>
    );
};

export default Home;