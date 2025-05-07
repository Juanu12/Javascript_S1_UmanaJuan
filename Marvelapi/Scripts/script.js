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
    let trajes = document.getElementById("Char-tinterface__Main");
    trajes.innerHTML = `  <div id="Chartinterface__Trajes-interface">
    <div id="Chartinterface__Trajes-interface--Registrotrajes">
        <pre>  Registro de Trajes</pre>
    </div>
    <div id="Chartinterface__Trajes-interface--Title">
    <p>Trajes del personaje</p>
    </div>
    <div id="Chartinterface__Trajes-interface--subTitle">
    <p> En esta sección podra registrar los nombres de los trajes usados por el actor en cada una de las peliculas</p>
    </div>
    <div id="Chartinterface__Trajes-interface--Plusicon">
        <p>+</p>
    </div>
    <div id="Chartinterface__Trajes-interface--input">
    <p>Nombre traje</p>
    <input type="text">
    </div>
    <div id="Chartinterface__Trajes-interface-minusicon">
        <p id="Chartinterface__Trajes-interface--minusicon--icon">-</p>
    </div>


</div>`

})