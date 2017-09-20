const fs=require('fs');
const file=fs.readFileSync(process.argv[2]);


    const lines=file.toString().split("\n").length-1;
    console.log(lines);
