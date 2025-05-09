async function Fetch_Data(){
    axios.get('https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Heroes')
    .then((response)=>{
      
      console.log(response.data)
  
    })
  }

  Fetch_Data()
async function displayHeroes(){
  try{
  const data = await Fetch_Data()
  const herolist = document.getElementById("Showheroes");
  herolist = "";
  data.forEach(heroes => {
    if (document.getElementById("Heroes-container__Selector").value === "Dc")
    herolist.innerHTML +=`
    <div id="Showheroes">
    <p>${[heroes.NombrePersonaje]}</p>
    <p>${[heroes.Nombreactor]}</p>
    <p>${[heroes.Edadactor]}</p>
    <p>${[heroes.Ubicacion]}</p>
    <p>${[heroes.Poster]}</p>
    <p>${[heroes.Fecha]}</p>
    <p>${[heroes.Productora]}</p>
    <p>${[heroes.Trajes]}</p>
    
    
    </div> `
  });
} catch{
  console.error("Ocurrió un error:", error.message);
}
}

document.getElementById("Heroes-container__Send").addEventListener("click" , function(pre) {
pre.preventDefault()

 displayHeroes()

})

