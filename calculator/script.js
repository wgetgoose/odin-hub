/*
    ***** TO-DOs ******
*/

let array = [] // store numbers
let operator;
let operated = false; // boolean used in event listener for numbers input

const screen = document.getElementById("screen");
const currentInput = document.getElementById("current-input")

const reset = () => {
    array[0] = calculate(); 
    screen.textContent = array[0];
    array[1] = undefined;
    operator = undefined;
    refreshScreen();
}

const calculate = () => {
    if ((array[0] == undefined) && (array[1] == undefined)) {
        return 'ERR';
    }
    else if ((array[0] != undefined) && (array[1] == undefined)) {
        return array[0];
    }
    else if (((array[1]) == '0') && (operator == 'divide'))
        return 'ERR';
    return array.reduce( (previous, current) => {
        operated = true;
        previous = Number(previous)
        current = Number(current)
        switch (operator) {
            case 'add':
                return previous + current;
            case 'subtract': 
                return previous - current;
            case 'multiply':
                return previous * current;
            case 'divide':
                return previous / current;
            default:
                return 'OOPS';
        }
    })
}

function refreshScreen() {
    string = `${array[0]} ${operator} ${array[1]}`
    string = string.replace('add', '+');
    string = string.replace('subtract', '-');
    string = string.replace('multiply', '*');
    string = string.replace('divide', '/');
    currentInput.textContent = string.replace(/undefined/g, '')
}

const numbers = Array.from(document.getElementsByClassName("num"));
numbers.forEach(element => {
    element.addEventListener("click", e => {
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