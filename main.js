const fs = require("fs");

const logData = (logFile, entryToLog) => fs.appendFileSync(logFile, entryToLog);
const isSameDay = (date, currentDate) => date === currentDate;

const getTimeStamp = () => {
  const configFile = "./.config";
  const data = fs.readFileSync(configFile, "utf-8");
  const config = JSON.parse(data);
  const date = config.date;
  const today = new Date();
  const currentDate = today.toDateString();

  if (isSameDay(date, currentDate)) {
    return `\t\t->`;
  }

  config.date = currentDate;
  fs.writeFileSync(configFile, JSON.stringify(config));
  
  return `\n${currentDate} :\n\t\t->`;
};

const main = () => {
  const logFile = "log.txt";
  const dataToLog = process.argv[2];

  const entryToLog = `${getTimeStamp()} ${dataToLog}\n`;

  logData(logFile, entryToLog);
};

main();