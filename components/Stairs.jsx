'use client';
import { motion } from 'framer-motion';

const TOTAL = 6;

const stairAnimation = {
  initial: { top: '0%' },
  animate: { top: '100%' },            // slide down
  exit:    { top: ['100%', '0%'] },    // unused when parent is keyed
};

const reverseIndex = (i) => TOTAL - i - 1;

export default function Stairs() {
  return (
    <>
      {Array.from({ length: TOTAL }).map((_, i) => (
        <motion.div
          key={i}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
        
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(i) * 0.1,
          }}
         
          className="relative h-full flex-1 bg-white will-change-[top] overflow-hidden"
        />
      ))}
    </>
  );
}
