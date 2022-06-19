const container = document.querySelector('#container');
let gridSize = document.querySelector('input');
function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    }
  }

makeGrid(30, 30);

let gridItems = document.getElementsByClassName("grid-item");

for(let i = 0; i < gridItems.length; i++){
    gridItems[i].addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "purple";

    }, false);

    
}

