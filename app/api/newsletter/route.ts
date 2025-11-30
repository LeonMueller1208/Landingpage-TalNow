import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // E-Mail in Supabase speichern
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert({ email })
      .select();

    if (error) {
      // Prüfen ob E-Mail bereits existiert
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Diese E-Mail ist bereits registriert!' },
          { status: 409 }
        );
      }
      
      console.error('Supabase Error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Speichern. Bitte versuche es erneut.' },
        { status: 500 }
      );
    }

    // Bestätigungs-Email senden
    try {
      await resend.emails.send({
        from: 'TalNow <onboarding@resend.dev>',
        to: email,
        subject: 'Willkommen bei TalNow! 🚀',
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { text-align: center; padding: 20px 0; }
                .logo { font-size: 32px; font-weight: 900; background: linear-gradient(to right, #3b82f6, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
                .content { background: #f9fafb; padding: 30px; border-radius: 16px; margin: 20px 0; }
                h1 { color: #1f2937; font-size: 24px; margin-bottom: 16px; }
                p { color: #4b5563; margin-bottom: 16px; }
                .cta { display: inline-block; background: linear-gradient(to right, #3b82f6, #10b981); color: white; padding: 14px 28px; border-radius: 9999px; text-decoration: none; font-weight: 700; margin: 20px 0; }
                .footer { text-align: center; color: #9ca3af; font-size: 14px; margin-top: 30px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <div class="logo">TalNow</div>
                </div>
                
                <div class="content">
                  <h1>Willkommen bei TalNow! 🎉</h1>
                  <p>Hey!</p>
                  <p>Danke, dass du dich für den Beta-Zugang von TalNow angemeldet hast!</p>
                  <p>Du bist jetzt auf der Liste und gehörst zu den Ersten, die unsere Plattform testen können, sobald wir live gehen.</p>
                  <p><strong>Was ist TalNow?</strong><br>
                  Recruiting ohne Bullshit. Wir finden für jedes Unternehmen die passenden Talente & für jedes Talent den passenden Job.</p>
                  <p>Wir melden uns bei dir, sobald es losgeht! 🚀</p>
                  <a href="https://talnow.net" class="cta">Zur Website →</a>
                </div>
                
                <div class="footer">
                  <p>TalNow - Modernes Matchmaking für Unternehmen und Talente</p>
                  <p>© ${new Date().getFullYear()} TalNow. Alle Rechte vorbehalten.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });
      
      console.log('✅ Neue Newsletter-Anmeldung + Email gesendet:', email);
    } catch (emailError) {
      console.error('Email Send Error:', emailError);
      // Fehler beim Email-Versand sollte nicht die ganze Anmeldung stoppen
    }

    return NextResponse.json(
      { message: 'Erfolgreich angemeldet!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}

