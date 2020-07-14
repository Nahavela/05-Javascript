/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function compteur(){
        let pass1 = document.getElementById("pass-one");
        let pass1Value = document.getElementById("pass-one").value;
        pass1.setAttribute("maxlength", 10);
        let counter = document.getElementById('counter');
        let i = pass1Value.length;
        counter.innerHTML= i+"/10";}
    setInterval(compteur,1)
    

       // your code here
})();
