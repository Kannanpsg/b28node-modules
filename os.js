const os = require("os");

console.log("Os version", os.version());
console.log("Free memory", os.freemem());
console.log("CPU", os.totalmem());
console.log("CPU", os.release());
console.log("load", os.loadavg());
console.log("Host", os.hostname());