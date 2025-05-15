const token = `https://api.petfinder.com/v2/oauth2/token`;
const url = `https://api.petfinder.com/v2/animals`;
const contentpets = document.getElementById("pets_container");

async function alamacenamiento(){
    fetch(token, {
        method: "POST",
        headers: { "Content-Type":"application/x-www-form-urlencoded"},
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id:"J4JhI96dFy5hPaDmDKLib2rBGYVcCLCSQpkGrra3WVcHyGUfRb",
            client_secret:"I3ZqNR97xl7NJvBeQ0h0NV5XO0DMLMejSIJHGEt0"


       })
    
    })
    .then(res=>res.json())
    .then(data=>{
        const token = data.access_token;
        fetch(url,
        {
        method: "GET",
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
        }

        })
.then(response=>response.json())
.then(data=>{
for (i=0; i<data.animals.length; i++){
let mascotas = data.animals[i]
let images = mascotas.photos[0]?.full || mascotas.photos[0]?.large || mascotas.photos[0]?.medium || mascotas.photos[0]?.small
contentpets.innerHTML += `      <div class="ContenedorAnimales">
<img class="PetImages-rows" src="${images}"/>
<img class="PetImages-colums" src="${images}"/>

</div>`



}






})




    })


    }
    

alamacenamiento()


