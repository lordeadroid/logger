const fs = require("fs");

const getTimeStamp = () => {
  const date = new Date();
  return `${date.toDateString()}`;
};

const logData = function (logFile, entryToLog) {
  fs.appendFileSync(logFile, entryToLog);
};

const main = function () {
  const logFile = "log.txt";
  const logs = fs.readFileSync(logFile, "utf-8");
  const dataLog = process.argv[2];
  const timeStamp = getTimeStamp();
  const entryToLog = `${timeStamp} : ${dataLog}\n`;

  logData(logFile, entryToLog);
}

main();