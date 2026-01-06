import { clientFetch, ENDPOINTS } from "@/api";

import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const { day, slots } = await req.json();
    const response = await clientFetch(ENDPOINTS.unblockSlots(day), {
      method: "POST",
      body: JSON.stringify({ from: slots.from, to: slots.to }),
      headers: {
        Authorization: `Bearer ${cookieStore.get("session")?.value || ""}`,
      },
    });
    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    const statusCode = error instanceof Error && error.message.includes("status:") 
      ? parseInt(error.message.match(/status: (\d+)/)?.[1] || "500")
      : 500;
    return Response.json(
      { error: "Failed to unblock slots" },
      { status: statusCode }
    );
  }
}
