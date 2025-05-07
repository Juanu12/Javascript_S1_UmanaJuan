async function llamarAPI(){
    let response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    let data = await response.json()
    deckID = data["deck_id"]
    return deckID
}

async function mostrarCartas(ID){
    let response = await fetch( `https://deckofcardsapi.com/api/deck/${ID}/draw/?count=1`)
    let data = await response.json()
    let imagenCarta = document.getElementById("cartaImagen")
    imagenCarta.src = data["cards"][0]["image"]
}

async function mostrarCartas2(ID){
    let response = await fetch( `https://deckofcardsapi.com/api/deck/${ID}/draw/?count=1 `)
    let data = await response.json()
    let imagenCarta = document.getElementById("cartaImagen2")
    imagenCarta.src = data["cards"][0]["image"]
}



async function mostrarCartas3(ID){
    let response = await fetch( `https://deckofcardsapi.com/api/deck/${ID}/draw/?count=1 `)
    let data = await response.json()
    let imagenCarta = document.getElementById("cartaImagen3")
    imagenCarta.src = data["cards"][0]["image"]

    }
async function empezarJuego(){
    deckID = await llamarAPI()
    mostrarCartas(deckID)
}

async function empezarJuego2(){
    deckID = await llamarAPI()
    mostrarCartas2(deckID)
}

async function empezarJuego3(){
    deckID = await llamarAPI()
    mostrarCartas3(deckID)
}
empezarJuego();


async function obtenervalores2(ID){
    let response2 = await fetch( `https://deckofcardsapi.com/api/deck/${ID}/draw/?count=1`)
    let data2 = await response2.json()
    let ValorCarta = document.getElementById("Valorcarta")
    ValorCarta.src = data2["cards"][0]["value"]

}
async function Valores() {
    deckID = await llamarAPI
obtenervalores2(deckID)
}
Valores()
const inputs= document.getElementById("Morebutton");
inputs.addEventListener("click",function(){
   empezarJuego2();
})

const inputs2= document.getElementById("Low");
inputs2.addEventListener("click",function(){
   empezarJuego3();
})

const audio = document.getElementById("AudioGame")
setTimeout (() => {
    audio.currentTime = 7;
    audio.muted = false
    audio.play();
}, 1000); 