let primeira , segunda
let bloqueio = false

const tabuleiro = document.querySelector ("#tabuleiro")

const imagens = [
    'bobrossparrot.gif',
    'explodyparrot.gif',
    'fiestaparrot.gif',
    'metalparrot.gif',
    'revertitparrot.gif',
    'tripletsparrot.gif',
    'unicornparrot.gif'
]

let codigoHTML =''

imagens.forEach(img=>{
    codigoHTML += `
    <div class = "memory-card" data-carta = "${img}">
        <img class = "frente-carta" src = "imgs/${img}">
        <img class = "fundo-carta" src = "imgs/papa.jpg">
    </div> 
    `
})
tabuleiro.innerHTML = codigoHTML + codigoHTML

const cartas = document.querySelectorAll (".memory-card")

function aleatoria (){
    cartas.forEach (carta => {
        let numero = Math.floor(Math.random()*14)
        carta.style.order = numero
    })
}
(function aleatoria (){
    cartas.forEach (carta => {
        let numero = Math.floor(Math.random ()*14)
        carta.style.order = numero
    })
})();

function checar(){
    let ehIgual = primeira.dataset.carta === segunda.dataset.carta?true:false
    if (!ehIgual){
        remover ()
    } else {
        reset (ehIgual)
    }
}

function virar (){
    if (bloqueio) return false

    this.classList.add ("virar")
    if (!primeira){
        primeira = this
        primeira.removeEventListener('click',virar)
        return false
    }
    segunda = this
    checar ()
}

function remover (){
    bloqueio = true
    setTimeout (()=>{
        primeira.classList.remove ("virar")
        primeira.addEventListener ('click',virar)
        segunda.classList.remove ("virar")
        bloqueio = false
        primeira = null
        segunda = null
    },1000)
}
function reset(ehIgual){
    if (ehIgual){
        primeira.removeEventListener('click',virar)
        segunda.removeEventListener('click',virar)
        bloqueio = false
        primeira = null
        segunda = null
    }
}

cartas.forEach (c => c.addEventListener ('click',virar))


