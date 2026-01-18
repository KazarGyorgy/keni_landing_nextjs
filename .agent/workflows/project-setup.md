---
description: Pénzügyi alkusz landing page projekt indítása és futtatása
---

# Finance Landing Page - Projekt Workflow

Ez a workflow leírja, hogyan lehet a projektet nulláról felépíteni és futtatni.

## Előfeltételek

- Node.js 18+ telepítve
- npm telepítve

## 1. Projekt Klónozás / Létrehozás

Ha a projekt már létezik, csak navigálj a mappába:
```bash
cd /home/gyuri/Asztal/React\ projektek/financeLanding
```

## 2. Függőségek Telepítése

// turbo
```bash
npm install
```

## 3. Fejlesztői Szerver Indítása

```bash
npm run dev
```

A szerver elérhető lesz: http://localhost:3000 (vagy :3001 ha a 3000 foglalt)

## 4. Production Build

```bash
npm run build
npm run start
```

## Projekt Struktúra

```
financeLanding/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout, SEO metadatok
│   │   ├── page.tsx        # Főoldal
│   │   └── globals.css     # Globális stílusok, Tailwind
│   │
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Hero, Services, WhyUs, Process, etc.
│   │   └── ui/             # Újrahasználható komponensek
│   │
│   ├── hooks/              # Custom React hookok
│   └── lib/                # Animációs könyvtár
│
├── tailwind.config.ts      # Tailwind konfiguráció
├── next.config.js          # Next.js konfiguráció
└── package.json
```

## Technológiák

- **Next.js 16** - React framework App Router-rel
- **React 19** - UI könyvtár
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion** - Animációk
- **React Icons** - Ikonok
- **TypeScript** - Típusbiztonság

## Színpaletta

- **Fő szín (Primary)**: #0A1628 (mély kék)
- **Akcentus (Accent)**: #D4AF37 (arany)

## Szekciók

1. **Hero** - Főoldal, CTA gombok, animált háttér
2. **Services** - Szolgáltatások bemutatása (hitel, biztosítás, CSOK)
3. **WhyUs** - Előnyök és statisztikák
4. **Process** - 4 lépéses folyamat bemutatása
5. **Testimonials** - Ügyfélvélemények carousel
6. **FAQ** - Gyakori kérdések accordion
7. **Contact** - Kapcsolatfelvételi form
8. **Footer** - Lábrész, linkek, social

## Testreszabás

### Tartalom módosítása
- Minden szekció a `src/components/sections/` mappában található
- A szövegek közvetlenül a komponensekben szerkeszthetőek

### Színek módosítása
- `tailwind.config.ts` fájlban a `colors` szekció
- `src/app/globals.css` CSS változók

### Animációk testreszabása
- `src/lib/animations.ts` - Framer Motion variánsok
