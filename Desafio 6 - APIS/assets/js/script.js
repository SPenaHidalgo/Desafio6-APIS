// Constantes
const monedaNacional = document.querySelector("#moneda-nacional"); // Corresponde al input
const selectorMonedas = document.querySelector("#selector-monedas"); // Corresponde al select
const convertirMoneda = document.querySelector("#buscar-moneda"); // Corresponde al botón donde se hace la conversión
const totalMonto = document.querySelector("#total-monto"); // Corresponde al total calculado
const apiURL = "https://mindicador.cl/api"; // Corresponde a la URL de la API

// Función para obtener los tipos de cambio de la API
const getMonedas = async apiURL => {
 try {
  const respuesta = await fetch(apiURL);
  return await respuesta.json();
 } catch (error) {
  console.error("Error al obtener los tipos de cambio:", error);
 }
};

// Función para renderizar las opciones a considerar en el select
const renderMonedas = async () => {
 try {
  const monedas = await getMonedas(apiURL);

  const monedasFiltradas = Object.fromEntries(Object.entries(monedas).slice(3, -5));

  let template = "";
  for (const moneda in monedasFiltradas) {
   template += `<option value="${moneda}">${monedasFiltradas[moneda].nombre}</option>`;
  }
  selectorMonedas.innerHTML = template;
 } catch (error) {
  selectorMonedas.innerHTML = "<option value=''>Error al cargar monedas</option>";
  console.error("Error al renderizar las monedas:", error);
 }
};

// Sirve para llamar a la función y así renderizar las monedas
renderMonedas();

// Función para convertir la moneda nacional a la moneda seleccionada
const convertirMonedaNacional = async () => {
 try {
  const monedaSeleccionada = selectorMonedas.value;
  const cantidad = monedaNacional.value;

  const res = await fetch(apiURL);
  const data = await res.json();

  let valorMoneda;

  switch (monedaSeleccionada) {
   case "dolar":
    valorMoneda = data.dolar.valor;
    break;
   case "dolar_intercambio":
    valorMoneda = data.dolar_intecambio.valor;
    break;
   case "euro":
    valorMoneda = data.euro.valor;
    break;
   case "uf":
    valorMoneda = data.uf.valor;
    break;
   case "ivp":
    valorMoneda = data.ivp.valor;
    break;
   case "ipc":
    valorMoneda = data.ipc.valor;
    break;
   case "utm":
    valorMoneda = data.utm.valor;
    break;
   case "bitcoin":
    valorMoneda = data.bitcoin.valor;
    break;
   default:
  }

  const resultado = valorMoneda * cantidad;

  totalMonto.innerText = resultado;
 } catch (error) {
  totalMonto.innerText = "Error al convertir la moneda";
  console.error("Error al convertir la moneda:", error);
 }
};

// Event listener para el botón de conversión
convertirMoneda.addEventListener("click", convertirMonedaNacional);
