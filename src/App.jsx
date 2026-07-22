import { useState } from 'react';
import Splash from './components/Splash';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Strengths from './components/Strengths';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* 主页始终渲染在底层 */}
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Strengths />
      </main>
      <Footer />

      {/* 开场页覆盖在上层 — 光圈收缩后移除 */}
      {showSplash && <Splash onEnter={() => setShowSplash(false)} />}
    </>
  );
}
