import { NextResponse } from "next/server";

export async function GET() {
  // Server-only endpoint to check whether required env vars are present.
  // DO NOT expose secrets in production. This route is intended for local debugging
  // and should be removed once you've validated env vars.
  const keys = [
    "AZURE_CLIENT_ID",
    "AZURE_CLIENT_SECRET",
    "AZURE_TENANT_ID",
    "REPORTS_FROM_EMAIL",
  ];

  const result: Record<string, boolean> = {};
  for (const k of keys) {
    result[k] = typeof process.env[k] !== "undefined" && process.env[k] !== "";
  }

  return NextResponse.json({ ok: true, present: result });
}
