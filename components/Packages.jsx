import { motion } from "framer-motion";

export default function Packages() {
  const packages = [
    { name: "3 Hall" },
    { name: "2 Venue" },
    { name: "3 Floor" },
    { name: "12 Rooms" },
    { name: "Event Decor & Styling" },
    { name: "Photography & Videography" },
    { name: "Wedding Planners" },
    { name: "Catering" },
    { name: "Lawn" },
    { name: "Music Set" },
    { name: "Dance Floor" }
  ];

  return (
    <motion.section 
      className="mb-12" 
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-center text-gold mb-6">What we Have</h2>
      <div className="grid gap-0">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className="bg-white p-2 shadow-md border border-gray-300"
            whileHover={{ scale: 1.05 }}
          >
            <ul>
              <li className="text-xl font-semibold text-gray-700">{pkg.name}</li>
            </ul>
          </motion.div>
        ))}
      </div>
      <h3 className="text-2xl font-semibold text-gold ">(Everything is Customizable)</h3>
    </motion.section>
  );
}