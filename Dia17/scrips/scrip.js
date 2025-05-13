const petcontent = document.getElementById ("pets_container")

let accessToken = null;

async function fetchData() {
    const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            grant_type: "client_credentials",
            client_id: "TU_CLIENT_ID",
            client_secret: "TU_CLIENT_SECRET"
        })
    });

    const data = await response.json();
    accessToken = data.access_token;
    console.log("Token guardado en memoria:", accessToken);
}