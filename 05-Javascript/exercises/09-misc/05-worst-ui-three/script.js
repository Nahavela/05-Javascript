/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    function roll(buttonId, inputId, start, end) {
      let button = document.getElementById(buttonId);
      let value = document.getElementById(inputId);
      let min = value.getAttribute("data-min");
      let max = value.getAttribute("data-max");
      let isRolling = true;
      let rolling = setInterval(() => {
        if (value.value < max) {
          value.value = parseInt(value.value) + 1;
          if (value.value < 10) {
            value.value = 0 + value.value;
          }
        } else if (value.value == max) {
          value.value = min;
        }
        //console.log(value.value);
      }, 100);
      button.addEventListener("click", () => {
        if (isRolling == true) {
          let phoneNbr = document.getElementById("target").innerHTML;
          clearInterval(rolling);
          isRolling = false;
          document.getElementById("target").innerHTML =
            phoneNbr.substring(0, start) +
            value.value +
            phoneNbr.substring(end, phoneNbr.length);
        } else {
          roll(buttonId, inputId, start, end);
          isRolling = true;
        }
      });
    }
    roll("fix-part-one", "part-one", 1, 4);
    roll("fix-part-two", "part-two", 4, 6);
    roll("fix-part-three", "part-three", 6, 8);
    roll("fix-part-four", "part-four", 8, 10);
  })();