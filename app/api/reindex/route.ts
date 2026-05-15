import { NextResponse } from "next/server";
import { reindexRequestSchema } from "@/lib/validation";
import { reindexWebsiteKnowledge } from "@/lib/knowledge";

export async function POST(request: Request) {
  const token = request.headers.get("x-reindex-token");
  const expectedToken = process.env.REINDEX_SECRET;

  if (expectedToken && token !== expectedToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const parsed = reindexRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid reindex request." }, { status: 400 });
  }

  const result = await reindexWebsiteKnowledge();
  return NextResponse.json({ success: true, ...result });
}