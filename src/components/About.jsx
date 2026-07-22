import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiAcademicCap } from 'react-icons/hi';
import './About.css';

const STATS = [
  { num: 1,  suffix: '',   label: '独立项目' },
  { num: 32, suffix: '%',  label: '装配错误率降低' },
  { num: 5,  suffix: '',   label: '工具链覆盖' },
  { num: 2,  suffix: '',   label: '多平台视频版本' },
];

function CountUp({ target, suffix, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        const duration = 1600;
        const start = performance.now();
        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div className="stat-card" ref={ref}>
      <span className="stat-num">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

const textVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const imgVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-top">
          <motion.div
            className="about-image"
            variants={imgVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="about-img-placeholder">
              <img src="/avatar.jpg" alt="张兆亿" className="about-avatar" />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <span className="section-tag">About</span>
            <h2 className="section-title">关于我</h2>
            <p className="section-desc">
              你好，我是<strong style={{color:'var(--white)',fontWeight:500}}>张兆亿</strong>，
              一名 VR 交互内容创作者。现就读于济南职业学院计算机应用技术专业。
              擅长将复杂功能拆解为用户易懂的步骤式内容，独立完成从策划、设计到落地的全流程。
            </p>
            <p className="section-desc" style={{marginTop:12}}>
              熟练使用 Premiere Pro、Photoshop、Unity3D 等工具，
              具备 VR 交互设计与多平台内容制作能力。
              相信好的内容能降低认知门槛，让技术真正服务于人。
            </p>
            <div className="about-contact">
              <span><HiMail /> 1126309962@qq.com</span>
              <span><HiLocationMarker /> 山东</span>
              <span><HiAcademicCap /> 济南职业学院</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <CountUp target={s.num} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
