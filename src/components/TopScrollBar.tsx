"use client";

import { motion } from "framer-motion";

export default function TopScrollBar() {
  const items = [
    "✨Smart Event Management",
    "📆 Book Venues Instantly",
    "🎟️ Seamless Ticketing & Payments",
    "💬 Engage Attendees Effortlessly",
    "📊 Real-Time Analytics Dashboard",
    "🤖 AI-Powered Insights",
    "🌐 Hybrid & Virtual Event Tools",
    "📈 Grow Your Audience",
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-100">
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 22,
          ease: "linear",
        }}
      >
        {[0, 1].map((track) => (
          <div
            key={track}
            aria-hidden={track === 1}
            className="flex items-center gap-8 py-2 pr-8 text-xs text-gray-600 md:gap-12 md:pr-12 md:text-sm"
          >
            {items.map((item, index) => (
              <span key={`${track}-${index}`} className="flex-shrink-0">
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
