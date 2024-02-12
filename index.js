
/**
 * {JSDoc}
 *
 * The splice() method changes the content of a string by removing a range of
 * characters and/or adding new characters.
 *
 * @this {String}
 * @param {number} start Index at which to start changing the string.
 * @param {number} delCount An integer indicating the number of old chars to remove.
 * @param {string} newSubStr The String that is spliced in.
 * @return {string} A new string with the spliced substring.
 */
String.prototype.splice = function (start, delCount, newSubStr) {
    return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};
function strNoAccent(a) {
    return a.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
// 14 premiere row
// 14 second (28 total)
// 14 3 (42 total)
// 14 4 (54 total)
// 8 last (64)

// dist 1-> 2 

const keyboard = [
    ["²", "&", "é", '"', "'", "(", "-", "è", "_", "ç", "à", ")", "=", "backspace"],
    ["tab ", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$", "enter"],
    ["caps", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*", "enter"],
    ["maj", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!", "maj", "maj"],
    ["ctrl", "win", "alt", " ", " ", " ", " ", " ", " ", " ", "altgr", "fn", "rc", "ctrl"]
]
const movablekay = ["²", "&", "é", '"', "'", "(", "-", "è", "_", "ç", "à", ")", "=", "a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!",]
const posfingerinit = [[2, 1], [2, 2], [2, 3], [2, 4], [2, 7], [2, 8], [2, 9], [2, 10], [4, 4], [4, 7]]

function keyboardhas(k, el) {
    let r = false
    for (let i = 0; i < 4; i++) {
        if (k[i].includes(el)) {
            r = true
        }
    }
    return r
}


function merge2keyboard(k1, k2, movablekay) {
    let r = []
    if (Math.random() > 0.5) {
        let allk = []
        for (let i = 0; i < 4; i++) {
            let s = []
            s = k1[i].slice(0, 8)

            r.push(s)
            allk.push(...s.filter((el) => movablekay.includes(el)))
            // console.log(Array.isArray(s), ...s.filter((el)=>movablekay.includes(el)))
        }
        // console.log(allk)
        let allkleft = k2.map((l) => l.filter((el) => ((!allk.includes(el)) && movablekay.includes(el)))).flat(Infinity)
        // console.log(allkleft)
        r[0].push(...allkleft.slice(0, 5), "backspace")
        r[1].push(...allkleft.slice(5, 10), "enter")
        r[2].push(...allkleft.slice(10, 15), "enter")
        r[3].push(...allkleft.slice(15), "maj", "maj")
    }
    else {
        let allk = []
        for (let i = 0; i < 4; i++) {
            let s = []
            s = k1[i].slice(8)

            r.push(s)
            allk.push(...s.filter((el) => movablekay.includes(el)))
            // console.log(Array.isArray(s), ...s.filter((el)=>movablekay.includes(el)))
        }
        // console.log(allk)
        let allkleft = k2.map((l) => l.filter((el) => ((!allk.includes(el)) && movablekay.includes(el)))).flat(Infinity)
        // console.log(allkleft)
        r[0].unshift(...allkleft.slice(0, 8))
        r[1].unshift("tab", ...allkleft.slice(8, 15))
        r[2].unshift("caps", ...allkleft.slice(15, 22))
        r[3].unshift("maj", ...allkleft.slice(22))
    }
    r[4] = ["ctrl", "win", "alt", " ", " ", " ", " ", " ", " ", " ", "altgr", "fn", "rc", "ctrl"]
    // swap two rdm key for eviting the case were to merge are equal
    let p1 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 11) + 1]
    let p2 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 11) + 1]
    while (p1 == p2) {
        p2 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 11) + 1]
    }
    let c = r[p1[0]][p1[1]]
    r[p1[0]][p1[1]] = r[p2[0]][p2[1]]
    r[p2[0]][p2[1]] = c

    return r

}

const dist2row = [
    0,
    0.5,
    0.75,
    0.25,
    0
]

function distbtwn2k(posf, posk) {
    return Math.sqrt((posf[1] + dist2row[posf[0]] - posk[1] - dist2row[posk[0]]) ** 2 + (posf[0] - posk[0]) ** 2)
}

// console.log(distbtwn2k([1, 7], [3, 7]))

const chapeaucirconf = ["â", "ô", "ê", "î", "û"]
const tremma = ["ä", "ö", "ë", "ü", 'ï']
const UPPER = 'AZERTYUIOPQSDFGHJKLMWXXCVBN'
const mappingUPPER = "°+¨£%µ>?./§1234567890"
const mapupper = {
    "1": "&",
    "2": "é",
    "3": '"',
    "4": "'",
    "5": "(",
    "6": "-",
    "7": "è",
    "8": "_",
    "9": "ç",
    "0": "à",
    "°": ")",
    "+": "=",
    "£": "$",
    "%": "ù",
    "µ": "*",
    ">": "<",
    "?": ",",
    ".": ";",
    "/": ":",
    "§": "!"
}

