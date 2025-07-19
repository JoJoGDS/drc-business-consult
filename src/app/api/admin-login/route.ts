import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });

    // On met un cookie admin_auth valide
    res.cookies.set("admin_auth", "true", {
      httpOnly: true,
      maxAge: 60 * 60 * 8, // 8h
    });

    return res;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
