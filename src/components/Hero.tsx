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

function RobotModel() {
  const group = useRef<THREE.Group>(null);
  const [visible, setVisible] = useState(false);

  const { scene, animations } = useGLTF("/models/robot.glb");
  const { actions } = useAnimations(animations, group);

  const isMesh = (object: THREE.Object3D): object is THREE.Mesh => {
    return (object as THREE.Mesh).isMesh === true;
  };

  const forEachMaterial = (
    material: THREE.Material | THREE.Material[],
    callback: (mat: THREE.Material) => void
  ) => {
    if (Array.isArray(material)) {
      material.forEach(callback);
      return;
    }

    callback(material);
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

        if (child.material) {
          forEachMaterial(child.material, (mat) => {
            mat.transparent = true;
            mat.opacity = 0;
          });
        }
      }
    });

    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, [actions, scene]);

  useFrame(() => {
    if (!group.current) return;

    group.current.traverse((child) => {
      if (!isMesh(child) || !visible || !child.material) return;

      forEachMaterial(child.material, (mat) => {
        if (mat.transparent && mat.opacity < 1) {
          mat.opacity = Math.min(1, mat.opacity + 0.02);
        }
      });
    });

    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  return (
    <Center>
      <primitive ref={group} object={scene} scale={1.2} position={[0, -1, 0]} />
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
  const scrollToContact = () => {
    smoothScrollToId("contact");
  };

  return (
    <section className="w-full min-h-[calc(100vh-64px)] flex items-center bg-[#f5f7fa] py-10 md:py-12">

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12">

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-10 lg:gap-12">

          {/* LEFT TEXT */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center
            text-center lg:text-left
            max-w-2xl mx-auto lg:mx-0"
          >

            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2
              px-3 sm:px-4 py-2
              rounded-full
              bg-blue-100
              text-blue-600
              text-xs sm:text-sm
              font-medium
              w-fit max-w-full
              text-center
              mx-auto lg:mx-0"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              Trusted by 10,000+ Event Organizers
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="
              mt-6
              font-bold
              text-gray-900
              leading-tight

              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              xl:text-7xl
              "
            >
              MiraiEvents <br />
              Management,
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-4">
              <RotatingText />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="
              mt-6
              text-gray-600
              leading-relaxed

              text-sm
              sm:text-base
              md:text-lg

              max-w-xl
              mx-auto lg:mx-0
              "
            >
              MiraiEvents all-in-one event management software simplifies event
              planning and elevates the attendee experience.
            </motion.p>

            <motion.button
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="
              mt-8
              px-8 py-4
              bg-white
              rounded-full
              shadow-md
              text-gray-900
              font-medium

              flex items-center gap-2
              justify-center lg:justify-start

              w-full sm:w-fit
              mx-auto lg:mx-0
              "
            >
              Get Started
              <ArrowDown size={22} />
            </motion.button>

          </motion.div>

          {/* RIGHT ROBOT */}

          <div className="w-full flex items-center justify-center mt-8 lg:mt-0">

            <div className="
            w-full
            max-w-[320px]
            sm:max-w-[420px]
            md:max-w-[500px]
            lg:max-w-[550px]

            h-[320px]
            sm:h-[380px]
            md:h-[480px]
            lg:h-[520px]
            cursor-grab
            ">

              <Canvas shadows camera={{ position: [0, 1.5, 6], fov: 35 }}>
                <ambientLight intensity={0.6} />

                <directionalLight
                  position={[5, 10, 5]}
                  intensity={2}
                  castShadow
                />

                <Suspense fallback={<Loader />}>
                  <RobotModel />
                  <Environment preset="city" />

                  <mesh
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -1.5, 0]}
                    receiveShadow
                  >
                    <planeGeometry args={[10, 10]} />
                    <shadowMaterial opacity={0.3} />
                  </mesh>

                </Suspense>

                <OrbitControls enableZoom={false} />

              </Canvas>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
