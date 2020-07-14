/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour : "2-digit", minute: "2-digit" };
    let today = new Date()
    let texte = today.toLocaleDateString('fr-FR', options)
    document.getElementById("target").innerHTML = texte;
    
        // your code here
})();
