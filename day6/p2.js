const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    {
        let body='';
        req.on('data',chunk=>{
            body+=chunk;

        });
        req.on('end',{}=>{
           let data=JSON.parse(body);
           console.log(data);
           res,end(JSON.stringify({message:'Data recieved'}));
        });
    }
})