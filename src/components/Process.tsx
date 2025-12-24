import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const steps = ['Scope', 'ROE', 'Тестування', 'Звіт', 'Ретест', 'Підтримка'];

export default function Process() {
  return (
    <section id="process" data-section="true" className="bg-primary-900 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Процес"
          title="Як ми працюємо"
          description="Стандартизований процес, який легко інтегрується у ваш SDLC та compliance вимоги."
        />
        <div className="grid gap-4 md:grid-cols-6">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-white/10 bg-primary-800/50 px-4 py-6 text-center"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">0{index + 1}</p>
              <p className="mt-2 text-sm font-semibold text-white">{step}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-primary-800/40 p-6">
          <p className="text-sm text-white">На виході ви отримуєте:</p>
          <ul className="mt-4 grid gap-3 text-sm text-gray-300 sm:grid-cols-2">
            {[
              'Executive summary для C-level',
              'Технічний додаток з PoC',
              'Пріоритизацію ризиків',
              'Roadmap виправлень та ретест'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-400" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
