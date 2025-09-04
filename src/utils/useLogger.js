// src/utils/useLogger.js
export function useLogger() {
  return function log(message) {
    // Example: save logs to localStorage array called "logs"
    let logs = JSON.parse(localStorage.getItem("logs") || "[]");
    logs.push({ timestamp: new Date().toISOString(), message });
    localStorage.setItem("logs", JSON.stringify(logs));
  };
}
