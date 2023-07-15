/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor (firstname,lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
    
    
        get sayHello() {
            return this.hello();
        }
        hello() {
            return "Hello, "+ this.firstname+ " "+ this.lastname+" !";
        }
     
    }
     
     const Person1 = new Person ("Skitty", "Kitty");
     const Person2 = new Person ("Pixel", "Paxel");
    
     document.getElementById("run").addEventListener("click", () => {
         console.log(Person1.sayHello);
         console.log(Person2.sayHello);
       // your code here
    });
})();