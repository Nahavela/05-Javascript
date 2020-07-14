/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {  
    class person  {
        constructor (firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        }
        get name() {
            return `${this.firstName} ${this.lastName}`;
          }
          set name(newName) {
            newName = newName.split(" ");
            this.firstName = newName[0];
            this.lastName = newName[1];
          }
      };

let person1 = new person ("Skitty","Pitty");

console.log(person1.name);

person1.name = "Pixel Paxel";


console.log(person1.name)
});// your code here

})();
