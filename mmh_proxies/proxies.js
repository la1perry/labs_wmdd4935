const hapi=require('hapi');
const h2o2=require('h2o2');

const server= new hapi.Server();

server.connection({
  host:'localhost',
  post:Number(process.argv[2]||8080)
});

server.register(h2o2, (err)=>{
    if(err) throw err;
})

server.rout({
    method:'GET',
    path:'/proxy',
    handler:{
        proxy:{
        host:'127.0.0.1',
        port:65535}
    }
})
server.start((err)=>{
    if(err)throw err;
})