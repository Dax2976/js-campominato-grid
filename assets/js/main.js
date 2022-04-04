// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.



// creazioni variabili 

let btn = document.getElementById('btn')
let grid = document.getElementById('grid')
let selezione = document.getElementById('selezione')
// let btnReset = document.getElementById('btnReset')


// al click si refersha la pagina
btnReset.onclick = reload



// al click crea le celle in base alla difficoltà
btn.onclick = createCell



// funzioni


// funzione per refreshare la pagina 
function reload (){
   location.reload()
}


// funzione per creare le celle da 100 a 81 a 49
function createCell(){
    for(let i = 1; i <= selezione.value;i++){
        let content = document.createElement('div')
        content.classList.add('diff_' + selezione.value)
        content.innerHTML = i
        grid.appendChild(content)
        content.addEventListener('click', colorCellBlue)
    }
}


// funzione per colorare le celle al click
function colorCellBlue(){
    this.classList.add('bgboxblue')
}