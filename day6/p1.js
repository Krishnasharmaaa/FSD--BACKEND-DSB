const http=require('http');
const server=http.createServer((req,rs)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url=='/Home'){
        res.end(`<h1>Welcome to home page</h1>`);
    }
    else if(req.url=='/about'){
        res.end(`<h1>About page</h1>`);
    }
    else if(req.url=='/contact'){
        res.end(`<h1>Wlcome to contact page</h1>`);
    }
    else {
        res.end(`<h1>page no found</h1>`);
    }
});
server.listen(9000,(err)=>{
    if(err)
        console.log("Error starting server",err);
    else
        console.log("Server started on port 9000");
});