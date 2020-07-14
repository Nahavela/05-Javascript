/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    let today = new Date()
    let heure = today.getHours()
    let minute = today.getMinutes()
    let texte
if (heure < 17 ) {
    texte = "Bonjour !"
} else if (heure === 17 && minute < 30){
    texte = "Bonjour !";
} 

else {
    texte ="Bonsoir !";
}// your code here
document.getElementById("target").innerHTML = texte
    
})();
