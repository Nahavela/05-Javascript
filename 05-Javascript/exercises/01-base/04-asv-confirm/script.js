/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function questions() {
    let age = prompt("Quel age as-tu ?");
    let sexe = prompt("De quel sexe es-tu ?");
    let ville = prompt("Dans quelle ville vis-tu ?");

    if (confirm("Tu as "+age+" tu es de sexe "+sexe+" tu vis à "+ville+ ". Ceci est-il correct ?")){

        alert("Merci pour ces info !");
    } else {
        questions();
    }
}
    
questions();    
