export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary-900 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="text-white">© 2024 Euix. Penetration Tester.</p>
          <p className="mt-1 text-xs text-gray-500">Працюю лише за письмовими ROE та з легальними scope.</p>
        </div>
        <div className="flex gap-4 text-xs uppercase tracking-[0.2em]">
          <a href="#services" className="hover:text-white">Послуги</a>
          <a href="#contact" className="hover:text-white">Контакти</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
