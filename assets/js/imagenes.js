import animalesData from "./consulta.js";


document.getElementById("animal").addEventListener("change", async () => {
    const { animales } = await animalesData;
    let nombreAnimal = document.getElementById("animal").value;
    let animalFinded = animales.find((p) => p.name == nombreAnimal);
    //document.getElementById("preview").innerHTML = `<img src="assets/imgs/${animalFinded["imagen"]}" style="width: 100%;"/>`
    document.getElementById("preview").style.backgroundImage = `url(assets/imgs/${animalFinded["imagen"]})`;
});

