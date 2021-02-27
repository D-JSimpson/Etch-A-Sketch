const container = document.getElementById('container');
container.style.cssText = "display: grid; grid-template-columns: repeat(16, 50px); grid-template-rows: repeat(16, 50px);"

for(let i = 0; i <= 255; i++){
    const div = document.createElement('div');
    div.className = 'grid-square';
    div.innerText = "Hello";
    div.style.cssText = "background-color: red; border: 1px solid black; box-sizing: border-box;"
    container.appendChild(div);
}