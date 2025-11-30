import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    console.log('Testing Resend with API Key:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');
    
    const { data, error } = await resend.emails.send({
      from: 'TalNow <onboarding@resend.dev>',
      to: 'delivered@resend.dev', // Resend Test Email
      subject: 'Test Email from TalNow',
      html: '<p>This is a test email!</p>',
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error, apiKeyPresent: !!process.env.RESEND_API_KEY }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, data, apiKeyPresent: !!process.env.RESEND_API_KEY });
  } catch (error) {
    console.error('Test Email Error:', error);
    return NextResponse.json({ error: String(error), apiKeyPresent: !!process.env.RESEND_API_KEY }, { status: 500 });
  }
}

