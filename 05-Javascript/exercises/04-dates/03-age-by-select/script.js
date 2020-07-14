/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let day = parseInt(document.getElementById("dob-day").value);
        let month = parseInt(document.getElementById("dob-month").value);
        let year = parseInt(document.getElementById("dob-year").value);
        let today = new Date();
        let currentDay = today.getDate();
        let currentMonth = today.getMonth()+1;
        let currentYear = today.getFullYear();
        let age = currentYear - year;
        
    if (month >= currentMonth && day >= currentDay ) {
        age = age-1
    }
    alert(age)
    });
    
    
    // your code here
})();
