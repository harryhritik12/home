import React from "react";
import { motion } from "framer-motion";

// Import team images
import team1 from "../assets/team/team.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";

const teamMembers = [
    { name: "Robert", role: "Principal Designer", img: team1 },
    { name: "Patton", role: "Senior Designer", img: team2 },
    { name: "Virat", role: "Project Manager", img: team3 },
    { name: "Prabhat", role: "Art Advisor", img: team4 },
];

const Team = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-20 bg-gray-100">
            {/* Meet the Team Section */}
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
    );
};

export default Team;
