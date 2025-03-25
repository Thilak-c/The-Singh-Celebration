import { motion } from "framer-motion";

export default function CTA() {
  return (
    <motion.section className="text-center mt-12" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
      <h2 className="text-3xl font-bold text-gold mb-4">Ready to Host Your Event?</h2>
      <p className="text-gray-600 mb-4">Contact us now to book The Singh Celebration for your special occasion.</p>
      <motion.a
        href="tel:+917979962614"
        className="bg-gold px-6 py-3 rounded font-bold text-white inline-block"
        whileHover={{ scale: 1.1 }}
      >
        Call Now
      </motion.a>
    </motion.section>
  );
}