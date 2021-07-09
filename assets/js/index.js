import { Leon,Lobo,Oso,Serpiente,Aguila } from "./clases/Especies.js";
import animalesData from "./consulta.js";


document.getElementById("btnRegistrar").addEventListener("click", async() => {
    
    const { animales } = await animalesData;
    let nombreAnimal = document.getElementById("animal").value;
    let edadAnimal = document.getElementById("edad").value;
    let comentariosAnimal = document.getElementById("comentarios").value;
    
    //Se ingresa validacion,en caso de no cumplir la condicion return, es decir termina la funcion
    if (nombreAnimal == "Seleccione un animal"  || edadAnimal == "Seleccione un rango de años" || comentariosAnimal == ""){
        alert("Ingrese todos los campos");
        return;
    }

    if (nombreAnimal == "Leon"){
        animales.forEach(element => {
            if (element.name == "Leon"){
            var leon = new Leon(nombreAnimal,edadAnimal,element.imagen,comentariosAnimal,element.sonido);
           // document.getElementById("tarjeta").src= `assets/imgs/${leon.getImg()}`;
            var url = `assets/imgs/${leon.getImg()}`
            insertCard(url,leon);
            insertModal(leon);
            console.log(leon.getSonido())
        }
        })  
        resetear();
    }
    if (nombreAnimal == "Lobo"){
        animales.forEach(element => {
            if (element.name == "Lobo"){
            var lobo = new Lobo(nombreAnimal,edadAnimal,element.imagen,comentariosAnimal,element.sonido);
            var url = `assets/imgs/${lobo.getImg()}`
            insertCard(url,lobo);
            insertModal(lobo);
        }
        }) 
        resetear();         
    }
    if (nombreAnimal == "Oso"){
        animales.forEach(element => {
            if (element.name == "Oso"){
            var oso = new Oso(nombreAnimal,edadAnimal,element.imagen,comentariosAnimal,element.sonido);
            var url = `assets/imgs/${oso.getImg()}`
            insertCard(url,oso);   
            insertModal(oso);
        }
        })       
        resetear();   
    }
    if (nombreAnimal == "Serpiente"){
        animales.forEach(element => {
            if (element.name == "Serpiente"){
            var serpiente = new Serpiente(nombreAnimal,edadAnimal,element.imagen,comentariosAnimal,element.sonido);
            var url = `assets/imgs/${serpiente.getImg()}`
            insertCard(url,serpiente); 
            insertModal(serpiente);           
        }
        })
        resetear();          
    }
    if (nombreAnimal == "Aguila"){
        animales.forEach(element => {
            if (element.name == "Aguila"){
            var aguila = new Aguila(nombreAnimal,edadAnimal,element.imagen,comentariosAnimal,element.sonido);
            var url = `assets/imgs/${aguila.getImg()}`
            insertCard(url,aguila);     
            insertModal(aguila);      
        }
        }) 
        resetear();         
    }
});

//  ACA ESTA LA FUNCION ENCARGADA DE AGREGAR LA CARD

//RESPECTO AL AUDIO, para cada card, crea un tag audio, en donde el id será el nombre del animal
//luego al reproducir el sonido con la funcion playAudio(nombreAnimal), reproducirá el primer objeto
//de ese nombre, en este caso funciona, si cada objeto tuviese un sonido especifico, habria que utilizar
//un identificador unico para ese objeto, en este caso funciona de esta manera.

let insertCard = ((url,objeto) =>{
    document.getElementById("Animales").innerHTML +=
        `<div class="card mx-1 animal-card btn-warning" style="width: 200px; height: 300px;" >
            <img class="card-img-top" style="height: 85%" data-toggle="modal" data-target="#${objeto.getComentarios()}" id="tarjeta"  src="${url}" alt="Card image cap">
            <div class="card-footer bg-secondary p-1">
                <img onclick="playAudio('${objeto.getNombre()}')" src="assets/imgs/audio.svg" height="36px"/>
                <audio id="${objeto.getNombre()}"> <source src="assets/sounds/${objeto.getSonido()}" type="audio/mpeg">
            </div>
        </div>`
})
            

//ACA CREAMOS UNA FUNCION PARA REINICIAR EL FORMULARIO
var resetear = () =>{
    document.getElementById("formulario").reset();
    document.getElementById("preview").style.backgroundImage="";
}

//FUNCION PARA AGREGAR EL MODAL
//RESPECTO AL ID DEL MODAL, DADO QUE DEBE TENER UN ID UNICO, UTILICÉ EL COMENTARIO DEL OBJETO
//COMO IDENTIFICADOR, TAMBIEN PARA HACER EL MATCH CON LA CARD, UTILICÉ EL COMENTARIO COMO ID. 
let insertModal = (objeto =>{
    
    document.getElementById("cuerpo-modal").innerHTML +=
            `   
                <div class="modal fade" id="${objeto.getComentarios()}">
                    <div class="modal-dialog modal-dialog-centered w-25" role="document">
                        <div class="modal-content bg-dark text-light text-center" id="contenido-modal">
                            <img class="card-img-top h-100" src="assets/imgs/${objeto.getImg()}" alt="Card image cap">
                            <p>Edad ${objeto.getEdad()} </p>
                            <p>Comentarios</p>
                            <p>${objeto.getComentarios()}</p>
                        </div>
                    </div>
                </div>`
})