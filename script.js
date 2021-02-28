const container = document.getElementById('container');
const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clear);

makeGrid();

function makeGrid(){
for(let i = 0; i <= 255; i++){
    const div = document.createElement('div');
    div.className = 'grid-square';
    div.style.cssText = "background-color: red; border: 1px solid black; box-sizing: border-box;"
    container.appendChild(div);
    div.addEventListener('mouseenter', function(){div.style.backgroundColor = 'blue';});
    }
}

function clear(){
    let gridSelector = document.querySelectorAll('.grid-square');
    gridSelector.forEach(function(currentValue, currentIndex, listObj){gridSelector[currentIndex].remove()});
}