import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'CTO, FinTech',
    quote:
      'Чіткий процес, сильна аналітика бізнес-логіки та відмінна комунікація з командою. Ризики закрили за два спринти.'
  },
  {
    name: 'Head of Engineering, SaaS',
    quote:
      'Рівень деталізації звіту та PoC перевищив очікування. Ретест пройшли без критичних залишків.'
  },
  {
    name: 'Product Security Lead, eCommerce',
    quote:
      'Допоміг сформувати реалістичний roadmap, а не просто список вразливостей. Це зекономило час команді.'
  },
  {
    name: 'VP of IT, B2B',
    quote:
      'Вразливості пояснені менеджменту зрозумілою мовою. Плюс — підтримка після релізів фіксів.'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" data-section="true" className="bg-primary-900 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Відгуки"
          title="Довіра, підтверджена командами"
          description="Анонімні, але реалістичні відгуки від технічних лідерів та C-level."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="rounded-2xl border border-white/10 bg-primary-800/50 p-6"
            >
              <p className="text-sm text-gray-300">“{item.quote}”</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-gray-500">
                {item.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
