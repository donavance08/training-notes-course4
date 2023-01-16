const cp = require("child_process");

// spawn() is used for asynchronous process 

// const questionApp = cp.spawn(app, [list of arguments]);
const questionApp = cp.spawn("node", ["questions.js"]);

// Create a dummy answer
questionApp.stdin.write("Alex \n");
questionApp.stdin.write("Tahoe \n");
questionApp.stdin.write("Change the world \n");

questionApp.stdout.on("data", data => {
  console.log(`from the question app: ${data}`);
});

questionApp.on("close", () => {
  console.log(`questionApp process exited`);
});
