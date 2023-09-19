const fs = require('fs');

let data = "Dario is niet zo slim."

fs.writeFileSync("theFile.txt", data);