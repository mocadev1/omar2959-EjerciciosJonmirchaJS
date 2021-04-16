import charactersIn from "./ejercicio1.js";
import cutCharsFromString from "./ejercicio2.js";
import splitString from "./ejercicio3.js";
import repeatString from "./ejercicio4.js";

function menu() {
  const option = prompt(
    `Which exercise would you like to try?
        1) Characters in a string
        2) Cut X characters from a string
        3) Split string by X character
        4) Repeat N times a string
        0) Exit`,
    "0"
  );
  return option;
}

let option;

do {
  option = menu();

  switch (option || "0") {
    case "1":
      charactersIn(
        prompt(
          "Please enter the string from which you would like to know how many \
          characters it has:"
        )
      );

      break;

    case "2":
      cutCharsFromString(
        prompt(
          "Please enter the string from which you would like to cut the chars:"
        ),
        prompt(
          "Now enter the number of chars you would like to cut from \
          the string:"
        )
      );

      break;

    case "3":
      splitString(
        prompt("Please enter the string you would like to split:"),
        prompt("Now enter the character that will split your string:")
      );

      break;

    case "4":
      repeatString(
        prompt("Please enter the string which you would like to repeat:"),
        prompt(
          "Now enter the number of times you would like to repeat the string:"
        )
      );
      break;

    case "0":
      break;

    default:
      alert("Is not a option!");
  }
} while (!(option === "0" || option === null));
// option !== "0" && option !== null
alert("Bye bye");
