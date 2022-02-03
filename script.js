const tabuleiro = document.querySelector ("#tabuleiro")

const imagens = [
    'i1.gif',
    'i2.gif',
    'i3.gif',
    'i4.gif',
    'i5.gif',
    'i6.gif',
    'i7.gif'
]

let codigoHTML =''

imagens.forEach(img=>{
    codigoHTML += `
    <div class = "memory-card">
        <img class = "frente-carta" src = "imgs/${img}">
        <img class = "fundo-carta" src = "imgs/gaio.webp">
    </div> 
    `
})
tabuleiro.innerHTML = codigoHTML + codigoHTML

const cartas = document.querySelectorAll (".memory-card")

function virar (){
    this.classList.add ("virar")
}

cartas.forEach (c => c.addEventListener ('click',virar))