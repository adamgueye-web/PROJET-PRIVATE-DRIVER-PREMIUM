# Private Driver Premium

Site vitrine (landing page) pour un service de transfert automobile premium.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- ESLint

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Sert le build de production |
| `npm run lint` | Analyse ESLint |

## Structure

```
src/
  app/
    layout.tsx    # Layout racine
    page.tsx      # Landing page
    globals.css   # Styles globaux + thème Tailwind
public/           # Assets statiques
```

## Déploiement

Le projet est prévu pour être déployé sur [Vercel](https://vercel.com) : importer le
dépôt GitHub, Vercel détecte automatiquement Next.js. Chaque push sur `main` déclenche
un déploiement de production, chaque pull request une preview.
