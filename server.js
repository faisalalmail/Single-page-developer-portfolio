import http from 'node:http'

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
      res.end('Received: ' + body);
    });


/*     let body = [];
    req.on('data', chunk => { body.push(chunk)})
    .on('end', () => {body = Buffer.concat(body).toString()})
    console.log(body + 'should be body')
    req.on('error', err => console.error(err.stack)) */

    
    
    //console.log(req)



    
    console.log("request arrived")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.end("Hello from the local server")

})





server.listen(PORT, () => console.log(`Randevo on port: ${PORT}`))