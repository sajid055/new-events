import { Target, Users, Zap, Heart, ArrowDown } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { smoothScrollToId } from "@/utils/smoothScroll";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To revolutionize the robotics industry by creating intelligent, accessible, and innovative solutions that enhance human capabilities.",
  },
  {
    icon: Users,
    title: "Our Team",
    desc: "A diverse group of passionate engineers, designers, and innovators working together to push the boundaries of robotics and AI.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "We leverage cutting-edge technology and research to develop solutions that are advanced, practical, and user-friendly.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "We believe in ethical AI, transparency, and building technology that serves humanity with positive impact.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutCards() {
  const scrollToContact = () => {
    smoothScrollToId("contact");
  };

  return (
    <section id="resource" className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 md:py-28">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-gray-300 to-sky-100"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:40px_40px]"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-20"
        >
          <h2 className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-6xl">
            Mirai Robotics
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-relaxed text-black opacity-90 sm:text-lg">
            At Mirai Robotics, we&apos;re building the future of human-robot interaction.
            Our cutting-edge technology combines advanced AI, computer vision,
            and robotics to create intelligent systems that understand, learn,
            and adapt.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20 grid gap-6 sm:mb-24 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ scale: 1.05 }}
                className="flex min-h-[220px] flex-col rounded-xl bg-white p-6 shadow-lg transition duration-500 hover:shadow-2xl sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border">
                  <Icon className="h-6 w-6 text-gray-700" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="flex-grow text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-full max-w-[1600px] rounded-3xl border-4 border-blue-500 bg-white/80 px-5 py-10 text-center shadow-xl backdrop-blur-md sm:px-10 sm:py-14 md:px-20 md:py-16">
            <h3 className="mb-8 text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
              Want to explore more robotics resources?
            </h3>

            <button
              onClick={scrollToContact}
              className="mx-auto flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-105 sm:w-auto sm:px-10"
            >
              Get Started
              <ArrowDown size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
