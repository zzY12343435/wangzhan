import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useTilt from '../hooks/useTilt';
import './Projects.css';

const PROJECTS = [
  {
    title: '行星减速器虚拟仿真教学系统',
    cat: 'VR 交互内容',
    year: '2025',
    images: [`${import.meta.env.BASE_URL}project-1.jpg`, `${import.meta.env.BASE_URL}project-2.jpg`],
    desc: '独立策划并落地 VR 交互教学内容，覆盖用户调研、内容脚本、体验设计、数据回收全流程。设计"认知—拆装—原理"三阶学习路径，自研打字机对话系统模拟教师讲解节奏，零件高亮辅助与抓取反馈使装配错误率降低 32%。独立完成产品演示视频拍摄、剪辑、配音与字幕包装，使用 Photoshop 设计 UI 界面视觉素材。'
  },
];

const card = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: (i) => ({
    opacity: 1, y: 0, scale: 1,
    transition: {
      delay: i * 0.13,
      duration: 0.65,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

function ProjectCard({ project }) {
  const [idx, setIdx] = useState(0);
  const { ref, onMove, onLeave } = useTilt(5);
  const len = project.images.length;

  const prev = (e) => { e.stopPropagation(); setIdx((idx - 1 + len) % len); };
  const next = (e) => { e.stopPropagation(); setIdx((idx + 1) % len); };

  return (
    <div className="project-img-wrap">
      <div className="project-img" onClick={(e) => { const rect = e.currentTarget.getBoundingClientRect(); (e.clientX - rect.left) < rect.width / 2 ? prev(e) : next(e); }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={idx}
            src={project.images[idx]}
            alt={`${project.title} - ${idx + 1}`}
            className="project-img-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>
      </div>
      <div className="project-img-indicators">
        <button className="project-img-arrow" onClick={prev}>‹</button>
        <div className="project-img-dots">
          {project.images.map((_, i) => (
            <span key={i} className={`dot ${i === idx ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setIdx(i); }} />
          ))}
        </div>
        <button className="project-img-arrow" onClick={next}>›</button>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          经历
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          项目经历
        </motion.h2>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              className="project-card project-card-full"
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className="project-card-tilt" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
              <ProjectCard project={p} />
              <div className="project-info">
                <div className="project-info-top">
                  <h3 className="project-title">{p.title}</h3>
                  <span className="project-tag">{p.cat}</span>
                </div>
                <span className="project-year">{p.year}</span>
              </div>
              <p className="project-desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
