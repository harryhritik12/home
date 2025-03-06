import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import process from "../assets/process1.jpg";
import team1 from "../assets/team/team.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";
import aboutImage from "../assets/process1.jpg";

const Home = () => {
    const services = [
        { title: "Development Services", img: process, description: "We offer top-notch development services to build scalable and efficient applications." },
        { title: "Financial Services", img: process, description: "Our financial services ensure your business stays financially healthy and compliant." },
        { title: "Construction Services", img: process, description: "We provide reliable construction services for residential and commercial projects." },
    ];

    const teamMembers = [
        { name: "Robert", role: "Principal Designer", img: team1 },
        { name: "Patton", role: "Senior Designer", img: team2 },
        { name: "Virat", role: "Project Manager", img: team3 },
        { name: "Prabhat", role: "Art Advisor", img: team4 },
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
                            <div className="md:w-1/2">
                                <img src={service.img} alt={service.title} className="w-full h-auto rounded-lg shadow-lg" />
                            </div>
                            <div className="md:w-1/2 md:px-12 mt-8 md:mt-0">
                                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
                                <p className="text-lg leading-relaxed text-gray-700">{service.description}</p>
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

            {/* Modern Contact Us Section */}
            <section id="contact" className="max-w-7xl mx-auto py-20 px-6 md:px-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-10 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all"
                >
                    <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
                    <p className="text-lg text-center mb-6">
                        Have questions or need help? Reach out to us!
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left">
                            <p className="text-lg mb-2"><strong>Email:</strong> 
                                <a href="mailto:support@businessbasket.in" className="underline"> support@businessbasket.in</a>
                            </p>
                            <p className="text-lg"><strong>Phone:</strong> 
                                <a href="tel:+917503677953" className="underline"> +91 7503677953</a>
                            </p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-2xl transition duration-300">
                                <FaFacebookF />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-2xl transition duration-300">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
