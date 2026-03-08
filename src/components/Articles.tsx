"use client";
import React, { useState } from "react";
import { motion, type Variants } from "framer-motion";

const articles = [
  {
    title: "Transforming Education with AI & Robotics",
    description:
      "MiraiRobotics focuses on empowering students with hands-on learning in Artificial Intelligence, Coding, and Robotics. The goal is to prepare young innovators for future technologies through practical education.",
  },
  {
    title: "Future of Education: Hands-on Technology Learning",
    description:
      "Traditional classroom learning is evolving. Students understand technology better when they build projects, robots, and applications themselves rather than only studying theory.",
  },
  {
    title: "Why Robotics Labs are Important for Schools",
    description:
      "Modern robotics labs help students explore coding, automation, sensors, and engineering concepts. These labs upgrade traditional ICT classrooms into future-ready innovation spaces.",
  },
  {
    title: "Developing Future-Ready Skills",
    description:
      "AI, Machine Learning, Data Science, and Robotics are shaping the future workforce. Introducing these technologies at school level helps students develop creativity, critical thinking, and problem-solving skills.",
  },
];

export default function Articles() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX * 0.02;
    const y = e.clientY * 0.02;
    setPos({ x, y });
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
    <div
      id="articles"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-gray-50 py-16 px-6 overflow-hidden"
    >
      {/* Mouse Follow Square Grid Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(100,116,139,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.35) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: `translate(${pos.x}px, ${pos.y}px)`,
          transition: "transform 0.1s linear",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-500 via-cyan-700 to-yellow-200 bg-clip-text text-transparent"
        >
          Articles & Insights
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
        >
          Explore the latest insights on Artificial Intelligence, Robotics,
          Coding, and future-ready education. These articles highlight how
          technology-driven learning can empower the next generation of
          innovators.
        </motion.p>

        {/* Articles Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {articles.map((article, index) => (
            <motion.div
              variants={item}
              whileHover={{ y: -8 }}
              key={index}
              className="group relative bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              {/* dotted hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle,_rgba(0,0,0,0.1)_1px,_transparent_1px)] bg-[size:20px_20px] animate-pulse"></div>
              </div>

              <h2 className="text-xl font-semibold text-black mb-3 relative z-10">
                {article.title}
              </h2>

              <p className="text-gray-600 relative z-10">
                {article.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
