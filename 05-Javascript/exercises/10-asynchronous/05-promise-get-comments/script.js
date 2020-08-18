/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let comment;
        
        window.lib.getPosts()
            .then(array =>{ 
                for (i=0;i<array.length;i++){
                    comment = window.lib.getComments()
                        .then(array=>{array[i].id})
                    array[i].comments = comment;
                    }
                
        
                console.log(array)
                
            });
            
    });      // your code here
})();


