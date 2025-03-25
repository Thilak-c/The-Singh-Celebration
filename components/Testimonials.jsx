
import { motion } from "framer-motion";
export default function Testimonials() {
  const reviews = [
    { name: "Rahul Sharma", text: "The Singh Celebration made my wedding unforgettable! Highly recommended." },
    { name: "Priya Verma", text: "Beautiful decorations and excellent service. Loved every moment!" }
  ];

  return (
    <motion.section className="mb-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <h2 className="text-3xl font-bold text-gold mb-6">What Our Clients Say</h2>
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-300"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-gray-600">"{review.text}"</p>
          <p className="text-gold font-semibold mt-2">- {review.name}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
  );
}
