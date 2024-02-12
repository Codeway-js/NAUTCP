
const keyboard = [
    ["²", "&", "é", '"', "'", "(", "-", "è", "_", "ç", "à", ")", "=", "backspace"],
    ["tab ", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$", "enter"],
    ["caps", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*", "enter"],
    ["maj", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!", "maj", "maj"],
    ["ctrl", "win", "alt", " ", " ", " ", " ", " ", " ", " ", "altgr", "fn", "rc", "ctrl"]
]
const movablekay = ["²", "&", "é", '"', "'", "(", "-", "è", "_", "ç", "à", ")", "=", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!",]
function shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}

function rdmy(x){
    let n = Math.random()
    switch(x){
        case 0:
            return n*13
        case 1:
        case 2:
            return 1+n*12
        case 3:
            return 1+n*11
    }
}


function shufflekeyboard(k,n){
    let nk= []
    console.timeLog("é")
    for(let i=0;i<k.length;i++){
        nk.push(k[i].slice())
    }
    console.timeLog("é")
    let x1 = Math.floor(Math.random()*4)
    let y1 = Math.floor(rdmy(x1))
    let x2 = Math.floor(Math.random()*4)
    let y2 = Math.floor(rdmy(x2))
    console.timeLog("é")
    nk[x1][y1]=k[x2][y2]
    nk[x2][y2]=k[x1][y1] 
    console.timeLog("é")
    return nk
}
console.time("é")
shufflekeyboard(keyboard,2)
console.timeEnd('é')