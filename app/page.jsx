"use client";
import { useState, useEffect, lazy, Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import { FaMoon, FaSun, FaArrowDown, FaGlassCheers, FaCamera, FaUtensils, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedImage from "@/components/Animated-Component";
import AnimatedImage_wifi from "@/components/Animated-Component-wifi";
import AnimatedImage_Air from "@/components/Animated-Component-air";
import Services from "@/components/services.jsx";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Packages from "@/components/Packages";

// Lazy load heavy components
const Gallery = lazy(() => import("@/components/Gallery"));

const images = [
  "/bg/img-8.jpg",
  "/bg/img-6.jpg",
  "/bg/img-4.jpg",
  "/bg/img-5.jpg",
];

const services = [
  {
    title: "Wedding Planning",
    description: "From intimate ceremonies to grand celebrations, we handle every detail.",
    icon: <FaGlassCheers className="text-4xl mb-4" />,
  },
  {
    title: "Catering & Bar Services",
    description: "Exquisite menus tailored to your taste, with a variety of cuisines.",
    icon: <FaUtensils className="text-4xl mb-4" />,
  },
  {
    title: "Event Decor & Styling",
    description: "Transform the venue to match your vision with our expert decorators.",
    icon: <FaPalette className="text-4xl mb-4" />,
  },
  {
    title: "Photography & Videography",
    description: "Capture every moment with our professional photography team.",
    icon: <FaCamera className="text-4xl mb-4" />,
  },
];

export default function Home() {
  const [wedding, setWedding] = useState(true);
  const [hotel, setHotel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      {/* SEO and Meta Tags */}
      <Head>
        <title>The Singh Celebration Guest House | Best Hotels in Patna</title>
        <meta
          name="description"
          content="The Singh Celebration Guest House offers the best hotels and guest houses in Patna. Affordable, comfortable, and top-rated accommodations for your stay."
        />
        <meta
          name="keywords"
          content="hotels in Patna, guest houses in Patna, best hotels in Patna, affordable hotels in Patna"
        />
        <link rel="canonical" href="https://thesinghcelebration.in/" />
      </Head>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "The Singh Celebration Guest House",
            description: "A premier venue for unforgettable weddings, receptions, and events.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "254, Patliputra Colony, Patna 800013, Bihar",
              addressLocality: "Patna",
              addressRegion: "Bihar",
              postalCode: "800013",
              addressCountry: "India",
            },
            telephone: "+91-79799-62614",
            image: "https://thesinghcelebration.in/favicon.ico",
            priceRange: "₹1000 - ₹5000",
            amenities: ["Free Wi-Fi", "Air Conditioning", "Comfortable Rooms"],
          }),
        }}
      />

      {/* Dark Mode Toggle */}
      <button
        aria-label="Toggle Dark Mode"
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-white"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      {hotel && (
        <div className="bg-gray-100 min-h-screen dark:bg-white">
          {/* Hero Section */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative h-[100vh] w-full bg-cover bg-center transition-all duration-1000 ease-in-out">
              <Image
                src={images[currentImageIndex]}
                alt="The Singh Celebration Guest House"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            </div>

            {/* Content Overlay */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-4">
                The Singh Celebration
              </h1>
              <p className="text-lg sm:text-xl mb-8">Your Dream Venue in Patna</p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <FaArrowDown className="text-3xl mx-auto" />
              </motion.div>
            </motion.div>
          </motion.main>

          {/* Toggle Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="py-10 px-4 my-20 sm:px-6 bg-white dark:bg-white"
          >
            <div className="text-black dark:text-white opacity-75 text-xl h-0 z-20 flex justify-center gap-16">
              <div onClick={() => { setWedding(true); setHotel(false); }}>
                <button className="text-white mt-5 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2">
                  Wedding ?
                </button>
              </div>
              <div className="w-[1px] bg-white dark:bg-white"></div>
              <div onClick={() => { setHotel(true); setWedding(false); }}>
                <button className="text-white mt-5 bg-gradient-to-r from-[#ad8b3a] to-[#f5bf40] hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                  Hotels ?
                </button>
              </div>
            </div>

            {/* Hotel Details Section */}
            <section className="py-20 px-6 bg-white dark:bg-white">
              <div className="mx-auto text-center">
                <div className="gap-8">
                  {/* Comfortable Rooms */}
                  <div className="m-4 mt-14 sm:m-12 md:m-[100px] pt-6 flex flex-col lg:flex-row gap-6 items-center">
                    <div className="lg:w-1/2 text-center lg:text-left">
                      <h2 className="text-black dark:text-black opacity-80 font-light text-2xl">
                        Comfortable <span className="text-[#ad8b3a] mx-2">Rooms</span> for Every Occasion
                      </h2>
                      <p className="text-black dark:text-black opacity-80 mt-4">
                        At The Singh Celebration, we take pride in offering beautifully furnished rooms that guarantee your comfort and convenience.
                      </p>
                    </div>
                    <div className="lg:w-1/2">
                      <AnimatedImage />
                    </div>
                  </div>

                  {/* Air Conditioning */}
                  <div className="m-4 sm:m-12 md:m-[100px] pt-6 flex flex-col-reverse lg:flex-row gap-6 items-center">
                    <div className="lg:w-1/2">
                      <AnimatedImage_Air />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                      <h2 className="text-black dark:text-black opacity-80 font-light text-2xl">
                        Stay <span className="text-[#ad8b3a] mx-2">Cool</span> and Comfortable
                      </h2>
                      <p className="text-black dark:text-black opacity-80 mt-4">
                        Our rooms are equipped with modern air conditioning systems to ensure a pleasant and relaxing stay.
                      </p>
                    </div>
                  </div>

                  {/* Free Wi-Fi */}
                  <div className="m-4 sm:m-12 md:m-[100px] pt-6 flex flex-col lg:flex-row gap-6 items-center">
                    <div className="lg:w-1/2 text-center lg:text-left">
                      <h2 className="text-black dark:text-black opacity-80 font-light text-2xl">
                        Stay Connected with Free High-Speed <span className="text-[#ad8b3a] mx-2">Wi-Fi</span>
                      </h2>
                      <p className="text-black dark:text-black opacity-80 mt-4">
                        Enjoy free high-speed Wi-Fi to stay connected during your stay.
                      </p>
                    </div>
                    <div className="lg:w-1/2">
                      <AnimatedImage_wifi />
                    </div>
                  </div>
                </div>

                {/* Image Gallery Section */}
                <Suspense fallback={<div>Loading Gallery...</div>}>
                  <Gallery />
                </Suspense>

                {/* Call to Action */}
                <div className="w-full flex justify-center">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                    Book a Stay
                  </button>
                </div>
              </div>
            </section>
          </motion.section>
        </div>
      )}

      {wedding && (
        <>
          <div className="bg-gray-100 min-h-screen dark:bg-white">
            {/* Hero Section */}
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative h-[100vh] w-full bg-cover bg-center transition-all duration-1000 ease-in-out">
                <Image
                  src={images[currentImageIndex]}
                  alt="The Singh Celebration Guest House"
                  layout="fill"
                  objectFit="cover"
                  quality={75}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30"></div>
              </div>

              {/* Content Overlay */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute top-1/2 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6"
              >
                <h1 className="text-5xl md:text-6xl font-light mb-4">
                  The Singh Celebration
                </h1>
                <p className="text-xl mb-8">Your Dream Venue in Patna</p>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <FaArrowDown className="text-3xl mx-auto" />
                </motion.div>
              </motion.div>
            </motion.main>

            {/* Toggle Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="py-20 px-6 bg-gray-100 dark:bg-white"
            >
              <div className="text-black dark:text-white opacity-75 text-xl h-0 z-20 flex justify-center gap-16">
                <div onClick={() => { setWedding(true); setHotel(false); }}>
                  <button className="text-white mt-10 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2">
                    Wedding ?
                  </button>
                </div>
                <div className="w-[1px] bg-black dark:bg-white"></div>
                <div onClick={() => { setHotel(true); setWedding(false); }}>
                  <button className="text-white mt-10 bg-gradient-to-r from-[#ad8b3a] to-[#f5bf40] hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center me-2 mb-2">
                    Hotels ?
                  </button>
                </div>
              </div>

              <Services />

              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-light text-[#ad8b3a] mt-7 mb-6">
                  About The Singh Celebration
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Nestled in the heart of Patna, The Singh Celebration is a premier venue for weddings, parties, and corporate events.
                </p>
              </div>
            </motion.section>

            {/* Packages, Testimonials, Gallery, and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gray-100 dark:bg-white rounded-lg"
            >
              <div className="container mx-auto px-0 py-0">
                <Packages />
                <Testimonials />
                <Suspense fallback={<div>Loading Gallery...</div>}>
                  <Gallery />
                </Suspense>
                <CTA />
              </div>
            </motion.div>
          </div>

          {/* Google Map */}
          <div className="relative">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14390.542002950493!2d85.11681399999999!3d25.61702565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed590039041801%3A0xa2254f9327d16bb5!2sThe%20Singh%20Celebration%20Guest%20House!5e0!3m2!1sen!2sin!4v1735849124930!5m2!1sen!2sin"
              width="100%"
              height="400"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </>
      )}
    </>
  );
}