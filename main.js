const fs = require("fs");

const getTimeStamp = () => {
  const date = new Date();
  return `${date.toDateString()}`;
};

const isNewDay = () => {
  const configFile = fs.readFileSync("./.config", "utf-8");
  const {date} = JSON.parse(configFile);
  const today = new Date();

  return date === today.getDate();
};

const logData = (logFile, entryToLog) => fs.appendFileSync(logFile, entryToLog);

const main = function () {
  const logFile = "log.txt";
  const logs = fs.readFileSync(logFile, "utf-8");
  const dataLog = process.argv[2];
  const timeStamp = getTimeStamp();
  const entryToLog = `${timeStamp} : ${dataLog}\n`;

  logData(logFile, entryToLog);
};

main();