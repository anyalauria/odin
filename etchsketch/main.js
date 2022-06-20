const container = document.querySelector('#container');
const blackMode = document.querySelector('#black');
const rainbowMode = document.querySelector('#rainbow');
const eraseMode = document.querySelector('#erase');
const clearBtn = document.querySelector('#clear');
const apply = document.querySelector('#apply');

let gridSize = document.querySelector('#update-size');
let dimensions = document.querySelector('#dimensions');

let currSize = 16;
let currMode = 'black';

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function makeGrid(rows, cols) {
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for (i = 1; i <= rows; i++) {
        for (j = 1; j <= cols; j++){
            let cell = document.createElement("div");
            cell.style.gridRow = i;
            cell.style.gridColumn = j;
            container.appendChild(cell).className = "grid-item";

        }
    }

    let gridItems = document.getElementsByClassName("grid-item");

    for(let i = 0; i < gridItems.length; i++){
        gridItems[i].addEventListener("mouseover", function(event){
            if (!mouseDown) return;
            if (currMode==='black'){event.target.style.backgroundColor = "black";}
            else if (currMode === 'rainbow') {
                const R = Math.floor(Math.random() * 256)
                const G = Math.floor(Math.random() * 256)
                const B = Math.floor(Math.random() * 256)
                event.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
            }
            else if (currMode === 'erase'){event.target.style.backgroundColor = '#fefefe'}

        }, false);
    }
  }

makeGrid(16, 16);

gridSize.addEventListener('change', function(event){
    currSize = gridSize.value;
    dimensions.textContent = `${currSize} x ${currSize}`
})

rainbowMode.addEventListener('click', () => {currMode = 'rainbow';})
blackMode.addEventListener('click', () => {currMode = 'black';})
eraseMode.addEventListener('click', () => {currMode = 'erase';})
clearBtn.addEventListener('click', () => {
    container.innerHTML = '';
    makeGrid(currSize,currSize);})
apply.addEventListener('click', () => {
    container.innerHTML = '';
    makeGrid(currSize,currSize);})