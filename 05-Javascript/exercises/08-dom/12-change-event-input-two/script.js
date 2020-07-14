/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    function ok(){
        let  number = /\d{1}/g;   
        let validity = document.getElementById('validity');
        let pass1 = document.getElementById("pass-one");
        pass1.setAttribute("minlength", 8)
        let nbrNbr = pass1.value.match(number);

        if (pass1.value.length>=8 && nbrNbr.length>=2){
        validity.textContent= "ok";
        }else{validity.textContent= "Pas ok";}
 
        }

    setInterval(ok,100)
    // your code here
})();
