/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    // target part 1

    let output = document.getElementById("target");
    output.innerHTML= "+32";
    let part1 = document.createElement("span");
        output.appendChild(part1);
        part1.setAttribute("id", "part1");
        document.getElementById("part1").innerHTML= "460"

    // target part 2


    let part2 = document.createElement("span");
        output.appendChild(part2);
        part2.setAttribute("id", "part2");
        document.getElementById("part2").innerHTML= "00"
        
    // target part 3

    let part3 = document.createElement("span");
        output.appendChild(part3);
        part3.setAttribute("id", "part3");
        document.getElementById("part3").innerHTML= "00"
        
    // target part 4


    let part4 = document.createElement("span");
        output.appendChild(part4);
        part4.setAttribute("id", "part4");
        document.getElementById("part4").innerHTML= "00"

    // part 1

    document.getElementById("part-one").addEventListener("click", () => { 
        let valeur1 = parseInt(document.getElementById("part-one").innerHTML);
        let valeur = document.getElementById("part-one");
        let max = parseInt(valeur.dataset.max);
        let min = parseInt(valeur.dataset.min);
            if (valeur1<max){
                valeur1 = valeur1+1;
                document.getElementById("part-one").innerHTML=valeur1
                document.getElementById("part1").innerHTML=valeur1
            }else{
                valeur1=min-1;
                document.getElementById("part-one").innerHTML=min;
            }
        
    });
    
    // part 2
    
    document.getElementById("part-two").addEventListener("click", () => { 
        let valeur1 = parseInt(document.getElementById("part-two").innerHTML);
        let valeur = document.getElementById("part-two");
        let max = parseInt(valeur.dataset.max);
        let min = parseInt(valeur.dataset.min);
        function twoDigit(n) {
            return (n < 10 ? '0' : '') + n
        }
            if (valeur1<max){
                valeur1 = valeur1+1;
                document.getElementById("part-two").innerHTML=twoDigit(valeur1)
                document.getElementById("part2").innerHTML=twoDigit(valeur1)
            }else{
                valeur1=min-1;
                document.getElementById("part-two").innerHTML=min;
            }
        
    });
    
    // part 3

    document.getElementById("part-three").addEventListener("click", () => { 
        let valeur1 = parseInt(document.getElementById("part-three").innerHTML);
        let valeur = document.getElementById("part-three");
        let max = parseInt(valeur.dataset.max);
        let min = parseInt(valeur.dataset.min);
        function twoDigit(n) {
            return (n < 10 ? '0' : '') + n
        }
            if (valeur1<max){
                valeur1 = valeur1+1;
                twoDigit
                document.getElementById("part-three").innerHTML=twoDigit(valeur1);
                document.getElementById("part3").innerHTML=twoDigit(valeur1)
            }else{
                valeur1=min-1;
                document.getElementById("part-three").innerHTML=min;
            }
        
    });
    
    
    // part 4
    
    document.getElementById("part-four").addEventListener("click", () => { 
        let valeur1 = parseInt(document.getElementById("part-four").innerHTML);
        let valeur = document.getElementById("part-four");
        let max = parseInt(valeur.dataset.max);
        let min = parseInt(valeur.dataset.min);
        function twoDigit(n) {
            return (n < 10 ? '0' : '') + n
        }
            if (valeur1<max){
                valeur1 = valeur1+1;
                document.getElementById("part-four").innerHTML=twoDigit(valeur1);
                document.getElementById("part4").innerHTML=twoDigit(valeur1)
            }else{
                valeur1=min-1;
                document.getElementById("part-four").innerHTML=min;
            }
        
    });// your code here
})();
