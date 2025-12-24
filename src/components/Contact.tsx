import { FormEvent, useState } from 'react';
import SectionHeading from './SectionHeading';

const auditTypes = ['Web', 'API', 'Mobile', 'Internal', 'Cloud', 'Threat Modeling'];

export default function Contact() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Lead form submission:', data);
    setShowToast(true);
    event.currentTarget.reset();
    window.setTimeout(() => setShowToast(false), 2800);
  };

  return (
    <section id="contact" data-section="true" className="bg-primary-900 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Контакти"
          title="Готові обговорити аудит?"
          description="Заповніть форму, і я надішлю попередню оцінку, таймлайн та перелік даних для старту."
        />
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-primary-800/50 p-6"
            aria-label="Форма заявки"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Імʼя
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-primary-900/60 px-4 py-3 text-sm text-white focus:border-accent-400 focus:outline-none"
                  placeholder="Імʼя та прізвище"
                />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Email або Telegram
                <input
                  name="contact"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-primary-900/60 px-4 py-3 text-sm text-white focus:border-accent-400 focus:outline-none"
                  placeholder="name@company.com або @handle"
                />
              </label>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Компанія (optional)
                <input
                  name="company"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-primary-900/60 px-4 py-3 text-sm text-white focus:border-accent-400 focus:outline-none"
                  placeholder="Назва компанії"
                />
              </label>
              <label className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Тип аудиту
                <select
                  name="auditType"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-primary-900/60 px-4 py-3 text-sm text-white focus:border-accent-400 focus:outline-none"
                >
                  <option value="">Оберіть</option>
                  {auditTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="mt-4 block text-xs uppercase tracking-[0.2em] text-gray-500">
              Повідомлення
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full rounded-xl border border-white/10 bg-primary-900/60 px-4 py-3 text-sm text-white focus:border-accent-400 focus:outline-none"
                placeholder="Короткий опис scope та дедлайнів"
              />
            </label>
            <label className="mt-4 flex items-center gap-3 text-xs text-gray-400">
              <input
                name="agreement"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-white/20 bg-primary-900/60 text-accent-400"
              />
              Погоджуюсь з умовами та ROE.
            </label>
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-accent-500 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-highlight-400"
            >
              Надіслати
            </button>
          </form>
          <div className="rounded-2xl border border-white/10 bg-primary-800/50 p-6 text-sm text-gray-300">
            <h3 className="text-lg font-semibold text-white">Прямий контакт</h3>
            <p className="mt-4">Telegram: <a className="text-accent-400" href="https://t.me/placeholder">@euix</a></p>
            <p>Email: <a className="text-accent-400" href="mailto:euix@placeholder.dev">euix@placeholder.dev</a></p>
            <p className="mt-4 text-xs text-gray-500">Години відповіді: 10:00–19:00 (UTC+2)</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-primary-900/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Очікування відповіді</p>
              <p className="mt-2 text-white">Від 2 до 8 годин у робочі дні.</p>
            </div>
          </div>
        </div>
        {showToast ? (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-6 right-6 rounded-full border border-accent-400/40 bg-primary-900 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white shadow-glow"
          >
            Заявку відправлено
          </div>
        ) : null}
      </div>
    </section>
  );
}
