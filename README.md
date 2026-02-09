# PénzINFO - Pénzügyi Tanácsadó Landing Page

Modern, nagy teljesítményű landing oldal, amely segít az ügyfeleknek eligazodni a pénzügyek világában. A projekt célja, hogy bizalmat építsen és egyszerűen, átláthatóan mutassa be a hitel- és biztosítási lehetőségeket.

![PénzINFO Demo](public/og-image.jpg) *(ha van)*

## 🚀 Főbb Jellemzők

-   **Sebességre Optimalizálva**: Next.js App Router (Turbopack) és szerver oldali renderelés (SSR/SSG).
-   **Modern UI/UX**: Glassmorphism design elemek, gradientek és gondosan kidolgozott tipográfia.
-   **Látványos Animációk**: `framer-motion` alapú görgetés-vezérelt megjelenések és mikro-interakciók.
-   **Többnyelvűség (i18n)**: `next-intl` integrációval előkészítve a nemzetközi piacra, jelenleg magyar tartalommal.
-   **Teljes Reszponzivitás**: Mobiltól a nagy képernyőkig minden eszközön tökéletes megjelenés.
-   **Komponens Könyvtár**: Újrafelhasználható, izolált UI komponensek (kártyák, gombok, űrlap elemek).

## 🛠️ Technológiai Stack

-   **Keretrendszer**: [Next.js 14+](https://nextjs.org) (App Directory)
-   **Nyelv**: [TypeScript](https://www.typescriptlang.org)
-   **Stílusok**: [Tailwind CSS](https://tailwindcss.com)
-   **Animációk**: [Framer Motion](https://www.framer.com/motion)
-   **Ikonok**: [React Icons](https://react-icons.github.io/react-icons/)
-   **Nemzetköziesítés**: [next-intl](https://next-intl-docs.vercel.app/)

## 📦 Projekt Felépítése

```bash
src/
├── app/                 # Next.js App Router (oldalak, layoutok)
│   └── actions/         # Server Actions (pl. űrlap beküldés)
├── components/          # React komponensek
│   ├── layout/          # Header, Footer
│   ├── sections/        # Landing oldal fő szekciói (Hero, About, stb.)
│   └── ui/              # Újrafelhasználható UI elemek (Button, Card)
├── i18n/                # Globális fordítások (hu.json)
├── lib/                 # Segédfüggvények, konfigurációk, animációk
└── ...
```

## 🏁 Telepítés és Futtatás

A projekt futtatásához Node.js szükséges.

1.  **Repository klónozása:**
    ```bash
    git clone https://github.com/KazarGyorgy/keni_landing_nextjs.git
    cd financeLanding
    ```

2.  **Függőségek telepítése:**
    ```bash
    npm install
    # vagy
    yarn install
    ```

3.  **Fejlesztői szerver indítása:**
    ```bash
    npm run dev
    ```
    Nyisd meg a [http://localhost:3000](http://localhost:3000) címet a böngészőben.

4.  **Build készítése (Produkció):**
    ```bash
    npm run build
    npm start
    ```

## 📝 Fejlesztési Irányelvek

-   **Komponensek**: Minden új szekció külön mappába kerüljön a `components/sections` alatt, saját `i18n` mappával.
-   **Stílusok**: Használj Tailwind utility osztályokat, kerülj a bonyolult egyedi CSS fájlokat.
-   **Típusok**: Mindenhol használj TypeScript típusdefiníciókat (`interface`, `type`).
-   **Commit üzenetek**: Használj leíró commit üzeneteket (pl. `feat: add new contact form`, `fix: mobile navigation bug`).

## 📄 Licenc

Ez a projekt magáncélú felhasználásra készült. Minden jog fenntartva.
