async function Fetch_Data(){
  axios.get('https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Heroes')
  .then((response)=>{
    
    console.log(response.data)

  })
}
async function addHero(np,na,edad,ubi,poster,fecha,productotra){
    const req = {
        "NombrePersonaje":np,
        "Nombreactor":na,
        "Edadactor":edad,
        "Ubicacion":ubi,
        "Poster":poster,
        "Fecha":fecha,
        "Productora":productotra
    }
    const reponse = await axios.post('https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Heroes');
    const data =await Fetch_Data();
    displayHeroes(data)


}
Fetch_Data()

async function Savehero(){
    
}

document.getElementById("Chartinterface__btns-btn1").addEventListener("click", function(e){
    e.preventDefault();
    let trajes = document.getElementById("Chartinterface__Trajes-interface");
    trajes.innerHTML = ``
})