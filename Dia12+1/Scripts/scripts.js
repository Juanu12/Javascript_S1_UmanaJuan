
document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedor = document.querySelector('.opciones');

    async function fetchData(){
        const res = await fetch('https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Tasks');
        data = await res.json();
        return data;
    }
    function displayCapsula(data){

        datosContenedor.innerHTML=``;
        data.forEach(cap =>{
            const capDiv=document.createElement('div');
            if(cap.status=== "On hold"){
                capDiv.innerHTML=`<div class="capsula">
            <div class="infoText">
                <p>${cap.task}</p>
            </div>
            <div class="Botones">
                <div class="terminado">
                    <img src="./storage/img/pngwing.com (2).png" alt="" data-id="${cap.id}" class="completado">
                </div>
                <div class="eliminado">
                    <img src="./storage/img/pngwing.com (4).png" data-id="${cap.id}" alt="" class="eliminado">
                </div>

            </div>
        </div>`
        datosContenedor.appendChild(capDiv);
        ;} else if (cap.status === "Ready"){
            capDiv.innerHTML=`<div class="capsula">
            <div class="infoText">
                <p style="text-decoration: line-through; opacity: 0.5;">${cap.task}</p>
            </div>
            <div class="Botones">
                <div class="terminado">
                    <img src="./storage/img/pngwing.com (2).png" alt="" data-id="${cap.id}" class="completado">
                </div>
                <div class="eliminado">
                    <img src="./storage/img/pngwing.com (4).png" data-id="${cap.id}" alt="" class="eliminado">
                </div>

            </div>
        </div>`
        }
            datosContenedor.appendChild(capDiv);
        })
    }

    fetchData().then(data=>{
        console.log(data);
        displayCapsula(data);
    })
})