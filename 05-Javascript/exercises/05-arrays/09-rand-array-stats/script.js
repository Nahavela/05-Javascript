/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        

        let arr = []
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        for(i=1;i<11;i++){
        let loop = "n-"+i;
        
        arr.push(document.getElementById(loop).innerHTML = Math.floor(Math.random() * 100) + 1); 
            
        }
        document.getElementById("min").innerHTML = (Math.min(...arr));
        document.getElementById("max").innerHTML =(Math.max(...arr));
        document.getElementById("sum").innerHTML =(arr.reduce(reducer));
        document.getElementById("average").innerHTML = (arr.reduce(reducer))/10;
        
    });    // your code here
})();
