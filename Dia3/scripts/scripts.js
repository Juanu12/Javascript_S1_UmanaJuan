
let contador =1;
function fetchPoke(){
        let id = document.getElementById("pokeId").value;
        let link = `https://pokeapi.co/api/v2/pokemon/${id}`;
        let xhr = new XMLHttpRequest();
    
        xhr.open('GET', link);
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let response = JSON.parse(this.responseText);
                contador = response.id;
                displayPoke(response);  
                Pokeimg(response);      
            }
        };
        xhr.send();
    }
    
function nextPok(){
contador += 0.5;
document.getElementById("pokeId").value= contador;
fetchPoke()
}
function previusPok(){
    if(contador > 1){
    contador -= 1 ;
    document.getElementById("pokeId").value= contador;
    fetchPoke()
    }
}

fetchPoke()

function displayPoke(data){
    let pokemon = document.getElementById("showUp");
    let nombre = (data["name"].charAt(0).toUpperCase())+(data["name"].slice(1));
    console.log(nombre) ;
    pokemon.innerHTML = `${data["id"]} - ${nombre}`;}

    function Pokeimg(data2) {
        let img = data2["sprites"]["other"]["showdown"]["front_default"];
        let imgElement = document.getElementById("PokeImg");
        
        imgElement.src = img ;}
    

const input=document.getElementById("pokeId");
input.addEventListener("keydown", function (event)  {
    if(event.key==="Enter"){
        fetchPoke();
    }
}
)
const inputs= document.getElementById("buttom1");
inputs.addEventListener("click",function(){
     previusPok()
})

const inputss= document.getElementById("buttom2");
inputss.addEventListener("click",function(){
     nextPok()
})
