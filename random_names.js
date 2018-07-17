var letters=[
    "b",    "c",    "d",    "f",    "g",    "h",
    "j",    "k",    "l",    "m",    "n",    "p",
    "qu",    "r",    "s",    "t",    "v",    "w",
    "x",    "z",    "th",    "ch",    "sh",    "br",
    "dr",    "pr",    "tr",
]

var vowels=[
    "a",    "e",    "i",    "o",    "u",    "ai",
    "au",    "aw",    "ay",    "ea",    "ee",    "ei",
    "ew",    "ey",    "ie",    "oa",    "oe",    "oi",
    "oo",    "ou",    "ow",    "oy",    "ui",    "er",
    "ir",    "ur",    "or",
]

for (var i=0; i<50; i++){
    var len=Math.floor(Math.random()*10)+4;
    var str="";
    var letter=false;
    if (Math.random()<0.5){
        letter=true;
    }
    while (str.length<len){
        if (letter){
            str=str+letters[Math.floor(Math.random()*(letters.length-1))];
        } else {
            str=str+vowels[Math.floor(Math.random()*(vowels.length-1))];
        }
        letter=!letter;
    }
    console.log(str);
}