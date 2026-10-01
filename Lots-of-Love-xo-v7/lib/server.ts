export function db(): never {
  throw new Error("Server database storage is disabled in the Vercel preview.");
}

export function identity(req: Request) {
  const cookie = req.headers.get("cookie")?.match(/(?:^|; )love_session=([a-f0-9-]{36})(?:;|$)/)?.[1];
  const id = cookie || crypto.randomUUID();
  return {
    owner: `guest:${id}`,
    cookie: cookie ? "" : `love_session=${id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=2592000${new URL(req.url).protocol === "https:" ? "; Secure" : ""}`,
  };
}

export function respond(data: unknown, cookie = "", status = 200) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store", ...(cookie ? { "Set-Cookie": cookie } : {}) } });
}

export function checkOrigin(req: Request) {
  const origin = req.headers.get("origin");
  if (origin && origin !== new URL(req.url).origin) throw Error("Request origin is not allowed.");
}
