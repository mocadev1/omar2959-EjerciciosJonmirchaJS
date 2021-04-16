/**
 * Omar Beltran, 15 abril 2021
 * 2) Programa una función que te devuelva el texto recortado según el número de
 * caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
 */

export default function cutCharsFromString(text, number) {
    Number(number) ?
        alert(`Cutted elements: ${text.substring(0, number)}`) :
        alert('That wasn\'t a number! Try again');
    
}