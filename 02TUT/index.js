const fs = require("fs");
const path = require("path");

// read
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  }
);

// write
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Nice to meet you.",
  (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Write complete");
    }

    // append
    fs.appendFile(
      path.join(__dirname, "files", "reply.txt"),
      "\n\nAppending text.",
      (err) => {
        if (err) {
          throw err;
        } else {
          console.log("Append complete");
        }
      }
    );
  }
);

// catches uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Uncaught Exception: ${err}`);
});
