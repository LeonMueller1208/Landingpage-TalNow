import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Ungültige E-Mail-Adresse' },
        { status: 400 }
      );
    }

    // TODO: Hier später Integration mit Newsletter-Service (z.B. Mailchimp, ConvertKit, etc.)
    // Für jetzt: Einfach in Console loggen
    console.log('📧 Neue Newsletter-Anmeldung:', email);

    // Optional: In Supabase speichern
    // const supabase = createClient();
    // await supabase.from('newsletter_subscribers').insert({ email });

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