const altgr = "~#{[|`\\^@]}¤€"

const mapaltgr = {
    "~": "é",
    "#": '"',
    "{": "'",
    "[": "(",
    "|": "-",
    "`": "è",
    "\\": "_",
    "@": "à",
    "]": ")",
    "}": "=",
    "¤": "$",
    "€": "e"
}
/**
 * 
 * @param {String} stri 
 * @param {Array[Array]} keyboard
 */

function dist(stri, keyboard) {
    var posfinger = posfingerinit.map(function (arr) {
        return arr.slice();
    });
    let distance = 0
    let str = stri.split("")
    let dict = {}
    for (let i = 0; i < keyboard.length; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            dict[keyboard[i][j]] = [i, j]
        }
    }
    let prev = ""
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (prev == char) continue
        if (char == "\n") char = "enter"
        if (chapeaucirconf.includes(char.toLocaleLowerCase())) {
            str.splice(i + 1, 0, strNoAccent(char))
            char = "^"
        }
        else if (tremma.includes(char.toLocaleLowerCase())) {
            str.splice(i + 1, 0, "^" + strNoAccent(char))
            char = "maj"
        }
        else if (UPPER.includes(char)) {
            str.splice(i + 1, 0, char.toLocaleLowerCase())
            char = "maj"
        }
        else if (mappingUPPER.includes(char)) {
            str.splice(i + 1, 0, mapupper[char])
            char = "maj"
        }
        else if (altgr.includes(char)) {
            str.splice(i + 1, 0, mapaltgr[char])
            char = "altgr"
        }
        if (char == " ") continue
        let pos = dict[char]
        prev = char
        if (pos == undefined) {
            // console.log("do not find the", char)
        }
        else {
            let min = distbtwn2k(posfinger[0], pos)
            if (isNaN(min)) {
                console.log(posfinger[0], pos)
            }
            let ind = 0
            for (let j = 1; j < posfinger.length; j++) {
                let c = distbtwn2k(posfinger[j], pos)
                if (!isNaN(c)) {
                    if (c < min) {
                        min = c
                        ind = 1
                    }
                }
            }
            distance += isNaN(min) ? 0 : min
        }
    }
    return distance
}
// create à pop of 10 keyboard keep the 2 best and with the 5 best 
// create a children base on 2 keyboard

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


function createardmlayout() {
    // let keyboardtest = keyboard.map(function (arr) {return arr.slice();});
    let shuffledkey = shuffle(movablekay.slice())
    // console.log(shuffledkey, shuffledkey.slice(0, 13))
    let result = []
    let l = []
    l.push(...shuffledkey.slice(0, 13))
    l.push("backspace")
    result.push(l)
    l = ["tab"]
    l.push(...shuffledkey.slice(13, 25))
    l.push("enter")
    result.push(l)
    l = ["caps"]
    l.push(...shuffledkey.slice(25, 37))
    l.push("enter")
    result.push(l)
    l = ["maj"]
    l.push(...shuffledkey.slice(37))
    l.push("maj", "maj")
    result.push(l)
    result.push(["ctrl", "win", "alt", " ", " ", " ", " ", " ", " ", " ", "altgr", "fn", "rc", "ctrl"])
    return result
}






let rdmkeyboard = createardmlayout()
// console.table(rdmkeyboard)
// console.table(keyboard)
let merged = merge2keyboard(keyboard, rdmkeyboard, movablekay)
// console.table(merged)
// console.log(movablekay)
// console.log(dist(`La cigale, ayant chanté Tout l'été, Se trouva fort dépourvue Quand la bise fut venue : Pas un seul petit morceau De mouche ou de vermisseau. Elle alla crier famine Chez la fourmi, sa voisine, La priant de lui prêter Quelque grain pour subsister Jusqu'à la saison nouvelle. Je vous paierai, lui dit-elle, Avant l'août, foi d'animal, Intérêt et principal. La fourmi n'est pas prêteuse : C'est là son moindre défaut. Que faisiez-vous au temps chaud ? Dit-elle à cette emprunteuse. Nuit et jour à tout venant Je chantais, ne vous déplaise. Vous chantiez, j'en suis fort aise ! Eh bien ! dansez maintenant.`, keyboard))
// console.time("é")
// console.log(dist(`La cigale, ayant chanté Tout l'été, Se trouva fort dépourvue Quand la bise fut venue : Pas un seul petit morceau De mouche ou de vermisseau. Elle alla crier famine Chez la fourmi, sa voisine, La priant de lui prêter Quelque grain pour subsister Jusqu'à la saison nouvelle. Je vous paierai, lui dit-elle, Avant l'août, foi d'animal, Intérêt et principal. La fourmi n'est pas prêteuse : C'est là son moindre défaut. Que faisiez-vous au temps chaud ? Dit-elle à cette emprunteuse. Nuit et jour à tout venant Je chantais, ne vous déplaise. Vous chantiez, j'en suis fort aise ! Eh bien ! dansez maintenant.`, rdmkeyboard))
// console.timeEnd("é")

