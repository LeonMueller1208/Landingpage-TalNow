import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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

    console.log('✅ Neue Newsletter-Anmeldung:', email);

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

