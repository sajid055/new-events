"use client";

import { motion, type Variants } from "framer-motion";

const categories = [
  {
    title: "Robotic Lab + Expert Trainers + Kits",
    description:
      "Complete Robotics Solution with lab setup, expert trainers, and grade-wise robotics kits for schools.",
    image:
      "https://plus.unsplash.com/premium_photo-1682124431132-76331d407d4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Expert Trainers + Kits",
    description:
      "Integrated package combining expert trainers with comprehensive robotics hardware kits.",
    image:
      "https://media.istockphoto.com/id/1627053398/photo/the-young-female-electrician-engineer-holding-the-motherboard-prototype-with-a-torch-in-her.jpg?s=2048x2048&w=is&k=20&c=X6SRpqsDtaglXTh_E042aeF0zx6Iab2LksGMGc_SGKk=",
  },
  {
    title: "Expert Trainers Only",
    description:
      "Professional training support for institutions that already have robotics labs.",
    image:
      "https://plus.unsplash.com/premium_photo-1663089698544-dad4b805ebaf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFRyYWluZXJzJTIwcm9ib3RpY3N8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Robotics Workshop & Training Program",
    description:
      "Comprehensive robotics workshops with hands-on experience for students.",
    image:
      "https://images.unsplash.com/photo-1755053757912-a63da9d6e0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFJvYm90aWNzJTIwV29ya3Nob3AlMjAlMjYlMjBUcmFpbmluZyUyMFByb2dyYW18ZW58MHx8MHx8fDA%3D",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function Category() {
  return (
    <section id="categories" className="relative w-full py-20 sm:py-24 lg:py-28 bg-gradient-to-b from-[#e5edfc] via-[#a4bafc] to-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 
                      w-[600px] h-[600px] bg-blue-400/20 blur-[120px] rounded-full -z-10" />

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.25]
        bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),
        linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
        bg-[size:40px_40px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold 
                         bg-gradient-to-r from-blue-600 to-indigo-500 
                         bg-clip-text text-transparent">
            Explore Robotics Programs
          </h2>

          <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
            Discover our robotics learning solutions designed for schools and students.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {categories.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group rounded-2xl overflow-hidden bg-white 
                         border border-gray-200 shadow-sm 
                         hover:shadow-xl transition duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover 
                             group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">

                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-900">
                  Learn More
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
