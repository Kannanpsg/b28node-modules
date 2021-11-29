const fs = require("fs");

fs.readFile("./welcome.txt","utf-8", (err, data) => {
    console.log(data);
});

const quote = "Never ever give up"

fs.writeFile("./awesome.txt", quote, (err) => {
    console.log("Completed writing");
});

