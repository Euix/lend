import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const cases = [
  {
    title: 'FinTech веб-платформа',
    image: '/case-fintech.svg',
    sphere: 'Платіжні сервіси',
    target: 'Кабінет клієнта + бекофіс',
    findings: 'IDOR, конфігураційні помилки, логічна вразливість',
    result: 'Зниження критичних ризиків, фікси за 10 днів',
    term: '3 тижні',
    artifacts: 'Executive summary, PoC, prioritized backlog',
    severity: 'Critical'
  },
  {
    title: 'E-commerce API',
    image: '/case-ecom.svg',
    sphere: 'Онлайн-ритейл',
    target: 'Public API + партнерські інтеграції',
    findings: 'Auth bypass edge-case, rate-limit gaps',
    result: 'Закрито критичні, додані WAF rules',
    term: '2 тижні',
    artifacts: 'API risk map, attack surface, remediation plan',
    severity: 'High'
  },
  {
    title: 'Internal AD',
    image: '/case-ad.svg',
    sphere: 'B2B SaaS',
    target: 'AD, файлові сервіси, VPN',
    findings: 'Password spraying exposure, LAPS/Kerberos misconfig',
    result: 'Hardening план + політики доступу',
    term: '4 тижні',
    artifacts: 'Domain map, priority fixes, retest',
    severity: 'Medium'
  }
];

const severityStyles: Record<string, string> = {
  Critical: 'bg-accent-500/20 text-accent-400 border-accent-400/50',
  High: 'bg-highlight-400/20 text-highlight-400 border-highlight-400/50',
  Medium: 'bg-white/10 text-gray-300 border-white/20'
};

export default function CaseStudies() {
  return (
    <section id="cases" data-section="true" className="bg-primary-900 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Кейс-стаді"
          title="Результати, які можна пояснити бізнесу"
          description="Анонімізовані приклади, що демонструють реальні сценарії та швидкість реагування."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-primary-800/50"
            >
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover" loading="lazy" />
              <div className="space-y-3 p-6 text-sm text-gray-300">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <span className={`rounded-full border px-3 py-1 text-xs ${severityStyles[item.severity]}`}>
                    {item.severity}
                  </span>
                </div>
                <p><span className="text-gray-500">Сфера:</span> {item.sphere}</p>
                <p><span className="text-gray-500">Ціль:</span> {item.target}</p>
                <p><span className="text-gray-500">Знахідки:</span> {item.findings}</p>
                <p><span className="text-gray-500">Результат:</span> {item.result}</p>
                <p><span className="text-gray-500">Термін:</span> {item.term}</p>
                <p><span className="text-gray-500">Артефакти:</span> {item.artifacts}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
