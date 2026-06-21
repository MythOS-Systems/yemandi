# Yemandi Yemeni Cuisine — Website

The first authentic Yemeni restaurant in DFW — Richardson, TX. Multi-page
marketing site built by **MythOS Era** (MythOS-Systems).

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Static site generation (all routes prerendered)
- `framer-motion` for the animated hero grid (21st.dev ShuffleGrid)
- Fonts: Spectral (display) + Mukta (body) via `next/font`

## Design
Unique palette — **mocha / terracotta / honey on oat cream** — evoking Sana'a
desert warmth and the clay-oven roots of mandi. Distinct from the other MythOS sites.

## Pages
- `/` Home — animated hero, welcome, signature dishes, photo marquee, "eat on the floor" spotlight, press
- `/menu` — full categorized menu with real prices and photos
- `/about` — story (first authentic Yemeni in DFW, D Magazine featured)
- `/gallery` — photo gallery with lightbox
- `/catering` — mandi platters & event catering
- `/visit` — hours, address, map, phone, online ordering

## Business info
- 888 S Greenville Ave, Unit 210, Richardson, TX 75081 · (214) 377-7999
- Open daily 11 AM, late on weekends. 100% halal.

Food photography sourced from the restaurant's public listings; swap in
owner-provided assets under `public/img/` as they become available.

## Develop
```bash
npm install
npm run dev
npm run build
```
