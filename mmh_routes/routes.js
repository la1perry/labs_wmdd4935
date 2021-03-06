const Hapi=require('hapi');

const server= new Hapi.Server();
server.connection({
    host:'localhost',
    port:Number(process.argv[2] || 8080)
});

server.route({
    method:'GET',
    path:'/{name}',
    handler:(request,reply)=>{
        reply('Hello ' + request.params.name);
    }
    
});

server.start((err)=>{
    if(err) {throw (err);}
    console.log('server is running at', server.info.uri);
    
});