const fs = require("fs");

// To create a new writeStream
const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

// This will write contents of the readstream directly to the writeStream output file. 
readStream.pipe(writeStream);


// This will write "hello" the output file "./assets/myFile.txt"
// writeStream.write("hello")

/* 
    * To listen for user input and automatically write it to the output file
    * Will append new input to end of file

    process.stdin.on("data", data => {
        writeStream.write(data);
    });
*/




