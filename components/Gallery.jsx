import { motion } from "framer-motion";
export default function Gallery() {
  const images = [
    "/bg/img-6.jpg",
    "/bg/img-2.jpg",
    "/bg/img-5.jpg",
    "/bg/img-4.jpg",
    "/bg/img-7.jpg",
    "/bg/img-3.jpg"
  ];

  return (
    <section className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-gold mb-6">Event Gallery</h2>
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 grid md:grid-cols-3 gap-4 bg-gray-100 rounded-lg shadow-sm"
        >
          {images.map((src, index) => (

            <img key={index} src={src} alt={`Gallery Image ${index + 1}`} className="rounded-lg shadow-md w-full h-64 object-cover border border-gray-300" />
          ))}
        </motion.div>
      </div>
      <a href="/gallery">

      <button className="text-white mt-5 bg-gradient-to-r from-[#ad8b3a]  to-[#f5bf40] hover:bg-gradient-to-br focus:ring-4 focus:outline-none  dark:shadow-pink-[#f5bf40] font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        More pic ?
      </button>
      </a>
    </section>
  );
}
