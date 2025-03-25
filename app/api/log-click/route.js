
import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

export async function POST(request) {
const uri = "mongodb://localhost:27017/the-singh-celebration"
const dbName = "the-singh-celebration"

let client;
let clientPromise;

// Reuse the MongoClient instance
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

  try {
    const body = await request.json();

    const  phoneNumber  = 7979962614;// Replace with your database name
    const collection = dbName.collection("clickLogs");

    // Insert the log data into the collection
    await collection.insertOne({
      phoneNumber,
      clickedAt: new Date(),
    });

    return NextResponse.json({ message: "Click logged successfully!" });
  } catch (error) {
    console.error("Error logging click:", error);
    return NextResponse.json(
      { error: "Failed to log click." },
      { status: 500 }
    );
  }
}
