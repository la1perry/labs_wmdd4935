const net = require('net');

function modify(i){
    return(i<10?'0':'')+i
}


function time(){
    const date=new Date();
    return date.getFullYear()+'-'+
    modify(date.getMonth()+1)+'-'+
    modify(date.getDate())+' '+
    modify(date.getHours())+':'+
    modify(date.getMinutes())
}

const server= net.createServer(function(socket){
    socket.end(time()+'\n')
})
server.listen(Number(process.argv[2]))