const fs = require("fs")
const txt = fs.readFileSync("./diabla.txt").toString().slice(0, 30_000)
console.log(dist(txt,keyboard))
// console.log(txt.slice(0,1000))
// console.time("é")
// let a=dist(txt.slice(0, 24000),keyboard)
// console.timeEnd("é")
// console.log(a)
// console.log(dist(txt, keyboard))


function train(movablekay) {
    const txt = fs.readFileSync("./diabla.txt").toString().slice(0, 24000)
    let keyboards = []
    for (let i = 0; i < 10; i++) {
        keyboards.push(createardmlayout())
    }
    let best = []
    let bestscore = Infinity
    for (let i = 0; i < 600; i++) {
        let nextgen = []
        let k = keyboards.map((k) => [dist(txt, k), k]).sort((a, b) => a[0] - b[0])
        // nextgen.push(k[0][1], k[1][1])
        if (k[0][0] == k[1][0]) {
            console.log('err', i)
            console.table(nextgen[0])
            console.table(nextgen[1])
            console.table(k)
            // return
        }
        // nextgen.push(merge2keyboard(k[0][1],k[1][1],movablekay))
        for (let j = 0; j < 5; j++) {
            for (let l = j + 1; l < 5; l++) {
                nextgen.push(merge2keyboard(k[j][1], k[l][1], movablekay))
            }
        }
        if (k[0][0] <= bestscore) {
            best = k[0][1]
            bestscore = k[0][0]
        } else {
            nextgen.pop()
            nextgen.unshift(best)
        }

        keyboards = nextgen
        if (i % 10 == 0) {
            console.table(nextgen[0])
            console.table(k)
            console.log(i)
        }
    }
    return [best, bestscore]
}

// train(movablekay)

function traindurringthenight(movablekay) {
    let result = []
    console.time("é")
    for (let i = 0; i < 50; i++) {
        console.time("a")
        result.push(train(movablekay))
        result.sort((a, b) => a[1] - b[1])
        console.log(i, "I8UDQsopkedlksqdlk")
        console.timeLog("a")
    }
    console.timeEnd("é")
    console.timeEnd()
    for (let i = 49; i >= 0; i--) {
        console.table(result[i][0])
        console.log(result[i][1])
    }

}

// traindurringthenight(movablekay)


function rdmy(x) {
    let n = Math.random()
    switch (x) {
        case 0:
            return n * 13
        case 1:
        case 2:
            return 1 + n * 12
        case 3:
            return 1 + n * 11
    }
}


function shufflekeyboard(k, n) {
    let nk = []
    for (let i = 0; i < k.length; i++) {
        nk.push(k[i].slice())
    }
    let x1 = Math.floor(Math.random() * 4)
    let y1 = Math.floor(rdmy(x1))
    let x2 = Math.floor(Math.random() * 4)
    let y2 = Math.floor(rdmy(x2))
    nk[x1][y1] = k[x2][y2]
    nk[x2][y2] = k[x1][y1]
    return nk
}

// console.table(shufflekeyboard(keyboard,10))


function trainmodify(ng = 10_000) {
    let keyboard = createardmlayout()
    let temp = 500
    const txt = fs.readFileSync("./diabla.txt").toString().slice(0, 30_000)
    let best = dist(txt, keyboard)
    let ak = keyboard
    let ab = best
    let ag = 0
    for (let i = 0; i < ng; i++) {
        let nk = shufflekeyboard(keyboard, 2)
        let nd = dist(txt, nk)
        let d = nd - best
        if (d < 0) {
            // console.log("new best, dist->", best, "to->", nd)
            keyboard = nk
            best = nd
            if (best < ab) {
                ak = keyboard
                ab = best
                ag=i
            }
        }
        else if (Math.exp((-d / temp)) > Math.random()) {
            keyboard = nk
            best = nd
        }
        if (i % 20 == 0) {
            temp *= 0.99
            if (Math.random() < 0.5) {
                keyboard = nk
                best = nd
            }

        }
        if (i % 1000 == 0) {
            console.table(keyboard)
            console.log(i)
        }
    }
    console.log(ab,ag)
    return [ak,ab]
}
// console.time("é")
// console.table(trainmodify())
// console.timeEnd("é")
// Int  maximum(2,   minimum(floor(temperature/100), 46)  )



function trainmodifydurringthenight(h){
    let result = []
    console.time("é")
    for (let i = 0; i < h*17; i++) {
        console.time("a")
        result.push(trainmodify())
        result.sort((a, b) => a[1] - b[1])
        console.log(i, "I8UDQsopkedlksqdlk")
        console.timeLog("a")
        fs.writeFileSync("./db.json",JSON.stringify({"result":result}))
        console.timeEnd("a")
    }
    console.timeEnd("é")
    console.log(result)
    for (let i = result.length-1; i >= 0; i--) {
        console.table(result[i][0])
        console.log(result[i][1])
    }
}

// trainmodifydurringthenight(8)