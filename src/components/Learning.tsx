"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Target,
  Sparkles,
  Users,
  Brain,
  Palette,
  Rocket,
  ArrowDown,
} from "lucide-react";
import { smoothScrollToElement } from "@/utils/smoothScroll";

const features = [
  {
    icon: Target,
    title: "Designed for K–12 learners and beginners",
    description:
      "Helping school students and beginners start their robotics and coding journey.",
  },
  {
    icon: Sparkles,
    title: "Interactive, project-based learning experiences",
    description:
      "Learn by building real projects and solving practical problems.",
  },
  {
    icon: Users,
    title: "Integrates coding, robotics, AI, and STEM principles",
    description: "Learn coding, robotics, and AI in one future-ready program.",
  },
  {
    icon: Brain,
    title: "Machine Learning Researcher",
    description:
      "Advance our AI capabilities through innovative research and experimentation.",
  },
  {
    icon: Palette,
    title: "Product Designer",
    description:
      "Design intuitive user experiences for our robotics platforms and interfaces.",
  },
  {
    icon: Rocket,
    title: "DevOps Engineer",
    description:
      "Build and maintain scalable infrastructure for our robotics cloud services.",
  },
];

const videos = [
  { src: "/video/robotics1.mp4", title: "Beginner Robotics Learning" },
  { src: "/video/robotics2.mp4", title: "Hands-On Robotics Projects" },
  { src: "/video/robotics3.mp4", title: "Coding, AI & STEM Integration" },
  { src: "/video/robotics4.mp4", title: "Machine Learning Exploration" },
  { src: "/video/robotics5.mp4", title: "Designing Robotics Experiences" },
];

export default function LearningSection() {
  const [current, setCurrent] = useState(0);
  const headingRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToVideoHeading = () => {
    smoothScrollToElement(headingRef.current);
  };

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      id="learning"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#f8fafc] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Power
            </span>

            <span className="text-black"> Your Event with </span>

            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              MiraiEvent
            </span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            At MiraiRobotics, we believe learning should be creative,
            empowering, and practical. We make technology education fun and
            accessible for kids and students — helping them Learn, Build, and
            Lead in robotics, coding, and AI.
          </p>
        </motion.div>

        {/* Cards */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative overflow-hidden group bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-[0_0_60px_rgba(59,130,246,0.55)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-blue-600">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Button */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={scrollToVideoHeading}
            className="cursor-pointer flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg hover:scale-105 transition-all"
          >
            Explore All Features
            <ArrowDown size={20} />
          </button>
        </motion.div>

        {/* VIDEO HEADING */}

        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Experience MiraiRobotics in Action
          </h2>

          <p className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Watch how students learn robotics, coding and AI by building real
            projects and exploring future technologies.
          </p>
        </motion.div>

        {/* VIDEO */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 max-w-4xl mx-auto relative"
        >
          <div className="overflow-hidden rounded-2xl md:rounded-3xl shadow-xl">
            <video
              key={videos[current].src}
              src={videos[current].src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Overlay Label */}

          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 w-full flex justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={videos[current].title}
                initial={{ y: 30, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: -30, opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl px-6 py-2 md:px-8 md:py-3 rounded-full text-center max-w-[90%]"
              >
                <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {videos[current].title}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Dots */}

        <div className="flex justify-center gap-2 md:gap-3 mt-6">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i ? "w-8 bg-blue-500" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        <p className="text-center text-gray-500 mt-3 text-xs md:text-sm">
          Click the dots to navigate between features
        </p>
      </div>
    </motion.section>
  );
}
