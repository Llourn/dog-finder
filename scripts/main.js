import data from "./data/animals.js";
import { fetchAnimals } from "./fetchers.js";
var submitBtn = document.querySelector("#submit");
var select = document.querySelectorAll("#petSelect sl-select");
var formInp = document.querySelectorAll("#petSelect sl-input");
  
//http://regexlib.com/REDetails.aspx?regexp_id=122

function isValidCode(location) {
   return /^((\d{5}-\d{4})|(\d{5})|([A-Z|a-z]\d[A-Z|a-z]\d[A-Z|a-z]\d))$/.test(location);
  if (!isValidCode(location)) {
    alert ("Please enter A valid postal code")  
  }else{
fetchAnimals();
  }
}



function validForm() {
   if (breed === false && size === false && gender === false && age === false && color === false && coat === false) {
        alert ("You must fill out at least one of the fields before the form can be submited.")
        return;
}
}

  

function saveForm (e) {
  e.preventDefault();
  
  for (var i = 0; i < select.length; i++) {
    var cS = select[i] 
    localStorage.setItem(cS.id, JSON.stringify(cS.value));
  }
  
  for (var i = 0; i < formInp.length; i++) {
    var cI = formInp[i] 
    localStorage.setItem(cI.id, JSON.stringify(cI.value));
  }
}

  
function getForm() {
  
    for (var i = 0; i < select.length; i++) {
    var cS = select[i] 
    var selectForm = JSON.parse(localStorage.getItem(cS.id))
    if (Array.isArray(selectForm)) {
      console.log(selectForm)
    cS.setAttribute("value", selectForm.join(" "));
      
  }

     for (var i = 0; i < formInp.length; i++) {
    var cI = formInp[i] 
    cI.setAttribute = ("value", JSON.parse(localStorage.getItem(cI.id)));
   };
  }
}

getForm();


submitBtn.addEventListener("click", saveForm);