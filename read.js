// const fs = require("fs")

// const txt = fs.readFileSync("./db.json").toString()

// const obj = JSON.parse(txt)

// for(let i=obj.result.length-1;i>=0;i--){
//     console.table(obj.result[i][0])
//     console.log(obj.result[i][1])
// }

const keyboard = [
    ["²", "&", "é", '"', "'", "(", "-", "è", "_", "ç", "à", ")", "=", "backspace"],
    ["tab ", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$", "enter"],
    ["caps", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*", "enter"],
    ["maj", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!", "maj", "maj"],
    ["ctrl", "win", "alt", " ", " ", " ", " ", " ", " ", " ", "altgr", "fn", "rc", "ctrl"]
]
console.table(keyboard)