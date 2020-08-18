/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    
    document.getElementById("target").innerHTML = localStorage.getItem("click");
    let clicks =localStorage.getItem("click");
    let nbrClick = document.getElementById("target");
    document.getElementById("increment").addEventListener("click", () => { 
    
    
    click()
    function click() {
        clicks ++;}
    nbrClick.innerHTML = clicks;
    localStorage.setItem("click", clicks)// your code here
    });
    
    ;
})();
