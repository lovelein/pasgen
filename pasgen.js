const chars= [
    [ "thumb"],
    [ "cart" ],
    [ "minute" ],
    [ "board"],
    [ "flood" ],
    [ "unequaled" ],
    [ "stroke" ],
    [ "note"],
    [ "measure" ],
    [ "crooked" ],
    [ "acrid" ],
    [ "kick" ],
    [ "cemetery" ],
    [ "reward" ],
    [ "hang" ],
    [ "rail" ],
    [ "rainstorm" ],
    [ "request" ],
    [ "force" ],
    [ "train" ],
    [ "watch" ],
    [ "tangy" ],
    [ "precede" ],
    [ "wren" ],
    [ "toy" ],
    [ "dirt"],
    [ "wonderful" ],
    [ "ossified" ],
    [ "sudden" ],
    [ "brass" ],
    [ "part"],
    [ "quack" ],
    [ "chop" ],
    [ "short"],
    [ "liquid"],
    [ "solid"],
    [ "breezy" ],
    [ "milk" ],
    [ "bread" ],
    [ "serious" ]
];

const charNum = document.getElementById("charNum");
const submit = document.getElementById("submit");
const yourPw = document.getElementById("yourPw");

submit.addEventListener("click",function(e){
    yourPw.value = pas(charNum.value, chars);
});

let pas = (length,characters)=>  {
    let pas = "";

    for(let i = 0; i<length; i++){
        pas += characters[(Math.floor(Math.random() * characters.length))];
    }
    return pas;
};
