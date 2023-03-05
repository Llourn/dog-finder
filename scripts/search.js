import AnimalsParameters from "./models/animals.js";
import { fetchAnimals, fetchTypes, fetchBreeds } from "./fetchers.js";
let submitBtn = document.querySelector("#submit");
let selectInputEls = document.querySelectorAll("#petSelect sl-select");
let textInputEls = document.querySelectorAll("#petSelect sl-input");

let locationEl = document.getElementById("location");
let distanceEl = document.getElementById("distance");
const typesData = await fetchTypes();
const breedsData = await fetchBreeds("Dog");

// disable distance field if location is empty
locationEl.addEventListener("input", function () {
  if (locationEl.value) {
    distanceEl.disabled = false;
  } else {
    distanceEl.disabled = true;
  }
});

submitBtn.addEventListener("click", buildParams);

renderAllDynamicOptions();

function addOptionsToForm(elementId) {
  // get field via ID
  let inputField = document.getElementById(elementId);
  let html = "";
  let data;
  // assign data related to the ID
  if (elementId === "breed") {
    data = breedsData.breeds;
  } else {
    data = typesData.types[0][`${elementId}s`];
  }

  // loop through the array and generate the sl-option for each item.
  data.forEach((option) => {
    let value = elementId === "breed" ? option.name : option;
    let underscored = value.replace(/ /g, "_");
    html += `<sl-option value="${underscored}">${value}</sl-option>`;
    // TODO: Testing field value -> API call. Remove later.
    // let newValue = `${inputField.getAttribute("value")} ${underscored}`;
    // inputField.setAttribute("value", newValue);
  });

  inputField.innerHTML = html;
}

function renderAllDynamicOptions() {
  let dynamicFields = ["breed", "gender", "color", "coat"];

  dynamicFields.forEach((field) => {
    addOptionsToForm(field);
  });
}

async function buildParams(event) {
  event.preventDefault();
  let paramObj = new AnimalsParameters();

  for (let i = 0; i < selectInputEls.length; i++) {
    let option = selectInputEls[i];

    if (option.id === "attributes" || option.id === "good_with") {
      option.value.forEach((value) => {
        paramObj[value] = true;
      });
    } else {
      if (option.id === "breed") {
        paramObj[option.id] = replaceJunkWithSpace(option.value);
      } else {
        paramObj[option.id] = replaceJunkWithHyphen(option.value);
      }
    }
  }

  for (let i = 0; i < textInputEls.length; i++) {
    let inputEl = textInputEls[i];
    paramObj[inputEl.id] = inputEl.value;
  }
  const testing = await fetchAnimals(paramObj);
  console.log(testing);
}

function replaceJunkWithSpace(junkRidden) {
  if (Array.isArray(junkRidden)) {
    let hyphenatedJunk = [];
    junkRidden.forEach((junk, index) => {
      // if (index < 100 || index > 175) return;
      let roundOne = junk.replace(/_/g, " ");
      hyphenatedJunk.push(roundOne);
    });
    return hyphenatedJunk;
  }
  return junkRidden;
}

function replaceJunkWithHyphen(junkRidden) {
  if (Array.isArray(junkRidden)) {
    let hyphenatedJunk = [];
    junkRidden.forEach((junk) => {
      let roundOne = junk.replace(/[/|,|&| |(|)|_]+/g, "-");
      let roundTwo =
        roundOne[roundOne.length - 1] === "-"
          ? roundOne.slice(0, -1)
          : roundOne;
      hyphenatedJunk.push(roundTwo);
    });
    return hyphenatedJunk;
  }
  return junkRidden;
}
