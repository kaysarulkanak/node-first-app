const fs = require('fs')
fs.readFile("./test.txt", 'utf8',(err, data)=>{
    if(data){
        console.log(data)
    }

    if(err){
        console.log(err)
    }
});
fs.readFile("./test1.txt", 'utf8',(err,data)=>{
    if(data){
        fs.appendFile('./test1.txt', ' Hello World', ()=>{})
    }

    if(err){
        console.log(err)
    }
});


