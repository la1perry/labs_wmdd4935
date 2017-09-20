const fs=require('fs');
const file=process.argv[2];
const ext='.'+process.argv[3];
const path=require('path');


fs.readdir(file, function(err, files){
    if(err){
        console.log('error');
    }
    for(let i=0;i<=files.length; i++){
        if(path.extname(files[i])===ext){
            console.log(files[i]);
        }
    }
})