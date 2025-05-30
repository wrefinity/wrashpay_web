import { motion } from 'framer-motion';
import { fadeIn, slideIn } from '@/lib/animations';

interface MotionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

interface SlideInProps extends MotionProps {
  direction: 'left' | 'right' | 'up' | 'down';
}

export const FadeIn = ({ children, className = '', delay = 0, duration = 0.8 }: MotionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            delay,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideIn = ({ children, className = '', direction, delay = 0 }: SlideInProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideIn(direction, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement = ({ children, className = '' }: MotionProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const PulsingElement = ({ children, className = '' }: MotionProps) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};