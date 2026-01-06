import { clientFetch, ENDPOINTS } from "@/api";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies();
    const { searchParams } = new URL(req.url);
    const day = searchParams.get("day");

    if (!day) {
      return Response.json({ error: "Day parameter is required" }, { status: 400 });
    }
    const response = await clientFetch(ENDPOINTS.getVisits(day), {
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
      { error: "Failed to get reserved visits" },
      { status: statusCode }
    );
  }
}

