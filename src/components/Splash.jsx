import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Splash.css';

export default function Splash({ onEnter }) {
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    setLeaving(true);
  };

  return (
    <AnimatePresence onExitComplete={onEnter}>
      {!leaving && (
        <motion.div
          className="splash"
          exit={{ clipPath: 'circle(0% at 50% 88%)' }}
          transition={{ duration: 1.0, ease: [0.65, 0, 0.35, 1] }}
          style={{ clipPath: 'circle(150% at 50% 88%)' }}
        >
          <div className="splash-bg" />

          <div className="splash-inner">
            <div className="splash-content">
              <motion.div
                className="splash-line-top"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.3 }}
              />

              <motion.h1
                className="splash-name"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
              >
                张 兆 亿
              </motion.h1>

              <motion.p
                className="splash-tagline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.9 }}
              >
                VR 内容创作者
              </motion.p>

              <motion.div
                className="splash-line-bottom"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 1.0 }}
              />

              <motion.button
                className="splash-enter"
                onClick={handleEnter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4 }}
                whileHover={{ gap: '16px', color: '#fff' }}
              >
                ENTER
                <motion.span
                  className="splash-arrow"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  →
                </motion.span>
              </motion.button>
            </div>
          </div>

          <motion.p
            className="splash-bottom-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.6 }}
          >
            Portfolio 2024
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
