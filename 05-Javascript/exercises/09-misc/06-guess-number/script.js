/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let nombreADeviner=Math.floor(Math.random() * 100) + 1;
    devine();
    function devine(){
    userGuess=prompt("Trouves le chiffre entre 1 et 100 ?");
    if (userGuess<nombreADeviner) {
        alert("C'est plus grand, essayes encore !");
        devine();
    } else if (userGuess>nombreADeviner) {
        alert("C'est plus petit, essayes encore !");
        devine();
    }
    else {alert("Bravo !!!");}} // your code here
})();
