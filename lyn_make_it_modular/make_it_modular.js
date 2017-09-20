const mymod=require('./mymod');
const extension=process.argv[3];
const directory=process.argv[2];

mymod(directory, extension, function(err, list){
    
    if (err){
         return console.log('error');
    }else {
    list.forEach(function(file){
        console.log(file);
    });
    }
});
