

export function Iniciarsesionyregistrar(option2) {
    if (option2 === "1") {
        alert("== Registro de Camper ==");
        let cedula = prompt("Ingresa tu cédula:");

        let campers = [
        { nombre: "Juan", cedula: "12345" },
        { nombre: "Maria", cedula: "67890" },
        { nombre: "Carlos", cedula: "11223" },
        { nombre: "Sofia", cedula: "44556" },
        { nombre: "Luis", cedula: "77889" },
        { nombre: "Elena", cedula: "99001" },
        { nombre: "Andrés", cedula: "22334" },
        { nombre: "Valeria", cedula: "55667" },
        { nombre: "Miguel", cedula: "88990" },
        { nombre: "Camila", cedula: "33221" },
        { nombre: "Ricardo", cedula: "66554" },
        { nombre: "Fernanda", cedula: "99887" }]

         if (campers.some(camper => camper.cedula === cedula)) {
            alert("Error: Ya existe un camper con esa cédula. Intenta con otro ID.");
           
        } else {
            alert("Cédula disponible, puedes registrar el camper.");
            let nombre = prompt("Ingresa tu nombre:");
            campers.push({ nombre, cedula });
            alert ("Nuevo camper registrado correctamente.");
            alert("Bienvenido" [nombre + " " + cedula] );
        }
    } 

    else if (option2 === "2") {
        alert("== Ingresar ==");
        let buscarCedula = prompt("Ingresa tu cédula/Tarjeta de identidad");
        let campers = [
        { nombre: "Juan", cedula: "12345" },
        { nombre: "Maria", cedula: "67890" },
        { nombre: "Carlos", cedula: "11223" },
        { nombre: "Sofia", cedula: "44556" },
        { nombre: "Luis", cedula: "77889" },
        { nombre: "Elena", cedula: "99001" },
        { nombre: "Andrés", cedula: "22334" },
        { nombre: "Valeria", cedula: "55667" },
        { nombre: "Miguel", cedula: "88990" },
        { nombre: "Camila", cedula: "33221" },
        { nombre: "Ricardo", cedula: "66554" },
        { nombre: "Fernanda", cedula: "99887" } ]

        let camper = campers.find(camper => camper.cedula === buscarCedula);
        if (camper) {
            alert("Camper encontrado"[" camper " + camper.nombre,+ " " + " cedula " + camper.cedula]);
        } else {
            alert("No se encontró ningún camper con esa cédula.");
        }
    } 

    else {
        alert("Opción no válida.");
    }

}

