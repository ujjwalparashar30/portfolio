import { motion } from "framer-motion"

export default function GlassCard({ children, className = "", ...props }: any) {
  return (
    <motion.div
      className={`backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-2xl ${className}`}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}