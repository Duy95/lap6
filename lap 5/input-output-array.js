let prompt = require('prompt-sync')();
let arr = [];
let n ;

function input () {
    n = Number (prompt("Enter number of element in array:"));
    for ( let i=0; i<n;i++) {
        arr [i] = Number (prompt(`Enter arr [${i}]:`));

    }
}

function output () {
    for (let i=0; i< arr.length; i++) {
        console.log (arr[i]);
    }
}

input();
output();