

export function coordinador (opt3){
    alert ("¿Que quieres hacer?")
    alert  (" 1. Administrador Campers");
    alert  (" 2. Administrador Grupo ");    
    alert  (" 3. Notas Camper ");   
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
};
let camper = null;
let grupoencontrado = null
let horario = null

    if (opt3 == 1) {
    alert ("¿Que camper quieres buscar?")
    alert ("Escribe su cedula")
    for (let grupo in campers) {
        foundCamper = campers[grupo].find(camper => camper.cedula === cedula);
        if (foundCamper) {
            grupoEncontrado = grupo;
            alert ("camper encontrado", foundcamper.grupo[nombre] + " Cedula " + foundCamper.grupo[cedula])

        }
    }
    }
}