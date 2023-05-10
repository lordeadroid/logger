const fs = require("fs");

const append = function (logFile, logs, todayLog) {
  let newLog = "";

  newLog += logs;
  newLog += "\n";
  newLog += todayLog;

  fs.writeFileSync(logFile, newLog);
}

const main = function () {
  const logFile = "log.txt";
  const logs = fs.readFileSync(logFile, "utf-8");

  const todayLog = process.argv[2];
  append(logFile, logs, todayLog);
}

main();
