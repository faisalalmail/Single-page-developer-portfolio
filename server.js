import http from 'node:http'
import mongoose, { Mongoose } from 'node:mongoose';

const PORT = 3000


const server = http.createServer((req, res) =>{
    const { method, url} = req;

    console.log( method + url)
    const { headers } = req;
    const userAgent = headers['user-agent'];
    console.log(userAgent)
    let body = ''

    req.on('data', chunk => {
        console.log(chunk)
        body += chunk.toString()})
    req.on('end', () => { console.log('Body:', body); 
        // Now you'll see "test"
      //res.end('Received: ' + body);
    });

req.on('end', () => {
let jBody = JSON.parse(body);
console.log(jBody.name)
})


////////
// Replace the following with your Atlas connection string
const uri = 'mongodb+srv://faisalyounis90_db_user:2x0kTV4fa93uShX2@cluster0.qmelyqf.mongodb.net/test?retryWrites=true&w=majority';
async function run() {
  const client = new Mongodb(uri);
  try {
    await client.connect();
    const database = client.db('personal-site');
    const collection = database.collection('contact form entries');
    // Insert a single document
    const result = await collection.insertOne({
      name: "John Doe",
      email: "john.doe@example.com",
      age: 30
    });
    console.log('Inserted document id:', result.insertedId);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

/////
    
    console.log("request arrived")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.write("m2 m2")
    res.end("Hello from the local server")

})





server.listen(PORT, () => console.log(`Randevo on port: ${PORT}`))