// function logInfo(message) {
  
// }

// function logWarning(message) {
// }

// function logError(message) {
// }

// logInfo("This is an info message");
// logWarning("This is a warning message");
// logError("This is an error message");

// module.exports = {
//   logInfo,
//   logWarning,
//   logError,
// };

// const fs = require('fs');
// const path = require('path');

// const logFilePath = path.join(__dirname, 'logs', 'app.log');

// function writeLog(level, message) {
//   const timestamp = new Date().toISOString();
//   const logMessage = `${timestamp} | ${level} | ${message}\n`;
  
//   const logDir = path.dirname(logFilePath);
//   if (!fs.existsSync(logDir)) {
//     fs.mkdirSync(logDir, { recursive: true });
//   }

//   fs.appendFileSync(logFilePath, logMessage, 'utf8');
// }

// function logInfo(message) {
//   writeLog('INFO', message);
// }

// function logWarning(message) {
//   writeLog('WARNING', message);
// }

// function logError(message) {
//   writeLog('ERROR', message);
// }

// logInfo('This is an info message');
// logWarning('This is a warning message');
// logError('This is an error message');

// module.exports = {
//   logInfo,
//   logWarning,
//   logError,
// };


const fs = require('fs');
const path = require('path');

const logDirPath = path.join(__dirname, 'logs');
const logFilePath = path.join(logDirPath, 'app.log');
const tempInfoLogPath = path.join(logDirPath, 'info.log');
const tempWarningLogPath = path.join(logDirPath, 'warning.log');
const tempErrorLogPath = path.join(logDirPath, 'error.log');

function writeLog(tempFilePath, level, message) {
  const timestamp = new Date().toISOString();
  const logMessage = `${timestamp} |\n${level} |\n${message}\n`;

  if (!fs.existsSync(logDirPath)) {
    fs.mkdirSync(logDirPath, { recursive: true });
  }

  fs.appendFileSync(tempFilePath, logMessage, 'utf8');
}

function logInfo(message) {
  writeLog(tempInfoLogPath, 'INFO', message);
}

function logWarning(message) {
  writeLog(tempWarningLogPath, 'WARNING', message);
}

function logError(message) {
  writeLog(tempErrorLogPath, 'ERROR', message);
}
function consolidateLogs() {
  const logFiles = [tempInfoLogPath, tempWarningLogPath, tempErrorLogPath];

  logFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8');
      fs.appendFileSync(logFilePath, data);
      fs.unlinkSync(filePath); // Delete the temporary log file
    }
  });
}

consolidateLogs();
// Call the logging functions
logInfo('This is an info message');
logWarning('This is a warning message');
logError('This is an error message');

module.exports = {
  logInfo,
  logWarning,
  logError,
};
