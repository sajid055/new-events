"use client";

import { CheckCircle2, Zap, Users, ArrowDown } from "lucide-react";
import Category from "./Category";
import Learning from "./Learning";
import Resource from "./Resource";
import Articles from "./Articles";
import Contact from "./Contact";
import { smoothScrollToId } from "@/utils/smoothScroll";

const highlights = [
  { icon: CheckCircle2, text: "Easy Setup" },
  { icon: Zap, text: "Real-time Analytics" },
  { icon: Users, text: "10K+ Happy Clients" },
];

export default function Features() {
  const scrollToSection = (id: string) => {
    smoothScrollToId(id);
  };

  return (
    <>
      {/* ================= FEATURES ================= */}
      <section
        id="features"
        className="w-full bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-20 sm:py-24">
          {/* TITLE */}
          <div className="text-center max-w-5xl mx-auto">
            <h2
              className="
              font-extrabold
              text-gray-900
              leading-tight

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              "
            >
              Simplify every event —
            </h2>

            <h2
              className="
              mt-2
              font-extrabold
              leading-tight

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl

              bg-gradient-to-r
              from-blue-600
              via-indigo-500
              to-cyan-500
              bg-clip-text
              text-transparent
              "
            >
              from planning to success
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
              mt-8
              text-gray-600
              leading-relaxed
              text-base
              sm:text-lg
              max-w-2xl
              mx-auto
              "
            >
              MiraiRobotics tailors its products, curricula, and services for
              the general public through initiatives in schools, government,
              corporate social responsibility, and impact programs. These
              programs aim to achieve desired outcomes and adhere to global
              educational standards established by modern policies.
            </p>
          </div>

          {/* HIGHLIGHTS */}
          <div
            className="
            mt-14 sm:mt-16
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4 sm:gap-6
            sm:flex-wrap
            "
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  bg-white
                  px-6 sm:px-8
                  py-4
                  rounded-full
                  shadow-md
                  border
                  border-blue-100
                  hover:shadow-lg
                  transition
                  w-full sm:w-auto
                  "
                >
                  <Icon className="text-blue-600 w-5 h-5" />

                  <span className="font-medium text-gray-700">{item.text}</span>
                </div>
              );
            })}
          </div>

          {/* CTA BUTTON */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => scrollToSection("categories")}
              className="
              flex
              items-center
              justify-center
              gap-3

              bg-gradient-to-r
              from-blue-600
              to-teal-500

              text-white
              font-semibold

              px-5 sm:px-6
              py-4

              rounded-full
              shadow-lg
              hover:shadow-xl

              transition-all
              duration-300

              hover:scale-105
              active:scale-95
              w-full sm:w-auto
              "
            >
              Learn More About MiraiEvents
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <Category />
      <Learning />
      <Resource />
      <Articles />
      <Contact />
    </>
  );
}
