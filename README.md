# Ganesh Pendyala - 3D Portfolio

An interactive portfolio built with React, Three.js and React Three Fiber. Scrolling flies a camera
through a small planetary system; each planet is a section (About, Skills, Projects, Contact).

## Getting started

```bash
yarn install
yarn dev        # http://localhost:5173
yarn build      # production build in dist/
yarn preview    # serve the production build
```

## Contact form server

The form posts to a small Express + Nodemailer server in `server/`. Credentials come from
environment variables and are never stored in the repo.

```bash
cd server
yarn install
cp .env.example .env     # fill in SMTP_USER, SMTP_PASS (a Gmail App Password), MAIL_TO
yarn start               # http://localhost:5000
```

The server validates input, rate-limits to 5 requests per 15 minutes per IP, and only accepts
requests from `CORS_ORIGIN`. To point the frontend at a deployed server, copy `.env.example` to
`.env` in the project root and set `VITE_CONTACT_API_URL`.

## Structure

```
src/
  App.jsx                  Composes the 3D scene and the DOM overlay
  main.jsx                 Entry point
  config/                  Tunable constants (camera stops, planets, stars, scroll ranges)
  hooks/                   useScrollProgress
  utils/                   Scroll helpers
  data/                    Page content (content.js, contact.js)
  components/scene/        Three.js components (Scene, Planet, PlanetRing, CameraRig)
  components/overlay/      HTML panels, nav and form drawn over the canvas
  styles/                  global.css, overlay.css
server/                    Contact form email server (Express + Nodemailer)
docs/                      Reference design for the hero
public/                    Static assets (favicon, resume PDF)
```

## Customising

- Edit text, skills and projects in `src/data/content.js`; contact links in `src/data/contact.js`.
- Change planets, camera path and stars in `src/config/scene.js`.
- Change where each section sits on the scroll in `src/config/scroll.js`.