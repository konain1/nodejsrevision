const fs = require('fs')

let data = fs.readFileSync('../../book1.txt','utf-8')
// console.log(data)
// let bookCreated = fs.writeFileSync('./kitab.txt',`${data}`,{flag:'a'})

// Async

 let Data = fs.readFile('../../book1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
   console.log(data)
})

// because of async behavior it will show undefined
if(Data != undefined){

    console.log(Data)
}


fs.writeFile('async.txt',`${data}`,{flag:'a'},(err,ans)=>{
    if(err){
        console.log(err)
    }
})