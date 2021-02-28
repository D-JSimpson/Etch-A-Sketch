const container = document.getElementById('container');
const clearButton = document.getElementById('clear');
console.log(container.clientWidth);



makeGrid(16);

function makeGrid(size){
    let divWidth = (container.clientWidth)/size;
    let newSize = size * size;
    console.log(size);
    container.style.cssText = "grid-template-columns: repeat(" + size + ", " + divWidth + "px); grid-template-rows: repeat(" + size + ", " + divWidth + "px);"
for(let i = 0; i <= newSize - 1; i++){
    const div = document.createElement('div');
    div.className = 'grid-square';
    div.style.cssText = "background-color: black; "
    container.appendChild(div);
    div.addEventListener('mouseenter', function(){div.style.backgroundColor = 'white';});
    }
}

function clear(){
    let gridSelector = document.querySelectorAll('.grid-square');
    gridSelector.forEach(function(currentValue, currentIndex, listObj){gridSelector[currentIndex].remove()});
}

clearButton.addEventListener('click', function(){
    clear();
    let gridSize = window.prompt('What would you like th new grid size to be?');;
    while(gridSize % 1 !== 0 || gridSize > 100){
    alert("Enter a NUMBER that is also less than or equal to 100");
    gridSize = window.prompt('What would you like th new grid size to be?');
    }
    makeGrid(gridSize);
});