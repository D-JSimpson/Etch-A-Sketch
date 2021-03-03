const container = document.getElementById('container');
const clearButton = document.getElementById('clear');
const percentButton = document.getElementById('percent-mode');
const percentOffButton = document.getElementById('percent-mode-off');

let marker = 'rgb(255,255,255)';
let background = 'rgb(0,0,0)';

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

percentButton.addEventListener('click', function(){percentMode = true;});
percentOffButton.addEventListener('click', function(){percentMode = false;});
container.addEventListener('click', function(){drawToggle = true;});
container.addEventListener('dblclick', function(){drawToggle = false;});

makeGrid(16);

function draw(div){
    if(drawToggle === true && percentMode === false){
        if(marker == 'neon green'){div.style.backgroundColor = '#00FF80';}
        else if(marker == 'hot pink'){div.style.backgroundColor = '#FF0080';}
        else{
            div.style.backgroundColor = marker;
        }
    }
}

let p = 0.1;

function percentDraw(div){
    if(drawToggle === true && percentMode === true){
       
       let backcolor = div.style.backgroundColor;
       if(backcolor === 'rgb(255, 255, 255)'){
        div.style.backgroundColor = 'rgb(0,0,0, 0.1)';
       }
       else{
       let opacityloc = backcolor.indexOf('0.');
       let parenthesis = backcolor.indexOf(')');
       let opacity = backcolor.substring(opacityloc, parenthesis);
       backcolor = backcolor.substring(0, opacityloc);
       console.log(opacity);
       console.log(backcolor);
       opacity = +opacity + 0.1;
       backcolor += (opacity + ')');
       console.log(opacity);
       console.log(backcolor);
       div.style.backgroundColor = backcolor;
       }

        /*
        let bc = div.style.backgroundColor = 'rgb(0, 0, 0, ' + p + ')';
        let int = bc.indexOf('0.');
        let int2 = bc.indexOf(')');
        let part = bc.substring(int, int2);
        console.log(bc);
        console.log(int);
        console.log(part);
        p+= 0.1;
        */
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
    div.style.cssText = "background-color: " + background +";";
    container.appendChild(div);
    div.addEventListener('mousemove', function(){draw(this)});
    div.addEventListener('mouseenter', function(){percentDraw(this)});
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