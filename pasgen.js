const chars= [
    [ "a"],
    [ "ae" ],
    [ "ah" ],
    [ "ai"],
    [ "b" ],
    [ "c" ],
    [ "ch" ],
    [ "d"],
    [ "e" ],
    [ "ee" ],
    [ "ei" ],
    [ "f" ],
    [ "g" ],
    [ "gh" ],
    [ "h" ],
    [ "i" ],
    [ "ie" ],
    [ "j" ],
    [ "k" ],
    [ "l" ],
    [ "m" ],
    [ "n" ],
    [ "ng" ],
    [ "o" ],
    [ "oh" ],
    [ "oo"],
    [ "p" ],
    [ "ph" ],
    [ "qu" ],
    [ "r" ],
    [ "s"],
    [ "sh" ],
    [ "t" ],
    [ "th"],
    [ "u"],
    [ "v"],
    [ "w" ],
    [ "x" ],
    [ "y" ],
    [ "z" ]
];
const num = '0123456789';

const charNum = document.getElementById("charNum");
const numBox = document.getElementById("num");
const submit = document.getElementById("submit");
const yourPw = document.getElementById("yourPw");

submit.addEventListener("click",function(e){
    let characters = chars;
    (numBox.checked) ? characters += num : '';
    yourPw.value = pas(charNum.value, characters);
});

let pas = (length,characters)=>  {
    let pas = "";
    for(let i = 0; i<length; i++){
        pas += characters[(Math.floor(Math.random() * characters.length))];
    }
    return pas;
};
