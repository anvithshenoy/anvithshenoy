import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

const allowedCollections = [
  "projects",
  "skills",
  "experience",
  "education",
  "socialLinks",
];

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const data = await Promise.all(
      allowedCollections.map(async (collection) => {
        const items = await db.collection(collection).find({}).toArray();
        return { [collection]: items };
      }),
    );

    const responseData = data.reduce((acc, curr) => ({ ...acc, ...curr }), {});

    return NextResponse.json(responseData);
  } catch (e) {
    console.error("GET /api/data error:", e);
    return NextResponse.json(
      { error: "Failed to fetch data", details: e.message },
      { status: 500 },
    );
  }
}
