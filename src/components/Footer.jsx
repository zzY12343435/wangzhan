import { motion } from 'framer-motion';
import { HiMail, HiPaperAirplane, HiPhone } from 'react-icons/hi';
import { FaQq } from 'react-icons/fa';
import './Footer.css';

const SOCIALS = [
  { icon: HiMail,   href: 'mailto:1126309962@qq.com', label: 'Email' },
  { icon: FaQq,     href: '#',                         label: 'QQ' },
  { icon: HiPhone,  href: 'tel:13026589569',           label: '电话' },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 }
  }
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <motion.div
        className="footer-inner"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.span className="section-tag" variants={child}>Contact</motion.span>
        <motion.h2 className="footer-title" variants={child}>
          Let's work<br />together
        </motion.h2>
        <motion.a href="mailto:1126309962@qq.com" className="footer-email" variants={child}>
          <HiPaperAirplane />
          1126309962@qq.com
        </motion.a>
        <motion.div className="footer-socials" variants={child}>
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" title={label}>
              <Icon />
            </a>
          ))}
        </motion.div>
        <motion.p className="footer-copy" variants={child}>
          © 2025 张兆亿. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
}
