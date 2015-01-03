// Las partes feas
var a = 5,
    b=10;

function noGlobal(a){
    "use strict";
    b = 3;
    a = a * 2;
    return a*b;
}

//noGlobal(1) --> 6
// a = 5
// b = 10


