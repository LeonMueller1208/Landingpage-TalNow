import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Logo size="sm" variant="gradient" />
            <p className="text-gray-600 mt-2 text-sm">
              © {new Date().getFullYear()} TalNow. Alle Rechte vorbehalten.
            </p>
          </div>

          <div className="flex gap-8 text-sm">
            <a href="/impressum" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
              Impressum
            </a>
            <a href="/datenschutz" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
              Datenschutz
            </a>
            <a href="mailto:info@talnow.net" className="text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5">
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}


