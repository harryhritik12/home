import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BookAppointment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://development-services-backend.onrender.com/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to book appointment");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-pink-600 p-6">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="md:w-1/2 bg-gradient-to-br from-purple-900 to-pink-700 p-8 flex flex-col justify-center text-white">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold"
          >
            Let's discuss something <span className="text-pink-300">cool</span> together
          </motion.h2>
          <p className="mt-4">Contact us for expert solutions in web development, mobile app development, and more.</p>
          <div className="mt-6 space-y-4">
            <p className="flex items-center space-x-2">📧 info@businessbasket.in</p>
            <p className="flex items-center space-x-2">📞 8700605125</p>
            <p className="flex items-center space-x-2">📍 Business Basket Infratech Private Limited, New Delhi</p>
          </div>
        </div>
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Book an Appointment</h2>
          <motion.form 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit} 
            className="space-y-4 mt-6"
          >
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-sm" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-sm" />
            <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-sm" />
            <select name="service" value={formData.service} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-sm">
              <option value="">Select Service</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Website Creation">Website Creation</option>
              <option value="WebGIS - Land Management">WebGIS - Land Management</option>
            </select>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-sm" />
              <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-sm" />
            </div>
            <textarea name="message" placeholder="Additional Details" value={formData.message} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-sm"></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};

export default BookAppointment;
