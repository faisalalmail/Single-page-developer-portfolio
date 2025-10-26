import { MongoClient,ServerApiVersion } from 'mongodb';


const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_PASS}@cluster0.qmelyqf.mongodb.net/test?retryWrites=true&w=majority`;
export async function sendTodb(jBody) {

    console.log("insert function here =)")
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db(process.env.DB_NAME);
    const collection = database.collection(process.env.collection);
    // Insert a single document
    const result = await collection.insertOne(jBody);
    console.log('Inserted document id:', result.insertedId);
  } finally {
    await client.close();
  }
}

