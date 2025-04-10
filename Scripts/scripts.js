// Proyecto python a Javascript//


//Importamos los módulos con menus//
import { Opciones1 } from "./Menu.js";
import { Iniciarsesionyregistrar} from "./Camper.js";
fetch('../Db/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error("Error", error));
//Damos opciones//
let opt = prompt ("Hola, ingresa quien eres: Camper (1), Docente (2), Administrador(3");
//Llamamos el primer menu//
Opciones1(opt);
//Segun las opciones que se elijan se muestran los demas menus y opciones//
if (opt == "1"){
    alert ("¿Que quieres hacer?");
    let Opt2 = prompt (" Ingresar (2), \n" + 
                        "Registrarse(1)  ");
    Iniciarsesionyregistrar(Opt2);

}
if (opt == "2" ){
    alert ("¿Que quieres hacer?");

}


//Desarrollado por Juan Umaña ti 1097783757//