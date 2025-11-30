'use client';

import { useState } from 'react';
import AnimatedSection from './AnimatedSection';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Erfolgreich angemeldet! 🎉 Check deine E-Mails.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Etwas ist schiefgelaufen. Bitte versuche es erneut.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Etwas ist schiefgelaufen. Bitte versuche es erneut.');
    }
  };

  return (
    <section id="newsletter" className="relative py-20 lg:py-24 px-6 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Beta-Zugang sichern
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <p className="text-xl text-gray-600 mb-10">
            Sei einer der Ersten und erlebe modernes Recruiting. Kostenlos.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="deine@email.de"
              required
              disabled={status === 'loading'}
              className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-full text-gray-900 text-lg focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 disabled:opacity-50 transition-all duration-300 hover:border-gray-400"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 hover:-translate-y-1 active:scale-95 whitespace-nowrap"
            >
              {status === 'loading' ? 'Lädt...' : 'Anmelden'}
            </button>
          </div>
          </form>
        </AnimatedSection>

        {message && (
          <div className={`mt-6 p-4 rounded-2xl ${status === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            <p className="font-medium">
              {message}
            </p>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500">
          Kein Spam. Nur Updates, wenn es wirklich wichtig ist.
        </p>
      </div>
    </section>
  );
}

