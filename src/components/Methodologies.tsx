import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const methodologies = [
  'OWASP Testing Guide',
  'OWASP ASVS',
  'PTES',
  'NIST (high-level)',
  'MITRE ATT&CK mapping',
  'CVSS scoring',
  'STRIDE / PASTA'
];

const tooling = [
  'Burp Suite',
  'Nmap',
  'Metasploit (обережно, лише в ROE)',
  'BloodHound',
  'Impacket',
  'Nessus / OpenVAS',
  'nuclei / ffuf',
  'Wireshark',
  'Custom scripts (Python/Go)'
];

const terminalLines = [
  'scan → scope → assess',
  'validate → prioritize → report',
  'retest → harden → support'
];

export default function Methodologies() {
  return (
    <section id="methodologies" data-section="true" className="bg-primary-900 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Методології & Tooling"
          title="Стандарти, які дають прогнозований результат"
          description="Фреймворки та інструменти підбираються під scope та бізнес-ризики, а не заради галочки."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-primary-800/50 p-6">
            <h3 className="text-lg font-semibold text-white">Методології</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {methodologies.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-primary-800/50 p-6">
            <h3 className="text-lg font-semibold text-white">Інструментарій</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-300">
              {tooling.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-500">Тільки з письмовим дозволом (ROE).</p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="scanline rounded-2xl border border-white/10 bg-primary-800/70 p-6"
          >
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-accent-400">Terminal</div>
            <div className="space-y-3 font-mono text-sm text-gray-300">
              {terminalLines.map((line) => (
                <p key={line}>
                  <span className="text-accent-400">$</span> {line}
                </p>
              ))}
              <p>
                <span className="text-accent-400">$</span> export report=executive_summary
                <span className="terminal-cursor" aria-hidden="true" />
              </p>
            </div>
            <img
              src="/methodology.svg"
              alt="Темний дашборд оцінки безпеки"
              className="mt-6 h-32 w-full rounded-xl border border-white/10 object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
