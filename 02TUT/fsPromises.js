const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    // read
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data);
    //delete
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    // write
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    // append
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\n\nNice to meet you."
    );
    // rename
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
  } catch (err) {
    console.log(err);
  }
};

fileOps();

// catches uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Uncaught Exception: ${err}`);
});
