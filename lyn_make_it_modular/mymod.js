const fs=require('fs');
const path=require('path');

module.exports=function(directory, extension, callback){
    
fs.readdir(directory, function (err, list){
    if(err){
        return callback(err);
    }else{
        list=list.filter(function(file){
            return path.extname(file)==="."+extension
        })
    // let files=[];
    // for(let i=0;i<=list.length; i++){
    //     if(path.extname(list[i])==="."+extension){
    //         files.push(list[i]);
    //     }
    // }
    callback(null, list);
    }
});

};