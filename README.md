Índice
Descripción
Tecnologías Utilizadas
Funcionalidades
Conversor de Monedas
Conversor de Temperatura
Conversor de Distancia
Uso del Programa
Video explicativo
Descripción
El Conversor de Monedas, Distancia y Temperatura es un programa desarrollado como parte del desafío del Grupo 5 en el programa de formación de Alura Latam. Permite realizar conversiones entre diferentes unidades de monedas, distancias y temperaturas.

Tecnologías Utilizadas
JDK de Java versión 14
Librería externa org.json-chargebee
API Exchangerate-API para obtener tasas de cambio de moneda en tiempo real
Funcionalidades
Conversor de Monedas
El conversor de monedas permite convertir entre diferentes monedas utilizando las tasas de cambio proporcionadas por la API Exchangerate-API. El programa realiza una solicitud HTTP a la API para obtener las tasas de cambio actualizadas y luego realiza la conversión de acuerdo con las unidades de moneda de origen y destino seleccionadas.

Conversor de Temperatura
El conversor de temperatura permite convertir entre Celsius, Fahrenheit, Kelvin y Rankine. El código utiliza una estructura de control if-else if para determinar la conversión adecuada según las unidades de temperatura seleccionadas. Cada condición verifica las unidades de temperatura de origen y destino y realiza el cálculo de conversión correspondiente.

Conversor de Distancia
El conversor de distancia proporciona la capacidad de convertir entre distintas unidades de distancia, como centímetros, metros, kilómetros, millas y pies. El código utiliza condiciones if-else if para determinar la conversión adecuada según las unidades de distancia seleccionadas. Cada condición realiza el cálculo de conversión correspondiente y muestra el resultado.

Uso del Programa
Selecciona el tipo de conversión que deseas realizar: monedas, distancias o temperaturas.
Ingresa el valor que deseas convertir.
Especifica la unidad de origen y la unidad de destino.
Haz clic en el botón "Convertir" para obtener el resultado de la conversión.
