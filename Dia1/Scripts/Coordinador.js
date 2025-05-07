

export function coordinador (opt3){
   
    
  let campers = {
    
    grupo1: [
        { nombre: "Juan", cedula: "12345" },
        { nombre: "Maria", cedula: "67890" },
        { nombre: "Carlos", cedula: "11223" }
    ],
    grupo2: [
        { nombre: "Sofia", cedula: "44556" },
        { nombre: "Luis", cedula: "77889" },
        { nombre: "Elena", cedula: "99001" },
        { nombre: "Andrés", cedula: "22334" }
    ],
    grupo3: [
        { nombre: "Valeria", cedula: "55667" },
        { nombre: "Miguel", cedula: "88990" },
        { nombre: "Camila", cedula: "33221" }
    ],
    grupo4: [
        { nombre: "Ricardo", cedula: "66554" },
        { nombre: "Fernanda", cedula: "99887" }
    ]

}
    let notas = {
    grupo1: [
        { nombre: "Juan", notadef: "70" },
        { nombre: "Maria", notadef: "80" },
        { nombre: "Carlos", notadef: "82" },
        {horario: "mañana"}
    ],
    grupo2: [
        { nombre: "Sofia", notadef: "75" },
        { nombre: "Luis", notadef: "90" },
        { nombre: "Elena", notadef: "60" },
        { nombre: "Andrés", notadef: "95" },
        {horario: "tarde"}
    ],
    grupo3: [
        { nombre: "Valeria", notadef: "80" },
        { nombre: "Miguel", notadef: "65" },
        { nombre: "Camila", notadef: "90" },
        {horario: "noche"}

    ],
    grupo4: [
        { nombre: "Ricardo", notadef: "78" },
        { nombre: "Fernanda", notadef: "89" },
        {horario: "mañana2"}

    ]
}

;
let camper = null;
let grupoencontrado = null
let horario = null
let ced = null 
let grup = null
if (opt3 == 1) {
    alert("¿Qué camper quieres buscar?");
    ced = prompt("Escribe su cédula");
    for (let grupo in campers) {
        let encontrado = campers[grupo].find(camper => camper.cedula === ced);
        if (encontrado) {
            camper = encontrado;
            grupoencontrado = grupo;
            break;
        }
    }

    if (camper) {
        alert("Camper encontrado: " + camper.nombre + " - Cédula: " + camper.cedula + " - Grupo: " + grupoencontrado);
    } else {
        alert("No se encontró ningún camper con esa cédula.");
    }

    if (opt3 ==2)
        alert ("¿Qué grupo quiere visualizar?")
      grup = prompt ("Escribe el Grupo que quieres visualizar (completo)")
      for (let grupo2 in campers) {
        let grupoenc = campers[grupo2].find(camper => camper.grupo2 === grup )
      }
}

}
