# TalNow Landing Page 🚀

Moderne Landing Page für TalNow - Die Plattform für intelligentes Matchmaking zwischen Unternehmen und Talenten.

## Features

✅ **Hero Section** mit Claim und Value Proposition  
✅ **Benefits** - 3 Hauptvorteile der Plattform  
✅ **Newsletter/Beta-Waitlist** - Prominent platziert  
✅ **SEO-Artikel** - "Die 7 größten Fails im Recruiting 2024"  
✅ **Responsive Design** - Mobile-first  
✅ **TalNow Branding** - Logo mit Gradient (Blau → Grün)  
✅ **Animationen** - Subtile Blob-Animationen im Hero  

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React**

## Development

```bash
# Installation
npm install

# Dev Server starten
npm run dev

# Build für Production
npm run build

# Production Server starten
npm start
```

## Deployment auf Vercel

1. **Neues Vercel-Projekt erstellen:**
   - Gehe zu [vercel.com](https://vercel.com)
   - "Add New Project"
   - Repository auswählen: `landingpage`
   - Deploy

2. **Domain einrichten:**
   - In Vercel: Settings → Domains
   - `talnow.de` hinzufügen
   - DNS-Einträge bei Domain-Provider setzen

3. **Prototyp auf Subdomain:**
   - Aktuelles Projekt (Jobmatching) auf `app.talnow.de`
   - Landing Page auf `talnow.de`

## Newsletter Integration

Aktuell loggt die Newsletter-API nur in die Console. Für Production:

### Option 1: Mailchimp
```typescript
// In app/api/newsletter/route.ts
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
```

### Option 2: ConvertKit
```typescript
const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY;
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID;
```

### Option 3: Supabase
```typescript
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
await supabase.from('newsletter_subscribers').insert({ email, created_at: new Date() });
```

## SEO

- ✅ Meta Tags optimiert
- ✅ Open Graph Tags
- ✅ Semantisches HTML
- ✅ Artikel mit Keywords
- ✅ Schnelle Ladezeit

## Struktur

```
landingpage/
├── app/
│   ├── page.tsx              # Hauptseite
│   ├── layout.tsx            # Layout + SEO
│   ├── globals.css           # Globale Styles
│   └── api/
│       └── newsletter/
│           └── route.ts      # Newsletter API
├── components/
│   ├── Hero.tsx              # Hero Section
│   ├── Benefits.tsx          # 3 Benefits
│   ├── Newsletter.tsx        # Newsletter Form
│   ├── Article.tsx           # SEO-Artikel
│   ├── Footer.tsx            # Footer
│   └── Logo.tsx              # TalNow Logo
└── README.md
```

## Nächste Schritte

1. ✅ Landing Page erstellt
2. ⏳ Newsletter-Service integrieren (Mailchimp/ConvertKit)
3. ⏳ Auf Vercel deployen
4. ⏳ Domain `talnow.de` verbinden
5. ⏳ Google Analytics hinzufügen
6. ⏳ Impressum & Datenschutz Seiten erstellen

## Support

Bei Fragen oder Problemen: Einfach melden! 🚀
