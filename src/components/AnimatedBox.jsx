import { motion } from 'framer-motion'

export default function AnimatedBox() {
  return (
    <motion.div
      className="w-56 h-56 bg-white rounded-xl shadow-lg flex items-center justify-center"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="text-center p-4">
        <h3 className="text-xl font-semibold">Animated Box</h3>
        <p className="text-sm text-gray-600 mt-2">Framer Motion + Tailwind</p>
      </div>
    </motion.div>
  )
}
