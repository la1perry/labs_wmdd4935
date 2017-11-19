const http=require('http');
const bl=require('bl');
const dats=[];
let count=0;

function show(){
    for (let i=0;i<3;i++){
        console.log(dats[i]);
    }
}

function get(index){
    http.get(process.argv[2+index], function (response){
        response.pipe(bl(function(err,data){
            if(err)throw err;
            dats[index]=data.toString();
            count++;
            
            if (count ===3){
                show()
            }
        }))
    })
}
for(let i=0;i<3;i++){
    get(i);
}