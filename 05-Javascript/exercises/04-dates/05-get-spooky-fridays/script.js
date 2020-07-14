/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let year = parseInt(document.getElementById("year").value);
        let arr = [];
        let thisYear; 
        const options = { month: 'long'}
        for (let month=0;month<12;month++){
            
            thisYear = new Date (year,month,13)
            let day = thisYear.getDay();
            if (day==5){
                let month13 = thisYear.toLocaleDateString('fr-FR', options)
                arr.push(month13) 
        }
    }
        
    
    alert(arr)
    });    // your code here
})();
