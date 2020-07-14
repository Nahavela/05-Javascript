/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
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
  
    for (c=1;c<11;c++){   
        let tr = document.createElement('tr');
        tableau.appendChild(tr);
    for (i=0; i<10;i++){
        let td = document.createElement('td');
        tr.appendChild(td);
        td.textContent= c+"x"+(i+1)+"="+(c*(i+1));
    }}  // your code here
})();
