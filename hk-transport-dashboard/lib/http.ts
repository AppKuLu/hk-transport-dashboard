export async function fetchText(url: string) { const res = await fetch(url, { cache: "no-store" }); if (!res.ok) throw new Error(`${res.status} ${url}`); return res.text(); }
export async function fetchJson(url: string) { const res = await fetch(url, { cache: "no-store" }); if (!res.ok) throw new Error(`${res.status} ${url}`); return res.json(); }
