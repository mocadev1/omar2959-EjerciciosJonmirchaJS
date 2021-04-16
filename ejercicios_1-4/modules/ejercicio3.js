/**
 * Omar Beltran, 15 abril 2021
 * Programa una función que dada una String te devuelva un Array de textos
 * separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá
 * ['hola', 'que', 'tal'].
 */

export default function splitString(text, character) {
  alert(`Splitted string elements: ${text.split(character)}`);
}
