/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let texte = document.getElementById("target").innerHTML;
    let lieu = document.getElementById("target");
    let arr = [];
  
    for (x = 0; arr.length < texte.length; x++) {
      arr.push(arr[x]);
    }
  
    for (i = 0; i < texte.length; i++) {
      let id = document.createElement("id");
      lieu.appendChild(id);
      id.setAttribute("id", "id" + i);
      let vague2 = texte.charAt(i);
      id.innerHTML = vague2;
      document.getElementById("id" + i).style.display = "none";
    }
  
    random = entierAleatoire(10, 50);
  
    function entierAleatoire(min, max) {
      // fonction de random
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    let idName;
    function display(i) { if (i<texte.length){
      // pas juste
      idName = "id" + i;
      setInterval(() => {if (i<texte.length){
        document.getElementById(idName).style.display = "inline";
        i++;
        idName = "id" + i;}
      }, random);

    }} // pas juste

    
    display(0);
    //setInterval(display, random); // pas juste
  
    lieu.removeChild(lieu.firstChild); // your code here
  })();


