"use client"
import React, { useState, useEffect } from "react";

// import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Gallery = () => {

  const [selectedIndex, setSelectedIndex] = useState(null); // Index of the currently selected image
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  const [images, setImages] = useState([]);
  if (images) {
    console.log(images);
  }
  useEffect(() => {
    async function fetchImages() {
      const response = await fetch('/api/get-images');
      const data = await response.json();
      setImages(data);
    }
    fetchImages();
  }, []);



  const openModal = (index) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPreviousImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  return (
    <div className="bg-white min-h-screen py-10 px-4">
      <h1 className="text-center text-4xl font-bold text-yellow-400 mb-10">
        Our Gallery
      </h1>

      <div>
        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-4">
          {images.map((url, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer"
              onClick={() => openModal(index)}
            >

              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="animate-fade-in object-cover w-full h-60 transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-2xl"
              onClick={closeModal}
            >

              &times;
            </button>

            {/* Zoomed Image */}
            <div className="relative">
              <img
                src={images[selectedIndex]}
                alt={`Zoomed Image ${selectedIndex + 1}`}
                className="max-w-full max-h-screen rounded-lg"
              />
            </div>

            {/* Left Navigation Arrow */}
            <button
              onClick={showPreviousImage}
              className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-5 text-white rounded-full p-3 hover:bg-opacity-15"
            >
              {`<`}
            </button>

            {/* Right Navigation Arrow */}
            <button
              onClick={showNextImage}
              className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-5 text-white rounded-full p-3 hover:bg-opacity-15"
            >
              {`>`}
            </button>
          </div>
        )}
      </div>
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
    </div>
  );
};

export default Gallery;
