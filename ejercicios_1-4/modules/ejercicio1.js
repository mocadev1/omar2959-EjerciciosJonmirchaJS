/**
 * Omar Beltran, 15 abril 2021
 * 1) Programa una función que cuente el número de caracteres de una cadena de
 * texto, pe. miFuncion("Hola Mundo") devolverá 10.
 */

export default function charactersIn(text) {
  typeof text === "string"
    ? alert(`The lenght of your string is ${text.length}`)
    : alert("Your input is not a string!");
}
