//Creating a File 
const fs = require("fs")


//Writing in File
fs.writeFile("./notes.txt","Hello, this is a Node.js file!",(err)=>{
    if (err) {
        console.log(err);
    } 
    else {
        console.log("File successfully made ..!!!"); 
    }
})


//Read content of File
fs.readFile("./notes.txt",{encoding : "utf-8"},(err,data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
})



//Append in File 
fs.appendFile("./notes.txt","\nNew text",(err) => {
    if (err) {
        console.log(err);
    } 
    else {
        console.log("Data Added..!!");
    }
})