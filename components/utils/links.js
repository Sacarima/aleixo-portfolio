// utils/links.js
const OWN_DOMAIN = "joaosacarimaaleixo.com";

export function normalizeHref(raw) {
  if (!raw) return "/";

  let href = String(raw).trim();

  // If missing protocol AND not already relative, force https://
  if (!/^https?:\/\//i.test(href) && !href.startsWith("/")) {
    href = `https://${href.replace(/^\/+/, "")}`;
  }

  // If points to *your* domain, convert to a relative path for Next's router
  try {
    const u = new URL(href);
    const host = u.hostname.replace(/^www\./, "").toLowerCase();
    if (host === OWN_DOMAIN) {
      href = (u.pathname || "/") + (u.search || "") + (u.hash || "");
    }
  } catch {
    // ignore parse errors (likely already relative)
  }

  return href;
}

export function isExternal(href) {
  return /^https?:\/\//i.test(href);
}
