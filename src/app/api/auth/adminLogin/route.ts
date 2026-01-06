import { adminLogin } from "@/api/api";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const response = await adminLogin(email, password);

  if (response.success) {
    const token = response.data.accessToken;

    const res = NextResponse.json({ ok: true });
    res.cookies.set("session", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });
    return res;
  }
  return NextResponse.json({ error: response.error }, { status: 401 });
}
