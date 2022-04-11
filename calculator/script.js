/*
    ***** TO-DOs ******
    1. Fix adding numbers into array[1] post-execute
    2. Text Content to show current inputs by user
*/

let array = [] // store numbers
let operator;
let operated = false;

const screen = document.getElementById("screen");
const currentInput = document.getElementById("current-input")
currentInput.textContent = `${array[0]} ${operator} ${array[1]}`

const numbers = Array.from(document.getElementsByClassName("num"));
numbers.forEach(element => {
    element.addEventListener("click", e => {
        switch(true) {
            case (operated == true) && (operator == undefined):
                screen.textContent = screen.textContent + (e.target.id);
                array[0] = Number(array[0].toString() + (e.target.id));
                break;
            case ( (operator == undefined) && (array[0] == undefined)): 
                array[0] = Number(e.target.id);
                break;
            case ((operator == undefined) && (array[0] != undefined)): 
                array[0] = Number(array[0].toString() + (e.target.id)); // this is awful
                break;
            case (array[1] == undefined): 
                array[1] = Number(e.target.id);
                break;
            case (array[1] != undefined): 
                array[1] = Number(array[1].toString() + (e.target.id)); // this is awful
                break;
        }
    })
})

const inputOperators = Array.from(document.getElementsByClassName("calc"));
inputOperators.forEach(element => {
    element.addEventListener("click", e => {
        if (array[1] != undefined) { // make sure to reset for chain calculations
            reset();
        }
        operator = (e.target.id); // define operator for calculate() function
    })
});

const equal = document.getElementById('equals');
equal.addEventListener("click", reset);

const clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    array = [];
    operator = undefined;
    screen.textContent = 'Cleared!';
    operated = false;
});

function reset() {
    array[0] = calculate(); 
    screen.textContent = array[0];
    array[1] = undefined;
    operator = undefined;
}

const calculate = () => {
    if ((array[0] == undefined) && (array[1] == undefined)) {
        return 'no input';
    }
    else if ((array[0] != undefined) && (array[1] == undefined)) {
        return array[0];
    }
    return array.reduce( (previous, current) => {
        operated = true;
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