async function addinfo() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
  
    try {
      const response = await axios.post('https://6813e31f225ff1af16276aea.mockapi.io/api/v1/students/Students', {
        Name: name,
        Age: age
      });
      alert("Estudiante creado:", response.data);
    } catch (error) {
      console.error("Error al crear estudiante:", error.message);
    }
  }

axios.post ()

const info = document.getElementById("Botonañadir")
info.addEventListener("click",function(){
     addinfo()
})