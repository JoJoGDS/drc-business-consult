// src/app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ success: true });
  res.cookies.set("admin_auth", "", { maxAge: 0 }); // supprime le cookie
  return res;
}
