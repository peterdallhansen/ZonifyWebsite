import { getNewsPosts } from "@/lib/news";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getNewsPosts();
  return NextResponse.json(posts);
}
