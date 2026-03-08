 "use client";

import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-black text-gray-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LEFT SECTION */}
          <motion.div whileHover={{ y: -4 }}>
            <h2 className="text-xl font-semibold text-white">
              MiraiRobotics
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-sm">
              Building the future of robotics with innovative solutions and cutting-edge
              technology. Empowering learners through hands-on AI, coding, and robotics education.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <motion.div key={i} whileHover={{ y: -2, scale: 1.05 }}>
                  <Icon className="w-5 h-5 cursor-pointer text-gray-400 hover:text-white transition" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* COMPANY */}
          <motion.div whileHover={{ y: -4 }}>
            <h3 className="text-white font-semibold text-base">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">About</li>
              <li className="hover:text-white cursor-pointer transition">Careers</li>
              <li className="hover:text-white cursor-pointer transition">Contact</li>
              <li className="hover:text-white cursor-pointer transition">AI Zone</li>
            </ul>
          </motion.div>

          {/* SOLUTIONS */}
          <motion.div whileHover={{ y: -4 }}>
            <h3 className="text-white font-semibold text-base">Solutions</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">Models</li>
              <li className="hover:text-white cursor-pointer transition">Robotics Lab Setup</li>
              <li className="hover:text-white cursor-pointer transition">Training Programs</li>
              <li className="hover:text-white cursor-pointer transition">Hardware Kits</li>
              <li className="hover:text-white cursor-pointer transition">Workshops</li>
            </ul>
          </motion.div>

          {/* RESOURCES */}
          <motion.div whileHover={{ y: -4 }}>
            <h3 className="text-white font-semibold text-base">Resources</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer transition">Help Center</li>
              <li className="hover:text-white cursor-pointer transition">Documentation</li>
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
            </ul>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">

          <p className="text-gray-400 text-center sm:text-left">
            © 2026 MiraiEvents. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">
            <span className="hover:text-white cursor-pointer transition">
              Terms and Conditions
            </span>
            <span className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </span>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
