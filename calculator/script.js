/*
    ***** TO-DOs *****
    1. Check whether 'operated' is necessary
*/


// When I say 'chain calculation' I mean when the user enters
// multiple operators in a row, i.e: 10 - 2 + 3

let array = [] // store numbers
let operator;
let operated = false; // boolean used in event listener for numbers input

const screen = document.getElementById("screen");
const currentInput = document.getElementById("current-input")

// change strings like 'add' into symbols
function refreshScreen() {
    string = `${array[0]} ${operator} ${array[1]}`
    string = string.replace('add', '+');
    string = string.replace('subtract', '-');
    string = string.replace('multiply', '*');
    string = string.replace('divide', '/');
    currentInput.textContent = string.replace(/undefined/g, '')
}

// moves computed value into array[0] for chain calculation
const reset = () => {
    array[0] = calculate(); 
    screen.textContent = array[0];
    array[1] = undefined;
    operator = undefined;
    refreshScreen();
}

const calculate = () => {
    // filters edge cases, like 10 div 0 and user pressing equals button
    // This did not work when passing array[0] into the switch expression
    switch(true) { 
        case (array[0] == undefined):
            return 'ERR';
        case (array[0] != undefined) && ( (array[1] == '0') && (operator == 'divide') ):
            return 'ERR';
        case (array[0] != undefined) && (array[1] == undefined):
            return array[0];
    };
    operated = true;
    array[0] = Number(array[0])
    array[1] = Number(array[1])
    switch(operator) {
        case 'add':
            return array[0] + array[1];
        case 'subtract': 
            return array[0] - array[1];
        case 'multiply':
            return array[0] * array[1];
        case 'divide':
            return array[0] / array[1];
        default:
            return 'OOPS';
    }
}


const numbers = Array.from(document.getElementsByClassName("num"));
numbers.forEach(element => {
    element.addEventListener("click", e => {
        // Multi-digit number entry 
        switch(true) {
            case (operated == true) && (operator == undefined):
                screen.textContent = screen.textContent + (e.target.id);
                array[0] = (array[0] + (e.target.id)); 
                break;
            case (((operator == undefined) && (array[0] == undefined)) || ((array[0] == 'ERR'))): 
                array[0] = (e.target.id);
                break;
            case ((operator == undefined) && (array[0] != undefined)): 
                array[0] = (array[0] + (e.target.id)); 
                break;
            case (array[1] == undefined): 
                array[1] = (e.target.id);
                break;
            case (array[1] != undefined): 
                array[1] = (array[1] + (e.target.id));
                break;
        }
        refreshScreen();
    })
})

const inputOperators = Array.from(document.getElementsByClassName("calc"));
inputOperators.forEach(element => {
    element.addEventListener("click", e => {
        if (array[1] != undefined) { // make sure to reset for chain calculations
            reset();
        }
        operator = (e.target.id); // define operator for calculate() function
        refreshScreen();
    })
});

const equal = document.getElementById('equals');
equal.addEventListener("click", reset);

const clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    array = [];
    operator = undefined;
    operated = false;
    screen.textContent = 'Cleared!';
    refreshScreen();
});