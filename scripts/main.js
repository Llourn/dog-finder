import data from "./data/animals.js";
import { fetchAnimals } from "./fetchers.js";
var submitBtn = document.querySelector("#submit");
// var formInput = document.querySelector('form');
// form.addEventListener("submit", fetchAnimals);

/*function isvalidCode(postalCode) {
   return /^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$/.test(postalCode);
}

function isValidZip (zip) {

}

if (!isvalidCode(postalCode)) {
    alert ("Please enter A valid postal code")  
  }
else{
fetchAnimals();
*/


function validForm() {
   if (breed === false && size === false && gender === false && age === false && color === false && coat === false) {
        alert ("You must fill out at least one of the fields before the form can be submited.")
        return;
}
}


function saveForm(e) {
  e.preventDefault();
  var select = document.querySelectorAll("#petSelect sl-select");
  var formInp = document.querySelectorAll("#petSelect sl-input");

for (var i = 0; i < select.length; i++) {
  var cS = select[i] 
  localStorage.setItem(cS.id, JSON.stringify(cS.value));
  }

for (var i = 0; i < formInp.length; i++) {
  var cI = formInp[i] 
  localStorage.setItem(cI.id, JSON.stringify(cI.value));
  }

}


submitBtn.addEventListener("click", saveForm)