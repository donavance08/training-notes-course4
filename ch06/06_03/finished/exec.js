const cp = require("child_process");

/* 
  Node.js comes with a “child_process” module which allow you to execute external 
  processes to your environment, which allows your Node.js app to communicate with 
  other app w/in the environment that it's hosted.

  cp.exec("open http://www.linkedin.com/learning");

  cp.exec("ls", (err, data) => {
    if (err){
      throw err;
    }

    console.log(data)
  })

*/


// we can also use exec to run a process that created, in this case readStream
cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});
