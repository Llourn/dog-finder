import animalsMockData from "./data/animals.js";

//Add a card to display each animal in the search results
addCard();

//Add a card and display each animal in the search results
function addCard() {
  for (var i = 0; i < animalsMockData.animals.length; i++) {
    //Add an empty card to the page
    const newCard = document.createElement("sl-card");
    document.getElementById("container").appendChild(newCard);
    newCard.classList.add("card-overview");
    const idPlace = document.createElement("div");
    idPlace.setAttribute("display", "none");
    let petId = animalsMockData.animals[i].id;
    idPlace.innerHTML = petId;
    //Add a place on the card for the photo/placeholder
    //Add a placeholder in case there is no photo of an animal
    let mainPhoto = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
    //If the animal has a photo, add it to the card
    if (animalsMockData.animals[i].primary_photo_cropped !== null) {
      mainPhoto = animalsMockData.animals[i].primary_photo_cropped.small;
    }
    const imagePlace = document.createElement("img");
    newCard.appendChild(imagePlace);
    //let 
    imagePlace.slot = "image";
    imagePlace.src = mainPhoto;
    imagePlace.alt = "a dog available for adoption";
    //Add a header to the card
    const cardHeader = document.createElement("div");
    newCard.appendChild(cardHeader);
    cardHeader.slot = "header";
    cardHeader.setAttribute("id", "card-header");
    //Add the animal's name and age to the card header
    let petName = animalsMockData.animals[i].name;
    const namePlace = document.createElement("strong");
    cardHeader.appendChild(namePlace);
    namePlace.innerHTML = petName;
    let petAge = animalsMockData.animals[i].age;
    if (petAge == "Baby") {
      petAge = "Puppy"
    }
    const agePlace = document.createElement("small");
    cardHeader.appendChild(agePlace);
    agePlace.innerHTML = petAge;
    let petDescription = animalsMockData.animals[i].description;
    const descriptionPlace = document.createElement("p");
    newCard.appendChild(descriptionPlace);
    descriptionPlace.innerHTML = petDescription;
    const cardFooter = document.createElement("div");
    newCard.appendChild(cardFooter);
    cardFooter.slot = ("footer");
    const infoButton = document.createElement("button");
    cardFooter.appendChild(infoButton);
    infoButton.innerHTML = "Click for More Information";
    infoButton.addEventListener("click", getDetails);
  }

  function getDetails () {
    window.location.href = "details.html";
  }

}

