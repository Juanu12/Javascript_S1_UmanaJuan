async function button() {
  try {
    const response = await axios.get('https://6813e31f225ff1af16276aea.mockapi.io/api/v1/students/Students');
    const students = response.data;
    const list = document.getElementById("list"); 
    list.innerHTML = "";

    students.forEach(student => {
      list.innerHTML += `
        <div class="student">
          <h3>${student.Name}</h3>
          <p>Edad: ${student.Age}</p>
        </div>
      `;
    });
  } catch (error) {
    console.error('Error en la petición:', error.message);
  }
}


const info = document.getElementById("list")
info.addEventListener("click",function(){
     button()
})