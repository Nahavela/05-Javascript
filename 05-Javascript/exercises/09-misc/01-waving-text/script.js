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
    let lieu = document.getElementById("target")
    let arr = ["10px","20px","30px","40px","50px","60px","50px","40px","30px","20px"]
    
    for (x = 0; arr.length <vague.length; x++) {
      arr.push(arr[x]);
      
    }
    
    for (i=0,c=0;i<vague.length,c<arr.length;i++,c++){
        
        
        let id = document.createElement('id');
        lieu.appendChild(id);
        id.setAttribute('id', i);
        let vague2 = vague.charAt(i);
        id.innerHTML = vague2;
        id.style.fontSize = arr[c]
    }
    lieu.removeChild(lieu.firstChild)

// your code here
})();

    