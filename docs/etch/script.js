//                  [PSUEDOCODE]

let gridSize = 16;
let divNumber = 1;

const createGrid = () => {
    let wrapper = document.getElementById("wrapper");
    wrapper.style.gridTemplateColumns = `repeat(${gridSize} , 1fr)`;
    wrapper.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
}

const changeColor = e => {
    let div = document.getElementById(e.srcElement.id);
    div.style.backgroundColor = 'black';
}

const createDiv = () => {
    let wrapper = document.getElementById("wrapper");
    let div = document.createElement('div');
    div.style.backgroundColor = 'white';
    div.setAttribute("id", `${divNumber}`);
    div.setAttribute("class", `grid-box`);
    div.addEventListener('mouseenter', changeColor);
    wrapper.appendChild(div);
    return;
}

const resetSize = () => {
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
    gridSize = prompt("How many boxes would you like?");
    wrapper.style.gridTemplateColumns = `repeat(${gridSize} , 1fr)`;
    wrapper.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    divNumber = 0;
    for (let i=0; i < (gridSize * gridSize); i++) {
        createDiv();
        divNumber++;
        continue;
    }
}

const rowAddition = () => {
    for (let i=0; i < gridSize; i++) {
        for (let j=0; j < gridSize; j++) {
            createDiv();
            divNumber++;
            continue;
        }
        continue;
    }
}

let resetButton = document.getElementById("reset");
resetButton.addEventListener('click', resetSize);

createGrid();
rowAddition();