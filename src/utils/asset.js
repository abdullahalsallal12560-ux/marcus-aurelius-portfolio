// Files in public/ are copied verbatim and are referenced by absolute URL, so
// Vite never rewrites those strings the way it rewrites imported assets. On a
// host that serves the site from a sub-path, GitHub Pages serves this repo
// from /marcus-aurelius-portfolio/, a bare "/videos/x.mp4" resolves against
// the domain root and 404s. Routing every public asset through here keeps the
// same source working at a domain root and under a sub-path alike.
export function asset(path) {
  return import.meta.env.BASE_URL + String(path).replace(/^\//, "");
}
