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
    // your code here
    let message = document.getElementById("target").innerHTML;
    document.getElementById("target").innerHTML = "";
    let maxDelay = 500;
    let i = 0;
  
    function typeWriter() {
      let delay = Math.floor(Math.random() * maxDelay + 1);
      if (i < message.length) {
        document.getElementById("target").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, delay);
      }
    }
    typeWriter();
  })();


