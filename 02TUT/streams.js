const fs = require("fs");
const path = require("path");

const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
  encoding: "utf8",
});

const ws = fs.createWriteStream(path.join(__dirname, "files", "new-lorem.txt"));

// listener approach
// rs.on("data", (dataChunk) => {
//   ws.write(dataChunk);
// });

// pipe approach
rs.pipe(ws);

// catches uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Uncaught Exception: ${err}`);
});
