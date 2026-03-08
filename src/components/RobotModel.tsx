"use client";

import { useRef, useEffect } from "react";
import { useGLTF, useAnimations, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function RobotModel() {
  const group = useRef<THREE.Group>(null);

  const { scene, animations } = useGLTF("/models/robot.glb");
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions) return;

    console.log("Animations:", names);

    const action =
      actions["Roll"] ||
      actions["GetUp"] ||
      actions[names[0]];

    if (action) {
      action.reset().fadeIn(0.3).play();
    }

    // ✅ Enable shadows for all meshes
    scene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [actions, names, scene]);

  // 🎥 Slight rotate
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  return (
    <Center>
      <primitive
        ref={group}
        object={scene}
        scale={0.9}
        position={[0, -1, 0]} // 👈 adjust so feet touch ground
      />
    </Center>
  );
}