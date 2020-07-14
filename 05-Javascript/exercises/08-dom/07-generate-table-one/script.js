/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let lieu = document.getElementById("target");
    let tableau = document.createElement('table');
    lieu.appendChild(tableau);
    for (i=0; i<10;i++){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        tableau.appendChild(tr);
        tr.appendChild(td);
        td.textContent= "Cellule n°"+(i+1);
    }  
    // your code here
})();
