const body = document.querySelector('#body');
const gameBoard = document.querySelector('.game-board');
const selectedItem = document.querySelector('#selected-item');
const bag = document.querySelector('.bag');
const axe = document.querySelector('.axe');
const shovel = document.querySelector('.shovel');
const pickaxe = document.querySelector('.pickaxe');
const start = document.querySelector('.start-btn');
const logo = document.querySelector('.game');
const reset = document.querySelector('.reset-btn')


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
function unselectTool (tool1, tool2){
    tool1.classList.remove('selected-tool');
    tool2.classList.remove('selected-tool')
}
function selectTool (tool) {
    tool.addEventListener('click', ()=>{
        if (tool === axe ){
            unselectTool(shovel, pickaxe )
        }
        if (tool === shovel ){
            unselectTool(axe, pickaxe )
        }
        if (tool === pickaxe ){
            unselectTool(axe, shovel )
        }
        tool.classList.toggle('selected-tool')
    })
}
selectTool(axe)
selectTool(shovel)
selectTool(pickaxe)
function dropItem (e, color){
    if (selectedItem.className === `${color} selected-item selected-material` && e.target.className === 'blue') {
        e.target.setAttribute('class', `${color}`);
        selectedItem.classList.remove(`${color}`)
        selectedItem.setAttribute('class', 'selected-item')
    }
    
}
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
function wrongTool(e) {
    if ((e.target.className === 'grey' || e.target.className === 'brown' || e.target.className === 'grass-brown') && axe.className === 'axe selected-tool'){
        axe.style.transition =  'background-color 800ms ease-in';
        axe.style.backgroundColor = 'red';
        }
        if ((e.target.className === 'green' || e.target.className === 'grey' || e.target.className === 'dark-brown') && shovel.className === 'shovel selected-tool'){
            shovel.style.transition =  'background-color 800ms ease-in';
            shovel.style.backgroundColor = 'red';
        }
        if ((e.target.className === 'green' || e.target.className === 'brown' || e.target.className === 'grass-brown' || e.target.className === 'dark-brown') && pickaxe.className === 'pickaxe selected-tool'){
            pickaxe.style.transition =  'background-color 800ms ease-in';
            pickaxe.style.backgroundColor = 'red';
            
        }
        setTimeout(function(){
            axe.style = 'axe';
            pickaxe.style = 'pickaxe';
            shovel.style = 'shovel';
        }, 1000)
}
function pickUp(e){
if((e.target.className === 'green' || e.target.className === "dark-brown" ) && axe.className === 'axe selected-tool'){
    const newClass = e.target.className
    selectedItem.setAttribute('class', newClass + ' ' + 'selected-item')
    e.target.setAttribute('class', 'blue');
    }
    if(e.target.className === 'grey' && pickaxe.className === 'pickaxe selected-tool'){
        const newClass = e.target.className
        selectedItem.setAttribute('class', newClass + ' ' + 'selected-item')
        e.target.setAttribute('class', 'blue');
    }
    if((e.target.className === 'grass-brown' || e.target.className === 'brown') && shovel.className === 'shovel selected-tool'){
        const newClass = e.target.className
        selectedItem.setAttribute('class', newClass + ' ' + 'selected-item')
        e.target.setAttribute('class', 'blue');
    }
}
selectedItem.addEventListener('click', function (){
    selectedItem.classList.toggle('selected-material')
    axe.classList.remove('selected-tool')
    pickaxe.classList.remove('selected-tool')
    shovel.classList.remove('selected-tool')
})
gameBoard.addEventListener('click', function drop (e){
    dropItem(e, colors.green)
    dropItem(e, colors.grey)
    dropItem(e, colors.darkbrown)
    dropItem(e, colors.brown)
    dropItem(e, colors.grass)
    wrongTool(e)
    pickUp(e)
})
start.addEventListener('click', function (e) {
    logo.style.background = ('none');
    start.classList.add('hide');
    gameBoard.classList.add('index-up')
    bag.classList.add('index-up')
});

function restart(){
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

}
reset.addEventListener('click', function(e){
    restart()
})
