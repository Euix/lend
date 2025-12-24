import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section id="hero" data-section="true" className="bg-noise pt-32 md:pt-36">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent-400"
          >
            Pentester Portfolio / Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-4xl font-semibold text-white md:text-5xl"
          >
            Пентест, який знаходить ризики до того, як це зроблять зловмисники.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base leading-relaxed text-gray-300"
          >
            7+ років у web/mobile та internal перевірках, включно з легким red teaming і
            аналітикою бізнес-логіки. Соціальна інженерія — лише етично та за письмовим
            погодженням. Працюю швидко, прозоро та з акцентом на практичні рекомендації.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="rounded-full bg-accent-500 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-highlight-400"
            >
              Отримати оцінку
            </a>
            <a
              href="https://t.me/placeholder"
              className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:border-highlight-400 hover:text-highlight-400"
            >
              Написати в Telegram
            </a>
          </motion.div>
        </div>
        <motion.div
          style={{ y: imageY }}
          className="scanline relative rounded-3xl border border-white/10 bg-primary-800/60 p-4 shadow-lg"
        >
          <img
            src="/hero.png"
            alt="Темний кіберпанк візуал із акцентами бордового"
            className="h-full w-full rounded-2xl object-cover"
          />
          <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-primary-900/80 px-4 py-2 text-xs text-gray-300">
            SLA: перший звіт за 48 годин
          </div>
        </motion.div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 pb-16 text-center text-sm text-gray-400 sm:grid-cols-4 md:px-6">
        {[
          { value: '120+', label: 'аудитів проведено' },
          { value: '35+', label: 'клієнтів у портфелі' },
          { value: '48 год', label: 'до першого звіту' },
          { value: 'CVSS/OWASP', label: 'повне покриття' }
        ].map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-white/5 bg-primary-800/40 px-4 py-4">
            <p className="text-2xl font-semibold text-white">{metric.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
