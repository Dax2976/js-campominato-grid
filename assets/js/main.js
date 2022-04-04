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

function reload (){
   location.reload()
}


function createCell(){
    if(selezione.value == 'dif1'){
        for(let i = 1; i <= 100; i++){
            let content = document.createElement('div')
            content.classList.add('diff_1')
            content.innerHTML = i
            grid.appendChild(content)
        }
    } else if(selezione.value == 'dif2'){
        for(let i = 1; i <= 81  ;i++){
            let content = document.createElement('div')
            content.classList.add('diff_2')
            content.innerHTML = i
            grid.appendChild(content)
        }
    } else if(selezione.value == 'dif3'){
        for(let i = 1; i <= 49  ;i++){
            let content = document.createElement('div')
            content.classList.add('diff_3')
            content.innerHTML = i
            grid.appendChild(content)
            content.onclick = colorCell
        }
    }
}

function colorCell(){
    this.classList.add('bgbox')
}