const tabuleiro = document.querySelector ("#tabuleiro")

const imagens = [
    'andro.jpg',
    'leao.jpg',
    'cisney.jpg',
    'sharaar.jpg',
    'luz.jpg',
    'fe.jpg',
    'uni.jpg'
]

let codigoHTML =''

imagens.forEach(img=>{
    codigoHTML += `
    <div class = "memory-card">
        <img class = "frente-carta" src = "imgs/${img}">
        <img class = "fundo-carta" src = "imgs/papa.jpg">
    </div> 
    `
})
tabuleiro.innerHTML = codigoHTML + codigoHTML

const cartas = document.querySelectorAll (".memory-card")

function virar (){
    this.classList.add ("virar")
}

cartas.forEach (c => c.addEventListener ('click',virar))