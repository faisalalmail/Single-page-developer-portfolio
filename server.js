import http from 'node:http'
import cors from 'cors'
const PORT = 3000

const corsMiddleware = cors({
        origin: '*', // or 'http://example.com' or a function to allow specific origins
    methods: ['GET','POST','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: false, // if you need cookies/auth
})

const server = http.createServer((req, res) =>{

    corsMiddleware(req,res, ()=>{

    
    console.log("request arrived")
    res.end("Hello from the local server")
    })
})





server.listen(PORT, () => console.log(`Randevo on port: ${PORT}`))