const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

let fileTxt = "";

console.log("type something...");

// this will listen for data event and print it everytime
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  fileTxt += data;
});

// this will listen for event one time
readStream.once("data", data => {
  console.log(data);
});

// we can use readStream.end event to listen for when the stream has completed
readStream.on("end", () => {
  console.log("finished reading file");
  console.log(`In total I read ${fileTxt.length - 1} characters of text`);
});

/* 
  ?? I think that writing in stream allows write to be done in batches while fs.write does it right away every line. 
*/
