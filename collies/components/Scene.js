
// scene.js
import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion-3d"

export function Scene() {
  return (
    <Canvas>
      <motion.group animate={ "hover"}>
        <motion.mesh variants={{ hover: { z: 1 } }} />
      </motion.group>
    </Canvas>
  )
}