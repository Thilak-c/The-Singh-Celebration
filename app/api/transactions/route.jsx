import { MongoClient } from "mongodb";

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

// GET Method: Fetch all transactions
export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);

    const transactions = await db
      .collection("transactions")
      .find({})
      .sort({ date: -1 }) // Sort by date (latest first)
      .toArray();

    return new Response(JSON.stringify(transactions), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch transactions" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }


  
}

// POST Method: Add a new transaction
export async function POST(req) {
  const client = await clientPromise;
  const db = client.db(dbName);
  try {
  

    const body = await req.json(); // Parse the incoming JSON body

    // Insert the new transaction
    const result = await db.collection("transactions").insertOne(body);

    return new Response(
      JSON.stringify({
        success: true,
        insertedId: result.insertedId,
        message: "Transaction added successfully!",
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to add transaction" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
