let display = document.querySelector('[name="display"]');
let one = document.querySelector('[name="1"]');
let two = document.querySelector('[name="2"]');
let three = document.querySelector('[name="3"]');
let four = document.querySelector('[name="4"]');
let five = document.querySelector('[name="5"]');
let six = document.querySelector('[name="6"]');
let seven = document.querySelector('[name="7"]');
let eight = document.querySelector('[name="8"]');
let nine = document.querySelector('[name="9"]');
let point = document.querySelector('[name="."]');
let ac = document.querySelector('[name="AC"]');
let zero = document.querySelector('[name="0"]');
let equal = document.querySelector('[name="="]');

let doublezero = document.querySelector('[name="00"]');
one.onclick = function(){
    display.value += one.value;
}
two.onclick = function(){
    display.value += two.value
}
three.onclick = function(){
    display.value += three.value
}
four.onclick = function(){
    display.value += four.value
}
five.onclick = function(){
    display.value += five.value
}
six.onclick = function(){
    display.value += six.value
}
seven.onclick = function(){
    display.value += seven.value
}
eight.onclick = function(){
    display.value += eight.value
}
nine.onclick = function(){
    display.value += nine.value
}
zero.onclick = function(){
    display.value += zero.value
}
doublezero.onclick = function(){
    display.value += doublezero.value
}
point.onclick = function(){
    display.value += point.value
}

equal.onclick =function(){

   display.value =  eval(display.value);

}




