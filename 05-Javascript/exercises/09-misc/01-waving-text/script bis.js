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
    let arr = ["5","10","20","10"]
    
    for (x = 0; x <vague.length; x++) {
      arr.push(arr[x]);
    }
    

    for (i=0,c=0;i<vague.length,c<arr.length;i++,c++){
        
        let vague2 = vague.charAt(i);
        let result = vague2.fontsize(arr[c]);
        
        console.log(result)
        document.getElementById("target").innerHTML 
    }
  
  
// your code here
})();

    