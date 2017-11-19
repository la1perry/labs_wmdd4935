const fs=require('fs');
const hapi=require('hapi');
const path=require('path');
const rot=require('rot13-transform');

const server=new hapi.Server();

server.connection({
    host:'localhost',
    port:Number(process.argv[2]||8080)
})
server.route({
    method:'GET',
    path:'/',
    config:{
        handler:(request,reply)=>{
            const file=fs.createReadStream(path.join(__dirname,'file.txt'));
            reply(file.pipe(rot()));
        }
    }
})
server.start((err)=>{
    if(err)throw err;
})