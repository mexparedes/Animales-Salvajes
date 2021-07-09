let animalesData = (async () => {
    const res = await fetch("./animales.json");
    const data = await res.json();
    return data;
})();
export default animalesData;
// En este archivo se realiza la consulta