/**
 * Omar Beltran, 15 abril 2021
 * 4) Programa una función que repita un texto X veces,
 * pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

 export default function repeatString(text, number) {
    Number(number) ?
        alert(`Resulting string: ${text.repeat(number)}`) :
        alert('That wasn\'t a number! Try again');
    
}