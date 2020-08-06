const fs = require('fs')
fs.readFile("./test.txt", 'utf8',(err, data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});
fs.readFile("./test1.txt", 'utf8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        fs.appendFile('./test1.txt', ' Hello World', ()=>{})
    }
});


