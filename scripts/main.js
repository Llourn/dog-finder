import data from "./data/animals.js";
import { fetchAnimals } from "./fetchers.js";
var submitBtn = document.querySelector("#submit");
var select = document.querySelectorAll("#petSelect sl-select");
var formInp = document.querySelectorAll("#petSelect sl-input");
var loc = document.querySelector("#location");
//http://regexlib.com/REDetails.aspx?regexp_id=122
var regexp = /^((\d{5}-\d{4})|(\d{5})|([A-Z|a-z]\d[A-Z|a-z]\d[A-Z|a-z]\d))$/;

function validForm() {
  var isValidCode = regexp.test(loc.value);
  if (!isValidCode) {
    alert("Please enter A valid postal code");
  }

}

function saveForm() {
  for (var i = 0; i < select.length; i++) {
    var cS = select[i];
    localStorage.setItem(cS.id, JSON.stringify(cS.value));
  }

  for (var i = 0; i < formInp.length; i++) {
    var cI = formInp[i];
    localStorage.setItem(cI.id, JSON.stringify(cI.value));
  }
}

function getForm() {
  for (var i = 0; i < select.length; i++) {
    var cS = select[i];
    var selectForm = JSON.parse(localStorage.getItem(cS.id));
    if (Array.isArray(selectForm)) {
      cS.setAttribute("value", selectForm.join(" "));
    }
  }

  for (var i = 0; i < formInp.length; i++) {
    var cI = formInp[i];
    var inputForm = JSON.parse(localStorage.getItem(cI.id));
    cI.value = inputForm;
  }
}
getForm();

submitBtn.addEventListener("click", () => {
  validForm();
  saveForm();
});
