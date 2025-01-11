import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

const allowedCollections = [
  "projects",
  "skills",
  "experience",
  "education",
  "socialLinks",
];

export async function GET(request, { params }) {
  const { collection } = await params;

  if (!allowedCollections.includes(collection)) {
    return NextResponse.json({ error: "Invalid collection" }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db("portfolio");

    const items = await db.collection(collection).find({}).toArray();

    return NextResponse.json({ [collection]: items });
  } catch (e) {
    console.error(`GET /api/${collection} error:`, e);
    return NextResponse.json(
      { error: `Failed to fetch ${collection}`, details: e.message },
      { status: 500 },
    );
  }
}
