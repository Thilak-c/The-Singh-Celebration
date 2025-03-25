import { motion } from "framer-motion";
// import { FaArrowDown } from "react-icons/fa";
import { FaGlassCheers, FaCamera, FaUtensils, FaPalette } from "react-icons/fa";

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

export default function Services() {
  return (
    <section className="py-0 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-[#ad8b3a] font-light mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-100 rounded-lg shadow-sm"
            >
              <div className="text-primary text-[#ad8b3a] ">{service.icon}</div>
              <h3 className="text-xl text-[#ad8b3a] font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    






  );
}