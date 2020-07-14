/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let vague = document.getElementById("target").innerHTML
    let style = document.getElementById("target")
    
    for (i=0;i<vague.length;i++){
        
       let 
       (vague.charAt(i)).style.fontsize = "11rem";
   }
// your code here
})();
