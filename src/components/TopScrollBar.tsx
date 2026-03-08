"use client";

import { motion } from "framer-motion";

export default function TopScrollBar() {
  const items = [
    "📅 Book Venues Instantly",
    "🎟️ Seamless Ticketing & Payments",
    "💬 Engage Attendees Effortlessly",
    "📊 Real-Time Analytics Dashboard",
    "🤖 AI-Powered Insights",
    "🌍 Hybrid & Virtual Event Tools",
    "🚀 Grow Your Audience",
  ];

  const duplicatedItems = [...items, ...items];

  return (
    <div className="w-full bg-gray-100 overflow-hidden">
      <motion.div
        className="flex items-center gap-8 md:gap-12 py-2 text-xs md:text-sm text-gray-600 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 18,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, index) => (
          <span key={index} className="flex-shrink-0">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}