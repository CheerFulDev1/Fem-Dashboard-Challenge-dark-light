"use strict";

console.log("hello!");
var radioButton = document.querySelectorAll('.toggle__wrapper input');
for (var i = 0; i < radioButton.length; i++) {
  radioButton[i].addEventListener('click', function (event) {
    document.getElementById('dark').checked ? document.querySelector('body').classList = 'dark' : document.querySelector('body').classList = 'light';
  });
}//# sourceMappingURL=script.js.map
