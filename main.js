const fs = require("fs");

const append = function (logFile, logs, today, todayLog) {
  let newLog = logs;
  newLog += today + " : ";
  newLog += todayLog;
  newLog += "\n";

  fs.writeFileSync(logFile, newLog);
}

const main = function () {
  const logFile = "log.txt";
  const logs = fs.readFileSync(logFile, "utf-8");

  const date = new Date();
  const today = `${date.toDateString()}`;

  const todayLog = process.argv[2];
  append(logFile, logs, today, todayLog);
}

main();