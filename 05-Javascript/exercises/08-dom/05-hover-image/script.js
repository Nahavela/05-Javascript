/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let img = document.getElementsByTagName("img")[0];// Essayer de selctionner img
    let lien =  img.getAttribute('data-hover');// Essayer de récuperer le lien
    
    img.addEventListener("mouseenter", function() {
        img.setAttribute('src', lien);
        })
  
    
    
    
    // your code here
})();
