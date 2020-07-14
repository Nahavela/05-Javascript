/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {

        let num1 = parseInt(document.getElementById("op-one").value);
        let num2 = parseInt(document.getElementById("op-two").value);
        let reponseAd = num1 + num2;
        let reponseSu = num1 - num2;
        let reponseMu = num1 * num2;
        let reponseDi = num1 / num2;

        switch (operation){

            case "addition":
                alert (reponseAd);
                break;
                
            case "substraction":
                alert (reponseSu);
                break;  
                
            case "multiplication":
                alert (reponseMu);
                break;  
                
            case "division":
                alert (reponseDi);
                break;
            default:
                alert ("default"); // perform the operation
        }        
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
