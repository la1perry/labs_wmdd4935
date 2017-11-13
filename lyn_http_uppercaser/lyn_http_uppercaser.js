const http=require('http');
const map=require('through2-map');

const server=http.createServer((req,res)=>{
    if(req.method !== 'POST'){
        return res.end("error")
    }
    req.pipe(map(function(chunk){
        return chunk.toString().toUppercase();
        
    })).pipe(res);
});
server.listen(Number(process.argv[2]));