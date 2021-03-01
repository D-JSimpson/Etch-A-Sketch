const container = document.getElementById('container');
const clearButton = document.getElementById('clear');

let marker = 'white';
let background = 'black';

function markerChange(){
    marker = document.getElementById('marker-dropdown').value;
    console.log(marker);
}

function backgroundChange(){
    background = document.getElementById('background-dropdown').value;
    console.log(background);
    let div = document.querySelectorAll('.grid-square');
    div.forEach(function(currentValue, currentIndex, listObj){div[currentIndex].style.cssText = "background-color: " + background +";"});
}

let drawToggle = false;
let percentMode = false;

container.addEventListener('click', function(){drawToggle = true;});
container.addEventListener('dblclick', function(){drawToggle = false;});

makeGrid(16);

function draw(div){
    if(drawToggle === true){
        if(marker == 'neon green'){div.style.backgroundColor = '#00FF80'}
        else if(marker == 'hot pink'){div.style.backgroundColor = '#FF0080'}
        else{
            div.style.backgroundColor = marker;
        }
    }
}

function makeGrid(size){
    let divWidth = (container.clientWidth)/size;
    let newSize = size * size;
    console.log(size);
    container.style.cssText = "grid-template-columns: repeat(" + size + ", " + divWidth + "px); grid-template-rows: repeat(" + size + ", " + divWidth + "px);"
for(let i = 0; i <= newSize - 1; i++){
    const div = document.createElement('div');
    div.className = 'grid-square';
    div.style.cssText = "background-color: " + background +";"
    container.appendChild(div);
    div.addEventListener('mousemove', function(){draw(this)});
    }
}

function clear(){
    let gridSelector = document.querySelectorAll('.grid-square');
    gridSelector.forEach(function(currentValue, currentIndex, listObj){gridSelector[currentIndex].remove()});
}

clearButton.addEventListener('click', function(){
    clear();
    let gridSize = window.prompt('What would you like the new grid size to be?');;
    while(gridSize % 1 !== 0 || gridSize > 100){
    alert("Enter a NUMBER that is also less than or equal to 100");
    gridSize = window.prompt('What would you like th new grid size to be?');
    }
    makeGrid(gridSize);
});