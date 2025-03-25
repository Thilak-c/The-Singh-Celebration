"use client"
import { useState } from "react";
import React from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage("Data submitted successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setResponseMessage(data.error || "Failed to submit data.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    }
  };


  return (
    <div className="bg-gray-900 w-full text-white">
      {/* Header Section */}
     

      {/* Contact Section */}
      <div className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
        {/* Contact Form */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-400">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="peer w-full px-4  py-2 text-gray-200 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="peer w-full px-4 py-2 text-gray-200 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="peer w-full px-4 py-2 text-gray-200 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="peer w-full px-4 py-2 text-gray-200 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          {responseMessage && (
            <p className="mt-4 text-sm text-green-600">{responseMessage}</p>
          )}
        </div>

        {/* Contact Details */}
        <div className="space-y-8">
          <div className="flex items-center space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition transform hover:-translate-y-1">
            <div className="text-blue-400 text-3xl  animate-bounce">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Our Address</h3>
              <p className="text-gray-400">254, Patliputra Colony, Patna, Bihar 800013</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition transform hover:-translate-y-1">
            <div className="text-blue-400 text-3xl animate-spin">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-gray-400">(+91) 7979962614</p>
              <p className="text-gray-400">(+91) 9304991017</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition transform hover:-translate-y-1">
            <div className="text-blue-400 text-3xl animate-bounce">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-gray-400">thesinghcelebration@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14390.542002950493!2d85.11681399999999!3d25.61702565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590039041801%3A0xa2254f9327d16bb5!2sThe%20Singh%20Celebration%20Guest%20House!5e0!3m2!1sen!2sin!4v1735849124930!5m2!1sen!2sin"
          width="100%"
          height="400"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default ContactUs;
