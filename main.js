const fs = require("fs");
const { config } = require("process");

const getTimeStamp = () => {
  const date = new Date();
  return `${date.toDateString()}`;
};

const isNewDay = () => {
  const configFile = fs.readFileSync("./.config", "utf-8");
  const config = JSON.parse(configFile);
  const referenceTime = config.date;
  const day = 864000000;
  const today = new Date();
  const currentTime = today.getTime();

  return currentTime - referenceTime > day;
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
console.log(isNewDay());
