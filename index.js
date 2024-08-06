const fs = require('fs');
const path = require('path');
const logDirectory = path.join(__dirname, 'logs'); // Define the logDirectory
const logFilePath = path.join(logDirectory, 'app.log');

function logInfo(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} | INFO | ${message}\n`; // Fixed log level and added newline
  fs.appendFileSync(logFilePath, logEntry);
}

function logWarning(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} | WARNING | ${message}\n`; // Fixed log level and added newline
  fs.appendFileSync(logFilePath, logEntry);
}

function logError(message) {
  const timestamp = new Date().toISOString();
  const logEntry = `${timestamp} | ERROR | ${message}\n`; // Fixed log level and added newline
  fs.appendFileSync(logFilePath, logEntry);
}

// Test the functions
logInfo("This is an info message");
logWarning("This is a warning message");
logError("This is an error message");

module.exports = {
  logInfo,
  logWarning,
  logError,
};
