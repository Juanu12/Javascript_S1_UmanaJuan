
document.getElementById("Heroes-container__Send--button").addEventListener("click", function(e) {
  e.preventDefault();
  displayHeroes();
});

async function Fetch_Data(){
  try {
    const response = await axios.get('https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Heroes');
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos:", error.message);
  }
}
  Fetch_Data()
async function displayHeroes(){
  try{
  const data = await Fetch_Data()
  const herolist = document.getElementById("Showheroes");
  herolist.innerHTML = "";

  const seleccion = document.getElementById("Heroes-container__Selector--productora").value;
  data.forEach(heroes => {
    productora = [heroes.Productora]
    if ((heroes.Productora.toLowerCase() === seleccion.toLowerCase()))
    
      herolist.innerHTML += `
      <div class="hero-card">
        <p><strong>Personaje:</strong> ${heroes.NombrePersonaje}</p>
        <p><strong>Actor:</strong> ${heroes.Nombreactor}</p>
        <p><strong>Edad:</strong> ${heroes.Edadactor}</p>
        <p><strong>Ubicación:</strong> ${heroes.Ubicacion}</p>
        <img src="${heroes.Poster}">
        <p><strong>Fecha:</strong> ${heroes.Fecha}</p>
        <p><strong>Productora:</strong> ${heroes.Productora}</p>
      </div>
    `;
  });
} catch (error) {
console.error("Ocurrió un error:", error.message);
};
}