import { clientFetch, ENDPOINTS } from "@/api";
import { cookies } from "next/headers";

export async function PATCH(req: Request) {
  try {
    const cookieStore = await cookies();
    const { visitId, reason } = await req.json();
    const response = await clientFetch(ENDPOINTS.cancelVisit(visitId), {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${cookieStore.get("session")?.value || ""}`,
      },
      body: JSON.stringify({ reason }),
    });
    const data = await response.json();
    
    if (data.canceledAt) {
      return Response.json({ ok: true });
    } else {
      return Response.json({ error: "Failed to cancel visit" }, { status: 500 });
    }
  } catch (error) {
    const statusCode = error instanceof Error && error.message.includes("status:") 
      ? parseInt(error.message.match(/status: (\d+)/)?.[1] || "500")
      : 500;
    return Response.json(
      { error: "Failed to cancel visit" },
      { status: statusCode }
    );
  }
}