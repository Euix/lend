import SectionHeading from './SectionHeading';

const faqs = [
  {
    question: 'Скільки часу триває пентест?',
    answer: 'Типовий аудит займає 2–4 тижні залежно від масштабу та доступності середовищ.'
  },
  {
    question: 'Що потрібно від нас для старту?',
    answer: 'Scope, контактні особи, тестові облікові записи та узгоджені правила ROE.'
  },
  {
    question: 'Чи робиш ретест?',
    answer: 'Так, ретест включено в базовий пакет після виправлення критичних і високих проблем.'
  },
  {
    question: 'Чи підписуєш NDA?',
    answer: 'Так, NDA підписується до старту, також можу працювати з вашим шаблоном.'
  },
  {
    question: 'Чим пентест відрізняється від сканування?',
    answer: 'Пентест включає ручну валідацію, бізнес-логіку та експлуатацію, а не лише автоматичні знахідки.'
  },
  {
    question: 'Як формується ціна?',
    answer: 'Ціна залежить від scope, критичності сервісів та глибини перевірки. Старт — після попередньої оцінки.'
  }
];

export default function FAQ() {
  return (
    <section id="faq" data-section="true" className="bg-primary-900 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Короткі відповіді на часті питання"
          description="Якщо маєте додаткові питання — напишіть, відповім протягом робочого дня."
        />
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-primary-800/50 p-5 text-sm text-gray-300"
            >
              <summary className="cursor-pointer list-none font-semibold text-white">
                {item.question}
              </summary>
              <p className="mt-3 text-gray-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
