import 'dotenv/config'
import http from 'node:http'
import {sendTodb} from './utils/sendTodb.js'
import { sendToEmail } from './utils/sendToEmail.js'


const PORT = 3000

let jBody
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
jBody = JSON.parse(body);
console.log(jBody.name)
sendTodb(jBody).catch(console.dir);
sendToEmail(jBody);
})



/////
    
    console.log("request arrived")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.write("m2 m2")
    res.end("Hello from the local server")

})





server.listen(PORT, () => console.log(`Randevo on port: ${PORT}`))