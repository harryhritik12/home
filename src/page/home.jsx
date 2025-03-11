import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import team1 from "../assets/team/team.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";
import aboutImage from "../assets/process1.jpg";
import bannerImage from "../assets/Banner.jpg";
import { TypeAnimation } from "react-type-animation";

const outdoorImages = [
    require("../assets/outDoorServices/LandSurvey.jpg"),
    require("../assets/outDoorServices/Road&Highwaysurvey.jpg"),
    require("../assets/outDoorServices/TopographicSurvey.jpg"),
    require("../assets/outDoorServices/Utility.jpg"),
    require("../assets/outDoorServices/WaterPipelineSurvey.jpg"),
];

const indoorImages = [
    require("../assets/IndoorServices/Base-Map-Creation.jpg"),
    require("../assets/IndoorServices/DataAnalysis.jpg"),
    require("../assets/IndoorServices/Digitization.jpg"),
    require("../assets/IndoorServices/Geo-Ref.jpg"),
    require("../assets/IndoorServices/ImageryServices.jpg"),
];

const DevelopmentImages = [
    require("../assets/DevelopmentServices/Gis.jpg"),
    require("../assets/DevelopmentServices/Mobileapplication.jpg"),
    require("../assets/DevelopmentServices/WebApplication.jpg"),
    require("../assets/DevelopmentServices/Website.jpg"),
];

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    const [outdoorImage, setOutdoorImage] = useState(outdoorImages[0]);
    const [indoorImage, setIndoorImage] = useState(indoorImages[0]);
    const [DevelopmentImage, setDevelopmentImage] = useState(DevelopmentImages[0]);

    // Change Outdoor Services image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const randomImage = outdoorImages[Math.floor(Math.random() * outdoorImages.length)];
            setOutdoorImage(randomImage);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Change Indoor Services image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndoorImage = indoorImages[Math.floor(Math.random() * indoorImages.length)];
            setIndoorImage(randomIndoorImage);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Change Development Services image every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            const randomDevelopmentImage = DevelopmentImages[Math.floor(Math.random() * DevelopmentImages.length)];
            setDevelopmentImage(randomDevelopmentImage);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const services = [
        {
            title: "Indoor Services",
            img: indoorImage,
            description: [
                "Processing and enhancement of satellite and aerial imagery",
                "Digitization and feature extraction from scanned maps and CAD drawings",
                "Geo-referencing spatial data for accurate alignment with real-world coordinates",
                "Cadastral mapping for land ownership and boundary identification",
                "Base map creation with essential geographic elements",
                "Land base creation for urban planning and infrastructure development",
                "Land use and land cover mapping for environmental and resource management",
                "Preparation of land acquisition plans for infrastructure projects",
                "Data conversion across multiple formats (CAD to GIS, raster to vector, etc.)",
                "Spatial data analysis for decision-making and trend analysis",
            ],
        },
        {
            title: "Outdoor Services",
            img: outdoorImage, 
            description: [
                "Accurate Land & Cadastral Surveys for property mapping, legal documentation, and urban planning",
                "Utility, Gas, and Water Pipeline Surveys ensuring efficient infrastructure development and maintenance",
                "Advanced Drone, Topographic, and Road & Highway Surveys supporting smart city planning and transportation projects",
                "Consumer Indexing, Property Tax, and Census Surveys streamlining data collection for government and businesses",
                "Ground Truthing, POI verification, and Network & Asset Mapping for precise geospatial data management",
            ],
        },
        {
            title: "Development Services",
            img: DevelopmentImage,
            description: [
                "WebGIS solutions for Land Management enabling efficient geospatial data visualization and analysis",
                "Website Creation services ensuring modern, responsive, and user-friendly digital experiences",
                "Custom Web Applications tailored to industry-specific needs enhancing workflow automation and productivity",
                "Mobile Application development delivering scalable, high-performance solutions for seamless user engagement",
            ],
        },
    ];
    const teamMembers = [
        { name: "Robert", role: "Principal Designer", img: team1 },
        { name: "Patton", role: "Senior Designer", img: team2 },
        { name: "Virat", role: "Project Manager", img: team3 },
        { name: "Prabhat", role: "Art Advisor", img: team4 },
    ];

    // Unique animations for each service image on page load
    const initialAnimations = isMobile || prefersReducedMotion
        ? [{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }]
        : [
            { opacity: 0, x: -100, rotate: -10 },
            { opacity: 0, y: 100, scale: 0.8 },
            { opacity: 0, x: 100, rotate: 10 },
        ];

    // Unique animations for each service image on hover
    const hoverAnimations = isMobile || prefersReducedMotion
        ? {}
        : [
            { scale: 1.05, rotate: 5, transition: { type: "spring", stiffness: 300 } },
            { scale: 1.05, y: -10, transition: { type: "spring", stiffness: 300 } },
            { scale: 1.05, rotate: -5, transition: { type: "spring", stiffness: 300 } },
        ];

    return (
        <div className="bg-white text-gray-900 min-h-screen font-sans overflow-hidden">
            {/* Banner Section */}
            <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center"
            >
                <motion.img
                    src={bannerImage}
                    alt="Global Network"
                    className="w-full h-full object-cover brightness-50"
                    initial={{ scale: 1.3 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 4, ease: "easeOut" }}
                />
                <div className="absolute text-center text-white px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-extrabold drop-shadow-lg"
                    >
                        Connecting the World
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-lg md:text-2xl mt-4 drop-shadow-md"
                    >
                        Innovating Global Networks with Cutting-Edge Solutions
                    </motion.p>
                </div>
            </motion.div>

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
                        BUSINESS BASKET INFRATECH PVT. LTD, formerly Universal Map Solutions, specializes in Remote Sensing (RS), Geographic Information System (GIS), and Global Positioning System (GPS) technologies. We provide expertise in natural resource management, disaster management, risk assessment, land information systems, environmental studies, MIS, and urban planning.

Founded by highly qualified professionals, BUSINESS BASKET offers GIS, remote sensing, GPS, digital mapping, utility mapping, transport planning, consulting, and project management solutions. We serve as a cost-effective outsourcing partner and focus on capacity building through training programs. Our commitment to accuracy, quality data, and timely project delivery ensures long-term success.
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
                        className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                    >
                        <motion.div
                            className="md:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <img src={service.img} alt={service.title} className="w-full h-auto rounded-lg shadow-lg" />
                        </motion.div>
                        <div className="md:w-1/2 md:px-12 mt-8 md:mt-0">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
                            <TypeAnimation
                                sequence={[service.description.join(" ") + " ", 2000]}
                                wrapper="p"
                                speed={50}
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

        </div>
    );
};

export default Home;