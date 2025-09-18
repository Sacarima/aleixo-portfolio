'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Stairs from './Stairs';

export default function StairTransition() {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      
      <motion.div
        key={pathname}
        aria-hidden
        className="fixed inset-0 z-[999] pointer-events-none overflow-hidden"
      >

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, transition: { duration: 0.25, ease: 'easeInOut' } }}
          className="absolute inset-0 bg-[#1c1c22] z-0"
        />

      
        <div className="absolute inset-0 z-10 flex">
          <Stairs />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
