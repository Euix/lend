import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const services = [
  {
    title: 'Web App Pentest',
    subtitle: 'OWASP ASVS / Top 10',
    description: 'Перевірка бізнес-логіки, авторизації, сесій та інʼєкцій з привʼязкою до ASVS.',
    output: 'Звіт, PoC, пріоритети, roadmap виправлень.'
  },
  {
    title: 'API Security Testing',
    subtitle: 'REST/GraphQL',
    description: 'Контроль доступу, масові вразливості, rate-limit, токени та edge-case сценарії.',
    output: 'Матриця ризиків, рекомендації та правила WAF.'
  },
  {
    title: 'Mobile Pentest',
    subtitle: 'Android / iOS',
    description: 'Оцінка сховищ, мережевої взаємодії, реверсу, anti-tamper перевірок.',
    output: 'Звіт із технічним додатком та PoC.'
  },
  {
    title: 'Internal / AD Assessment',
    subtitle: 'Корпоративні мережі',
    description: 'Картування AD, перевірка привілеїв, lateral movement та hardening план.',
    output: 'Звіт, план ремедіації, ретест.'
  },
  {
    title: 'Cloud Config Review',
    subtitle: 'AWS / Azure basics',
    description: 'Аналіз IAM, storage, security groups та audit trail конфігурацій.',
    output: 'Звіт з compliance-ризиками та quick wins.'
  },
  {
    title: 'Threat Modeling',
    subtitle: 'Secure SDLC',
    description: 'STRIDE/PASTA, загрози, вимоги до безпеки та консультації команди.',
    output: 'Моделі загроз, пріоритезація, backlog.'
  }
];

const iconPath =
  'M12 2.5l7.5 4.3v8.4L12 19.7 4.5 15.2V6.8L12 2.5zm0 2.3L6.5 7.3v6.1l5.5 3.2 5.5-3.2V7.3L12 4.8zm0 2.6l3.7 2.1-3.7 2.1-3.7-2.1L12 7.4zm0 5.2l3.7-2.1v4.1L12 16.7l-3.7-2.1v-4.1L12 12.6z';

export default function Services() {
  return (
    <section id="services" data-section="true" className="bg-primary-900 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Послуги"
          title="Оцінка безпеки, яка працює на бізнес"
          description="Кожен аудит — це поєднання технічної глибини та зрозумілого для менеджменту результату."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-2xl border border-white/10 bg-primary-800/50 p-6 transition hover:-translate-y-1 hover:border-accent-400/60 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-400/40 bg-accent-500/10 text-accent-400">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                  <path d={iconPath} />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-accent-300">{service.subtitle}</p>
              <p className="mt-4 text-sm text-gray-300">{service.description}</p>
              <p className="mt-4 text-xs text-gray-500">Вихід: {service.output}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-primary-800/40 p-6 text-sm text-gray-400">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Базовий пакет</p>
              <p className="mt-2 text-white">Чітке scope, ROE та швидкий старт за 3-5 днів.</p>
            </div>
            <img
              src="/services.png"
              alt="Абстрактна схема безпеки"
              className="h-20 w-40 rounded-xl border border-white/10 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
