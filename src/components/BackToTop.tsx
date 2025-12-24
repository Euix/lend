import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.a
      href="#hero"
      aria-label="Повернутися до початку"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
      className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-primary-900 text-white shadow-glow transition hover:border-highlight-400"
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
    >
      ↑
    </motion.a>
  );
}
