import { motion } from 'framer-motion';
import { HiDocumentText, HiVideoCamera, HiChartBar, HiDeviceMobile, HiCube } from 'react-icons/hi';
import './Strengths.css';

const STRENGTHS = [
  {
    icon: HiDocumentText,
    title: '内容策划与文案',
    desc: '擅长将复杂功能拆解为用户易懂的步骤式/故事化内容，可独立撰写产品引导语、UI文案及短视频脚本。'
  },
  {
    icon: HiVideoCamera,
    title: '视频与图文制作',
    desc: '熟练使用 Premiere Pro / 剪映完成剪辑、调色、配音、字幕与特效；熟练 Photoshop 制作封面图、信息长图与海报。'
  },
  {
    icon: HiChartBar,
    title: '用户与数据思维',
    desc: '具备 VR 交互设计经验，深刻理解用户操作路径与认知负荷；有主动记录数据并据此优化内容的实践经验。'
  },
  {
    icon: HiDeviceMobile,
    title: '多平台内容适配',
    desc: '了解抖音、B站、小红书、公众号等内容调性与用户偏好差异，能根据平台特性灵活调整内容风格。'
  },
  {
    icon: HiCube,
    title: '工具链整合能力',
    desc: '掌握 C# 与 Unity 开发基础，能与技术/设计团队高效沟通，理解产品实现边界，便于推进跨岗位协作。'
  },
];

const card = {
  hidden: (i) => ({
    opacity: 0,
    y: 30,
    x: i % 2 === 0 ? -20 : 20
  }),
  visible: (i) => ({
    opacity: 1, y: 0, x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

export default function Strengths() {
  return (
    <section id="strengths" className="strengths">
      <div className="container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Strengths
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          核心能力
        </motion.h2>

        <div className="strengths-grid">
          {STRENGTHS.map((s, i) => (
            <motion.div
              key={s.title}
              className="strength-card"
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className="strength-icon">
                <s.icon />
              </div>
              <h3 className="strength-title">{s.title}</h3>
              <p className="strength-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
