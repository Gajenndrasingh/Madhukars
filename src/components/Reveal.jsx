import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -32 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 32 }, show: { opacity: 1, x: 0 } },
  zoom: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
}

export default function Reveal({ children, direction = 'up', delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  )
}
