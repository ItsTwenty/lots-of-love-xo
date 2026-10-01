export async function POST() {
  return Response.json({ error: "Uploads are handled in the browser in this Vercel preview." }, { status: 410 });
}
