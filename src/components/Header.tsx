import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  sections: { id: string; label: string }[];
}

export default function Header({ activeSection, sections }: HeaderProps) {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-primary-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-gray-400">
          <span className="text-white">Euix</span>
          <span className="hidden text-gray-500 sm:inline">Penetration Tester</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-gray-300 lg:flex" aria-label="Основна навігація">
          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition hover:text-white ${
                activeSection === item.id ? 'text-white' : 'text-gray-400'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#contact"
          className="rounded-full border border-accent-400/60 bg-accent-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white shadow-glow transition hover:border-highlight-400/80 hover:text-highlight-400"
        >
          Запросити аудит
        </motion.a>
      </div>
      <div className="flex items-center justify-center gap-4 border-t border-white/5 bg-primary-800/70 px-4 py-3 text-xs text-gray-400 lg:hidden">
        {sections.slice(0, 4).map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`transition hover:text-white ${
              activeSection === item.id ? 'text-white' : 'text-gray-400'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
