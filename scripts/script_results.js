import animalsMockData from "./data/animals.js";
console.log (animalsMockData);
console.log(animalsMockData.animals.length);



addCard();

function addCard() {
for (var i = 0; i < animalsMockData.animals.length; i++) {
  const newCard = document.createElement("sl-card");
  document.getElementById("container").appendChild(newCard);
  newCard.classList.add("card-overview");
  let mainPhoto = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
  if (animalsMockData.animals[i].primary_photo_cropped !== null) {
    mainPhoto = animalsMockData.animals[i].primary_photo_cropped.small;
  }
  const imagePlace = document.createElement("img");
  newCard.appendChild(imagePlace);
  imagePlace.slot = "image";
  imagePlace.src = mainPhoto;
  imagePlace.alt = "a dog available for adoption";
  let petName = animalsMockData.animals[i].name;
  const namePlace = document.createElement("strong");
  newCard.appendChild(namePlace);
  namePlace.innerHTML = petName;

  let petAge = animalsMockData.animals[i].age;
  if (petAge == "Baby") {
    petAge = "Puppy"
  }
  const agePlace = document.createElement("small");
  newCard.appendChild(agePlace);
  agePlace.innerHTML = petAge;
  
  const lineBreak = document.createElement("br");
  newCard.appendChild(lineBreak);
  let petDescription = animalsMockData.animals[i].description;
  const descriptionPlace = document.createElement("p");
  newCard.appendChild(descriptionPlace);
  descriptionPlace.innerHTML = petDescription;
  
  const infoButton = document.createElement("button");
  newCard.appendChild(infoButton);
  infoButton.innerHTML = "Click for More Information";
  console.log(i, petName, animalsMockData.animals[i].age)
}
}