// app/api/admin/recent/route.js
import { MongoClient } from "mongodb";

export async function GET() {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    const db = client.db(process.env.MONGO_DB);
    const collection = db.collection("messages");

    const recentMessages = await collection.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .toArray();

    return new Response(JSON.stringify({ recentMessages }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch recent messages." }), {
      status: 500,
    });
  } finally {
    await client.close();
  }
}
