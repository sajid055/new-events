"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import LoginModal from "./LoginModal";
import { smoothScrollToId } from "@/utils/smoothScroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Scroll Detect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Scroll to section */
  const scrollToSection = (id: string) => {
    smoothScrollToId(id);
  };

  const openLoginModal = () => {
    setIsLoginOpen(true);
    setIsOpen(false);
  };

  const goToContact = () => {
    scrollToSection("contact");
    setIsOpen(false);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  const navItems = [
    { name: "About", id: "features" },
    { name: "Categories", id: "categories" },
    { name: "Features", id: "learning" },
    { name: "Articles", id: "articles" },
    { name: "Resource", id: "resource" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/60 backdrop-blur-2xl shadow-lg border-b border-white/20"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo with Hover Bounce */}
            <motion.h1
              onClick={goToTop}
              whileHover={{
                scale: 1.04,
                y: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 5,
              }}
              className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent font-extrabold tracking-tight leading-none text-[1.8rem] sm:text-[2rem] md:text-[2.15rem]"
            >
              MiraiEvents
            </motion.h1>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">

              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="relative group font-medium text-gray-800 cursor-pointer"
                >
                  {item.name}

                  {/* Gradient Hover Underline */}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </button>
              ))}

              {/* Search */}
              <div className="flex items-center bg-white/70 backdrop-blur-lg border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                <Search size={16} className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search by Websites"
                  className="bg-transparent outline-none text-sm w-40 text-gray-500"
                />
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={openLoginModal}
                className="font-medium text-gray-800 hover:text-purple-600 cursor-pointer transition"
              >
                Log in
              </button>

              <button
                onClick={goToContact}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full hover:scale-105 transition-all duration-200 shadow-md cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden text-gray-800 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-16 left-0 w-full bg-white/90 backdrop-blur-2xl shadow-xl z-40 lg:hidden"
          >
            <div className="flex flex-col gap-4 p-6 text-gray-800">

              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="text-left py-2 hover:text-purple-600 transition cursor-pointer"
                >
                  {item.name}
                </button>
              ))}

              {/* Search */}
              <div className="flex items-center border rounded-full px-4 py-2 mt-2">
                <Search size={16} className="mr-2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none text-sm w-full"
                />
              </div>

              {/* Login */}
              <button
                onClick={openLoginModal}
                className="px-10 py-3 rounded-full border border-gray-300 bg-gray-100 font-semibold hover:bg-gray-200 transition cursor-pointer"
              >
                Log in
              </button>

              {/* Get Started */}
              <button
                onClick={goToContact}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-full hover:scale-105 transition cursor-pointer"
              >
                Get Started
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}

