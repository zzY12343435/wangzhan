import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (el) el.playbackRate = 0.75;
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        {/* <video ref={videoRef} autoPlay muted loop playsInline poster="">
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video> */}
        <div className="hero-overlay" />
      </div>

      <motion.div
        className="hero-content container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="hero-tag" variants={item}>
          VR 内容创作者
        </motion.p>
        <motion.h1 className="hero-title" variants={item}>
          用内容与交互<span className="hero-title-accent">连接用户</span>
        </motion.h1>
        <motion.p className="hero-sub" variants={item}>
          擅长 VR 交互内容策划、视频制作与 UI 视觉设计<br />
          用故事化的方式，让复杂变简单
        </motion.p>
        <motion.a
          href="#contact"
          className="hero-cta"
          variants={item}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          联 系 我
        </motion.a>
      </motion.div>

      <motion.button
        className="scroll-indicator"
        onClick={scrollToAbout}
        aria-label="向下滚动"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="scroll-line" />
      </motion.button>
    </section>
  );
}
