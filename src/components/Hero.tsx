"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { ArrowDown } from "lucide-react";
import {
  useGLTF,
  useAnimations,
  Environment,
  Center,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { smoothScrollToId } from "@/utils/smoothScroll";

/* -------------------- Loader -------------------- */

function Loader() {
  useProgress();

  return (
    <Html center>
      <div className="flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-black border-t-gray-400 rounded-full animate-spin" />
      </div>
    </Html>
  );
}

/* -------------------- Robot -------------------- */

function RobotModel({
  isMobile,
  isTablet,
}: {
  isMobile: boolean;
  isTablet: boolean;
}) {
  const group = useRef<THREE.Group>(null);

  const { scene, animations } = useGLTF("/models/robot.glb");
  const { actions } = useAnimations(animations, group);

  const isMesh = (object: THREE.Object3D): object is THREE.Mesh => {
    return (object as THREE.Mesh).isMesh === true;
  };

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action?.reset().fadeIn(0.5).play();
      });
    }

    scene.traverse((child) => {
      if (isMesh(child)) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [actions, scene]);

  /* ✅ Desktop rotation only */

  useFrame(() => {
    if (!group.current || isMobile) return;
    group.current.rotation.y += 0.002;
  });

  const modelScale = isMobile ? 1.08 : isTablet ? 1.06 : 1.12;
  const modelY = isMobile ? -0.8 : isTablet ? -0.7 : -0.9;

  return (
    <Center>
      <primitive
        ref={group}
        object={scene}
        scale={modelScale}
        position={[0, modelY, 0]}
      />
    </Center>
  );
}

/* -------------------- Rotating Text -------------------- */

const words = ["AI & Coding", "Robotics", "Data Science", "ML & AI", "3D AR & VR"];

function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[60px] sm:h-[70px] md:h-[80px] lg:h-[100px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold block ml-auto w-fit
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          xl:text-7xl"
        >
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
            {words[index]}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* -------------------- Animation -------------------- */

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

/* -------------------- Hero Section -------------------- */

export default function Hero() {
  const [viewportWidth, setViewportWidth] = useState(1200);

  useEffect(() => {
    const updateViewport = () => setViewportWidth(window.innerWidth);
    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const isMobile = viewportWidth < 768;
  const isTablet = viewportWidth >= 768 && viewportWidth < 1024;

  const scrollToContact = () => {
    smoothScrollToId("contact");
  };

  return (
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center bg-[#f5f7fa] py-10 md:py-12">

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12">

        <div className="flex flex-col-reverse items-center gap-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">

          {/* LEFT TEXT */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center text-center lg:text-left max-w-2xl mx-auto lg:mx-0 lg:self-start"
          >

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-xs sm:text-sm font-medium w-fit max-w-full text-center mx-auto lg:mx-0"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Trusted by 10,000+ Event Organizers
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mt-6 font-bold text-gray-900 leading-tight
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              MiraiEvents <br />
              Management,
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-4">
              <RotatingText />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-0 text-gray-600 leading-relaxed
              text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0"
            >
              MiraiEvents all-in-one event management software simplifies event
              planning and elevates the attendee experience.
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="mt-8 px-8 py-4 bg-white rounded-full shadow-md text-gray-900 font-medium
              flex items-center gap-2 justify-center lg:justify-start
              w-full sm:w-fit mx-auto lg:mx-0"
            >
              Get Started
              <ArrowDown size={22} />
            </motion.button>

          </motion.div>

          {/* RIGHT ROBOT */}

          <div className="w-full flex items-center justify-center -mt-10 lg:mt-0 lg:self-start">

            <div className="
            w-full
            max-w-[360px]
            sm:max-w-[420px]
            md:max-w-[520px]
            lg:max-w-[600px]
            xl:max-w-[640px]

            h-[320px]
            sm:h-[440px]
            md:h-[520px]
            lg:h-[600px]
            xl:h-[640px]
            cursor-grab
            ">

              <Canvas
                shadows={!isMobile}
                dpr={isMobile ? [1, 1] : [1, 2]}
                gl={{ antialias: !isMobile, powerPreference: "high-performance" }}

                /* ✅ Mobile Zoom Camera */

                camera={{
                  position: [0, isMobile ? 1 : isTablet ? 1.35 : 1.5, isMobile ? 5.2 : isTablet ? 7 : 6.6],
                  fov: isMobile ? 45 : isTablet ? 46 : 42,
                }}
              >

                <ambientLight intensity={0.6} />

                <directionalLight
                  position={[0, 12, 1]}
                  intensity={1.9}
                  shadow-bias={-0.0001}
                  castShadow={!isMobile}
                />

                <Suspense fallback={<Loader />}>
                  <RobotModel isMobile={isMobile} isTablet={isTablet} />
                  <Environment preset="city" />

                  {!isMobile && (
                    <mesh
                      rotation={[-Math.PI / 2, 0, 0]}
                      position={[0, isTablet ? -1.26 : -1.58, 0]}
                      receiveShadow
                    >
                      <planeGeometry args={[10, 10]} />
                      <shadowMaterial opacity={0.3} />
                    </mesh>
                  )}
                </Suspense>

                {/* ✅ Mobile rotate disabled */}

                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  enableRotate={!isMobile}
                />

              </Canvas>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}