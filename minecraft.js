const body = document.querySelector('#body');
const gameBoard = document.querySelector('.game-board');
const selectedItem = document.querySelector('#selected-item');
const bag = document.querySelector('.bag')
const axe = document.querySelector('.axe')
const shovel = document.querySelector('.shovel')
const pickaxe = document.querySelector('.pickaxe')

const matrix = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,6,6,6,6,0,6,6,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,6,6,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,0,2,2,2,0,0,0,0,0,0,0,0,3,3,0,1,0,0,3],
    [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
];

const colors = {
    green : "green",
    brown : "brown",
    darkbrown : "dark-brown",
    white : "white",
    blue : "blue",
    grey : "grey",
    grass: "grass-brown"
}

function addElement(treeEl, i, j, color){
    treeEl.classList.add(color)
    treeEl.style.gridRowsStart=i;
    treeEl.style.gridColumnsStart=j;
    gameBoard.appendChild(treeEl);
}
function selectTool (tool) {
    tool.addEventListener('click', ()=>{
        tool.classList.toggle('selected-tool')
    })
}
selectTool(axe)
selectTool(shovel)
selectTool(pickaxe)
for (i=0; i<matrix.length; i++){
    for (j=0; j<matrix[i].length; j++){
        let treeEl = document.createElement('div');
        treeEl.id = 'x:'+ (i+1) + ('-')+ 'y:'+ (j+1);
        switch(matrix[i][j]){
        case 0:
            addElement(treeEl, i, j, colors.blue);
            break;
        case 1:
            addElement(treeEl, i, j, colors.darkbrown);
            break;
        case 2:
            addElement(treeEl, i, j, colors.green);
            break;
        case 3:
            addElement(treeEl, i, j, colors.grey);
            break;
        case 4:
            addElement(treeEl, i, j, colors.grass);
            break;
        case 5:
            addElement(treeEl, i, j, colors.brown);
            break;
        case 6:
            addElement(treeEl, i, j, colors.white);
            break;
        }
    }
    
}

gameBoard.addEventListener ('click', function skyClick (e) {
        if(e.target.className !== 'blue' && e.target.className !== 'white'){
        const newClass = e.target.className
        selectedItem.setAttribute('class', newClass + ' ' + 'selected-item')
        e.target.setAttribute('class', 'blue');
        }
});
selectedItem.addEventListener('click', function (){
    selectedItem.classList.toggle('selected-material')
})



