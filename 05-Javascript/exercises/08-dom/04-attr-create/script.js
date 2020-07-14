/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let recup = document.getElementById("source");
    let lien =  recup.getAttribute('data-image');
    let newImage = document.createElement('img');
    let lieu = document.getElementById("target");
    
    newImage.prepend(lien);
    lieu.prepend(newImage);
    
    newImage.setAttribute("src", lien);
   
   console.log(recup)
    // your code here
})();
