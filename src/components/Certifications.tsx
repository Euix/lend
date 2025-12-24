import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const certs = ['OSCP (placeholder)', 'PNPT (placeholder)', 'eJPT', 'Security+'];

export default function Certifications() {
  return (
    <section id="certifications" data-section="true" className="bg-primary-900 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Сертифікати & Trust"
          title="Прозорість, етичність та NDA-friendly підхід"
          description="Бейджі нижче — приклад. Замініть на реальні сертифікати після підтвердження."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {certs.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-white/10 bg-primary-800/50 p-6 text-center"
            >
              <p className="font-mono text-sm text-white">{cert}</p>
              <p className="mt-2 text-xs text-gray-500">Приклад, замініть на реальні</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {['Responsible disclosure', 'NDA friendly'].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-primary-800/40 p-6">
              <p className="text-sm text-white">{item}</p>
              <p className="mt-2 text-xs text-gray-500">
                Дотримуюсь юридичних рамок та узгоджених правил взаємодії.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
