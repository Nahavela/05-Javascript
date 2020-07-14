/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    class Animal {
            sayHello() {
                return `${this.constructor.greeting}! I'm ${this.name}!`;
            }
            
        }
    
    
    class Cat extends Animal {
        static greeting = "Hello";

        constructor(name){
            super();
            this.name = name;        
        }
    }
    class Dog extends Animal {
        static greeting = "Hello";
 
        constructor(name){
            super();
            this.name = name;
            
            }
    }

    const Cat1 = new Cat ("Skitty");
    const Dog1 = new Dog ("Pixel");
    
    document.getElementById("run").addEventListener("click", () => {
    console.log(Cat1.sayHello());
    console.log(Dog1.sayHello());
    });
    // your code here

})();
