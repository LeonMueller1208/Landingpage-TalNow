import Logo from '@/components/Logo';
import Link from 'next/link';

export const metadata = {
  title: 'Datenschutzerklärung | TalNow',
  description: 'Datenschutzerklärung der TalNow GbR',
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="px-4 sm:px-6 lg:px-12 py-4 sm:py-6 border-b border-gray-100">
        <Link href="/">
          <Logo size="md" variant="gradient" />
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20">
        <div className="max-w-3xl mx-auto w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 sm:mb-12 fade-in">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 sm:space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed fade-in fade-in-delay-100 break-words overflow-wrap-anywhere">
              
              {/* 1. Verantwortlicher */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">1. Verantwortlicher</h2>
                <p className="font-semibold">TalNow GbR <span className="font-normal text-gray-500">(in Gründung)</span></p>
                <p className="mt-2">Vertreten durch die Gesellschafter:</p>
                <p>Johan Klee</p>
                <p>Leon Müller</p>
                <div className="mt-4">
                  <p className="font-semibold">Anschrift:</p>
                  <p>Sommerweg 13</p>
                  <p>34266 Niestetal</p>
                  <p>Deutschland</p>
                </div>
                <p className="mt-4">
                  <span className="font-semibold">E-Mail:</span>{' '}
                  <a href="mailto:info@talnow.net" className="text-blue-500 hover:text-blue-600 transition-colors">
                    info@talnow.net
                  </a>
                </p>
              </section>

              {/* 2. Allgemeine Hinweise */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
                <p>
                  Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Website, 
                  zur Kommunikation oder zur Nutzung unserer Mailingliste erforderlich ist. Die Verarbeitung 
                  erfolgt gemäß Art. 6 DSGVO.
                </p>
              </section>

              {/* 3. Server-Logfiles */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">3. Bereitstellung der Website und Server-Logfiles</h2>
                <p className="mb-4">
                  Beim Besuch unserer Website werden automatisch Daten erfasst, die Ihr Browser an unseren Server übermittelt. 
                  Dies sind insbesondere:
                </p>
                <ul className="list-disc list-inside space-y-1 sm:ml-4 mb-4 pl-4 sm:pl-0">
                  <li>IP-Adresse</li>
                  <li>Datum und Uhrzeit des Zugriffs</li>
                  <li>besuchte Seite</li>
                  <li>Referrer-URL</li>
                  <li>Browsertyp und Browserversion</li>
                  <li>Betriebssystem</li>
                </ul>
                <p className="mb-2">
                  Diese Daten werden benötigt, um die Website technisch bereitzustellen und die Systemsicherheit zu gewährleisten.
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer stabilen, sicheren Website).
                </p>
                <p>Logfiles werden nach spätestens 7 Tagen automatisch gelöscht.</p>
              </section>

              {/* 4. E-Mail Kontakt */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">4. Kontaktaufnahme per E-Mail</h2>
                <p className="mb-2">
                  Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung der Anfrage.
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) 
                  oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kommunikation).
                </p>
                <p>Die Daten werden gelöscht, sobald der Zweck der Speicherung entfällt.</p>
              </section>

              {/* 5. Newsletter */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">5. Anmeldung zur Mailingliste / Newsletter</h2>
                <p className="mb-4">
                  Sie können sich auf unserer Website in unsere Mailingliste eintragen, um Updates und Informationen 
                  zu TalNow zu erhalten.
                </p>
                <p className="mb-2 font-semibold">Hierfür verarbeiten wir:</p>
                <ul className="list-disc list-inside space-y-1 sm:ml-4 mb-4 pl-4 sm:pl-0">
                  <li>E-Mail-Adresse</li>
                  <li>Zeitpunkt der Anmeldung</li>
                  <li>ggf. IP-Adresse (zur rechtlichen Dokumentation)</li>
                </ul>
                <p className="mb-4">
                  Wir verwenden das Double-Opt-In-Verfahren, bei dem Sie Ihre Anmeldung bestätigen müssen.
                </p>
                <p className="mb-4">
                  <span className="font-semibold">Rechtsgrundlage:</span> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
                </p>
                <p className="mb-4">
                  Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, z. B. über den 
                  Abmeldelink in jeder E-Mail oder per Nachricht an{' '}
                  <a href="mailto:info@talnow.net" className="text-blue-500 hover:text-blue-600 transition-colors">
                    info@talnow.net
                  </a>.
                </p>

                <div className="bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200 mt-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">Hinweis zum eingesetzten Dienstleister (Newsletter-Tool)</h3>
                  <p className="mb-2">
                    Zur Verwaltung der Mailingliste nutzen wir einen externen Dienstleister (Resend).
                  </p>
                  <p className="mb-2">
                    Die Verarbeitung erfolgt auf Grundlage eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO.
                  </p>
                  <p>
                    Je nach Anbieter kann eine Datenübermittlung in die USA erfolgen. In diesem Fall stützt sich 
                    die Übermittlung auf Art. 46 DSGVO (Standardvertragsklauseln).
                  </p>
                </div>
              </section>

              {/* 6. Cookies & Tracking */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">6. Cookies & Tracking</h2>
                <p className="mb-2">
                  Unsere Website verwendet derzeit keine Tools zur Reichweitenmessung, keine Analyse-Cookies 
                  und keine personalisierten Trackingdienste.
                </p>
                <p>
                  Sollte zukünftig SEO-Analytik (z. B. Google Analytics, Plausible, Matomo) eingesetzt werden, 
                  wird diese Erklärung entsprechend ergänzt.
                </p>
              </section>

              {/* 7. Blog */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">7. Kommentare, Blog und redaktionelle Inhalte</h2>
                <p className="mb-2">
                  Sobald Blog- oder SEO-Artikel veröffentlicht werden, verarbeiten wir keine zusätzlichen 
                  personenbezogenen Daten, solange es keine Kommentar- oder Uploadfunktion gibt.
                </p>
                <p>
                  Damit bleibt dieser Abschnitt informatorisch; Anpassungen folgen, falls Funktionen erweitert werden.
                </p>
              </section>

              {/* 8. Speicherung */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">8. Speicherung und Löschung von Daten</h2>
                <p>
                  Personenbezogene Daten werden gelöscht, sobald der Zweck der Speicherung entfällt oder Sie 
                  Ihre Einwilligung widerrufen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                </p>
              </section>

              {/* 9. Ihre Rechte */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">9. Ihre Rechte nach DSGVO</h2>
                <p className="mb-4">Sie haben folgende Rechte:</p>
                <ul className="list-disc list-inside space-y-2 sm:ml-4 mb-4 pl-4 sm:pl-0">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
                  <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p>
                  Zur Ausübung der Rechte genügt eine formlose Mitteilung an:{' '}
                  <a href="mailto:info@talnow.net" className="text-blue-500 hover:text-blue-600 transition-colors">
                    info@talnow.net
                  </a>
                </p>
              </section>

              {/* 10. Beschwerderecht */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">10. Beschwerderecht</h2>
                <p className="mb-2">
                  Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, insbesondere 
                  in dem Bundesland, in dem Sie wohnen oder in dem das Unternehmen seinen Sitz hat.
                </p>
                <p>
                  Zuständig ist der Hessische Beauftragte für Datenschutz und Informationsfreiheit.
                </p>
              </section>

              {/* 11. Datensicherheit */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">11. Datensicherheit</h2>
                <p>
                  Wir verwenden technische und organisatorische Maßnahmen, um Ihre Daten gegen Verlust, 
                  Missbrauch oder unbefugten Zugriff zu schützen. Die Website wird über eine SSL-Verschlüsselung betrieben.
                </p>
              </section>

              {/* 12. Änderungen */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">12. Änderungen dieser Datenschutzerklärung</h2>
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, sobald neue Funktionen oder 
                  Dienste auf der Website integriert werden. Die jeweils aktuelle Fassung ist jederzeit auf 
                  dieser Seite einsehbar.
                </p>
              </section>

            </div>

          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 fade-in fade-in-delay-200">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="px-4 sm:px-6 lg:px-12 py-4 sm:py-6 border-t border-gray-100 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} TalNow. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
