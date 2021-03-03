const container = document.getElementById('container');
const clearButton = document.getElementById('clear');
const percentButton = document.getElementById('percent-mode');
const percentOffButton = document.getElementById('percent-mode-off');
const randomButton = document.getElementById('random-mode')

let marker = 'rgb(255,255,255)';
let background = 'rgb(0,0,0)';

function markerChange(){
    marker = document.getElementById('marker-dropdown').value;
}

function backgroundChange(){
    background = document.getElementById('background-dropdown').value;
    let div = document.querySelectorAll('.grid-square');
    div.forEach(function(currentValue, currentIndex, listObj){div[currentIndex].style.cssText = "background-color: " + background +";"});
}

let drawToggle = false;
let percentMode = false;
let randomMode = false;
let randomModeCtr = 0;
percentButton.addEventListener('click', function(){percentMode = true; percentButton.style.color = 'white'; percentOffButton.style.color = 'black'; percentButton.style.backgroundColor = 'green'; percentOffButton.style.backgroundColor = 'red';});
percentOffButton.addEventListener('click', function(){percentMode = false; percentOffButton.style.color = 'black'; percentButton.style.color = 'black'; percentButton.style.backgroundColor = 'white'; percentOffButton.style.backgroundColor = 'white';});
container.addEventListener('click', function(){drawToggle = true;});
container.addEventListener('dblclick', function(){drawToggle = false;});
randomButton.addEventListener('click', function(){randomModeCtr++; if(randomModeCtr % 2 == 1){randomButton.innerHTML = "Random Mode<br>On"; randomMode = true;} else{randomButton.innerHTML = "Random Mode<br>Off"; randomMode = false;} });

makeGrid(16);

function draw(div){
    if(drawToggle === true && percentMode === false && randomMode === false){
            div.style.backgroundColor = marker;
    }
}

let p = 0.1;

function percentDraw(div){
    if(drawToggle === true && percentMode === true){
       
       let backcolor = div.style.backgroundColor;
       if(backcolor === 'rgb(255, 255, 255)' || backcolor === 'rgb(0, 0, 0)'){
        let parenthesis = marker.indexOf(')');
        backcolor = marker.substring(0, parenthesis);
        div.style.backgroundColor = backcolor + ', 0.1)';
       }
       else{
       let opacityloc = backcolor.indexOf('0.');
       let parenthesis = backcolor.indexOf(')');
       let opacity = backcolor.substring(opacityloc, parenthesis);
       backcolor = backcolor.substring(0, opacityloc);
       opacity = +opacity + 0.1;
       backcolor += (opacity + ')');
       div.style.backgroundColor = backcolor;
       }
    }
}

function randomDraw(div){

    if(drawToggle === true && randomMode === true){
let rgb1 = Math.floor(Math.random() * 254);
let rgb2 = Math.floor(Math.random() * 254);
let rgb3 = Math.floor(Math.random() * 254);
div.style.backgroundColor = 'rgb(' + rgb1 + ', ' + rgb2 + ', ' + rgb3 + ')';
    }

}

function makeGrid(size){
    let divWidth = (container.clientWidth)/size;
    let newSize = size * size;
    container.style.cssText = "grid-template-columns: repeat(" + size + ", " + divWidth + "px); grid-template-rows: repeat(" + size + ", " + divWidth + "px);"
for(let i = 0; i <= newSize - 1; i++){
    const div = document.createElement('div');
    div.className = 'grid-square';
    div.style.cssText = "background-color: " + background +";";
    container.appendChild(div);
    div.addEventListener('mousemove', function(){draw(this)});
    div.addEventListener('mouseenter', function(){percentDraw(this); randomDraw(this)});
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