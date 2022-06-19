const container = document.querySelector('#container');
let gridSize = document.querySelector('input');

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
  }

makeGrid(16, 16);

let gridItems = document.getElementsByClassName("grid-item");

for(let i = 0; i < gridItems.length; i++){
    gridItems[i].addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "purple";

    }, false);

    
}

