const http=require('http')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':"text/plain"})
    res.end('Helo\n')
})

const PORT=3000
server.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})