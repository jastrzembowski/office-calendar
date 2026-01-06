import { clientFetch, ENDPOINTS } from "@/api";

import { cookies } from "next/headers";

export async function POST(req: Request) {
    try {
        const cookieStore = await cookies();
        const { day } = await req.json();
        const response = await clientFetch(ENDPOINTS.closeDay(day), {
            method: "POST",
            headers: {
                Authorization: `Bearer ${cookieStore.get("session")?.value || ""}`,
            },
        });

        return Response.json({ success: true });
    } catch (error) {
        const statusCode = error instanceof Error && error.message.includes("status:") 
            ? parseInt(error.message.match(/status: (\d+)/)?.[1] || "500")
            : 500;
        return Response.json(
            { success: false, error: "Failed to close day" },
            { status: statusCode }
        );
    }
}