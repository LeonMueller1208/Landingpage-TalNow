import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen bg-white">
      {/* Header */}
      <header className="relative z-20 px-6 lg:px-12 py-6">
        <Logo size="md" variant="gradient" />
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center px-6 lg:px-12" style={{ minHeight: 'calc(100vh - 100px)' }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Claim */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight text-gray-900 fade-in">
            Recruiting ohne{' '}
            <span className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300">
              BULLSHIT
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-2xl md:text-3xl text-gray-700 mb-16 font-medium leading-snug fade-in fade-in-delay-100">
            Wir finden für jedes Unternehmen die passenden Talente & für jedes Talent den passenden Job
          </p>

          {/* CTA Button */}
          <a
            href="#newsletter"
            className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full text-xl font-bold hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95 fade-in fade-in-delay-200"
          >
            Beta-Zugang sichern →
          </a>
        </div>
      </div>

      {/* Subtle Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
}


