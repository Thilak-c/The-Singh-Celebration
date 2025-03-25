'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import AnimatedImage from '@/components/Animated-Component';
import AnimatedImage_wifi from '@/components/Animated-Component-wifi';
import AnimatedImage_Air from '@/components/Animated-Component-air';


export default function Home() {
  const images = [
    "bg/img-7.jpg",
    "https://assets.minted.com/image/upload/f_auto,q_auto/Minted_Onsite_Assets/2022/LP/IndianWeddingTraditions_220831_Image01.jpg",
    "https://images.herzindagi.info/image/2024/Feb/buffet-system.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2024/5/419704740/PH/BG/SZ/56917177/wedding-catering-services.jpeg",
    "https://media-api.xogrp.com/images/f4570601-a1e6-4802-86fb-ad9e988066fe~rs_768.h",
    "https://content.jdmagicbox.com/comp/patna/p2/0612px612.x612.220119155024.l5p2/catalogue/pr-events-and-wedding-planner-kankarbagh-patna-banquet-halls-2vfq961262.jpg",
    "bg/img-4.jpg",
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <main className="relative">
        {/* Background Image */}
        <div
          className="relative h-[100vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images[4]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-30"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute top-1/1 pb-[300px] left-[45%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
          <h1 className="text-3xl  w-[1000px] flex items-center font-light mb-[2px]"><p className="h-[1.2px] w-[70px] mx-10 bg-white font-thin"></p>The Singh Celebration, Patna</h1>
          {/* <p className="text-lg mb-8">
            Experience luxury and comfort at its finest. Book your perfect stay now.
          </p> */}
          {/* <div className="mt-6 bg-white text-black p-8 rounded-lg shadow-lg inline-block">
            <form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="date"
                className="border rounded-lg px-4 py-2 w-full md:w-auto"
                defaultValue="2025-01-27"
              />
              <input
                type="date"
                className="border rounded-lg px-4 py-2 w-full md:w-auto"
                defaultValue="2025-01-28"
              />
              <select className="border rounded-lg px-4 py-2 w-full md:w-auto">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
              </select>
              <select className="border rounded-lg px-4 py-2 w-full md:w-auto">
                <option>1 Room</option>
                <option>2 Rooms</option>
              </select>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
                Book Now
              </button>
            </form>
          </div> */}
        </div>
      </main>






      {/* The hotel Section*/}
      <div>

        <main className="min-h-screen bg-gray-100">
          <p className="w-full h-[2px] mt-[60px] bg-[#ad8b3a] bg-opacity-50">

          </p>
          <h1>

          </h1>
          <div className="m-[100px] pt-[50px] flex gap-6">
            <div className="w-1/2 items-center flex">
              <div className='w-[500px] self-center  justify-center justify-items-center items-center'>
                <h2 className='text-[#000] opacity-80 flex items-center content-center font-light text-2xl'>
                  {/* <p className='w-[100px] h-[2px] items-center mx-4 bg-[#ad8b3a]'></p>  */}
                  Comfortable
                  <span className='text-[#ad8b3a] mx-2'>
                    Rooms
                  </span>
                  for Every Occasio
                </h2>
                <p className='text-[#000] opacity-80 mt-4 text-center'>
                  At The Singh Celebration, we take pride in offering beautifully furnished rooms that guarantee your comfort and convenience. Whether you're celebrating with us or enjoying a getaway, our rooms provide a peaceful retreat after a busy day. Our rooms are designed to cater to your every need, ensuring you have a memorable stay with us.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className='w-[500px]'>


                <AnimatedImage /></div>
            </div>
          </div>

          <div className='w-full flex justify-center items-center'>
            <ol className=' text-black text-lg'>
              <li className='flex'>
                <p className='text-[#ad8b3a] font-bold mx-2 flex'>

                  Deluxe Room:
                </p>
                A cozy retreat with all the essential amenities for a relaxing stay.</li>
              <li className='flex my-6'>
                <p className='text-[#ad8b3a] font-bold mx-2 flex'>

                  Family Suite:
                </p>

                Spacious and perfect for families, with added comfort and privacy.</li>
              <li className='flex'>
                <p className='font-bold text-[#ad8b3a] mx-2 flex'>

                  Luxury Room:
                </p>

                Elegant design with premium features for a more luxurious experience.</li>
            </ol>
          </div>
        </main >
        <main className="min-h-screen bg-gray-100">
          {/* <p className="w-full h-[2px] mt-[60px] bg-[#ad8b3a] bg-opacity-50">

</p> */}
          <h1>

          </h1>
          <div className="m-[100px] pt-[50px] flex gap-6">
            <div className="w-1/2">
              <div className='animated-image w-[500px]'>


                <AnimatedImage_Air />
              </div>
            </div>
            <div className="w-1/2 items-center flex">
              <div className='w-[500px] self-center  justify-center justify-items-center items-center'>
                <h2 className='text-[#000] opacity-80 flex items-center content-center font-light text-2xl'>
                  {/* <p className='w-[100px] h-[2px] items-center mx-4 bg-[#ad8b3a]'></p>  */}
                  Stay
                  <span className='text-[#ad8b3a] mx-2'>
                    Cool
                  </span>
                  and Comfortable
                </h2>
                <p className='text-[#000] opacity-80 mt-4 text-center'>
                  At The Singh Celebration, we prioritize your comfort in every way. Our rooms are equipped with modern air conditioning systems to ensure a pleasant and relaxing stay, no matter the season. Whether you're visiting during the warm summers or cooler months, our climate-controlled rooms provide the perfect temperature for your comfort.
                </p>
              </div>
            </div>
          </div>
        </main >






        <main className="min-h-screen bg-gray-100">
          {/* <p className="w-full h-[2px] mt-[60px] bg-[#ad8b3a] bg-opacity-50">

</p> */}
          <h1>

          </h1>
          <div className="m-[100px] pt-[50px] flex gap-6">

            <div className="w-1/2 items-center flex">
              <div className='w-[500px] self-center  justify-center justify-items-center items-center'>
                <h2 className='text-[#000] opacity-80 flex items-center content-center font-light text-2xl'>
                  {/* <p className='w-[100px] h-[2px] items-center mx-4 bg-[#ad8b3a]'></p>  */}
                  Stay Connected with Free High-Speed
                  <span className='text-[#ad8b3a] mx-2'>
                    Wi-Fi
                  </span>

                </h2>
                <p className='text-[#000] opacity-80 mt-4 text-center'>
                  At The Singh Celebration, we understand the importance of staying connected. That’s why all our rooms come with free high-speed Wi-Fi to ensure you’re always online, whether you’re working, streaming, or keeping in touch with loved ones.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <div className='animated-image w-[500px]'>


                <AnimatedImage_wifi />
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>


            <ol className=' text-black text-lg'>
              <li className='flex'>
                <p className='text-[#ad8b3a] font-bold mx-2 flex'>

                  Fast and Reliable:
                </p>
                Stream movies, attend virtual meetings, or browse seamlessly.</li>
              <li className='flex my-6'>
                <p className='text-[#ad8b3a] font-bold mx-2 flex'>

                  Unlimited Access:
                </p>

                Enjoy 24/7 internet access throughout your stay.</li>
              <li className='flex'>
                <p className='font-bold text-[#ad8b3a] mx-2 flex'>

                  Multiple Devices::
                </p>

                Connect your phone, laptop, and tablet without restrictions.</li>
            </ol>
          </div>
        </main >


      </div>
      <div className='w-full flex animate-bounce justify-center mx-auto'>

        <button className="bg-yellow-500 text-white px-4 py-2 justify-self-center  hover:bg-yellow-600">
          Book a Stay
        </button>
      </div>

      {/* Image Gallery Section */}
      < section className="container mx-auto px-6 py-12" >
        <h2 className="text-3xl font-bold text-black text-center mb-8">Explore Our Past Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.slice(1).map((img, index) => (
            <div
              key={index}
              className="relative h-64 w-full overflow-hidden rounded-lg shadow-md bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </section >
    </div >
  );
}
