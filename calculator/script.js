/*
    ***** TO-DOs ******
    1. Support multi-digit numbers
    2. Text Content to show current inputs by user
*/

let array = [] // store numbers
let operator; 

const screen = document.getElementById("screen");

const numbers = Array.from(document.getElementsByClassName("num"));

numbers.forEach(element => {
    element.addEventListener("click", e => {
        switch(true) {
            case ( (operator == undefined) && (array[0] == undefined)): 
                array[0] = Number(e.target.id);
                break;
            case ((operator == undefined) && (array[0] != undefined)): 
                array[0] = Number(array[0].toString() + (e.target.id)); // // this is awful
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
            array[0] = calculate(); 
            array[1] = undefined;
            operator = undefined;
        }
        operator = (e.target.id); // define operator for calculate() function
    })
});


// NOTE: I could just implement these with an if statement in the "calc" event listener section
// Which one is faster????
const equal = document.getElementById('equals');
equal.addEventListener("click", () => {
    screen.textContent = calculate();
});

const clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    array = [];
    operator = undefined;
    screen.textContent = 'Cleared!'
});



const calculate = () => {
    if ((array[0] == undefined) && (array[1] == undefined)) {
        return 'no input';
    }
    else if ((array[0] != undefined) && (array[1] == undefined)) {
        return array[0];
    }
    return array.reduce( (previous, current) => {
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
                return 'OOPS, how about we try again?';
        }
    })
}