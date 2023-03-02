// This is here purely for testing data persistance via session storage.
// import animalsMockData from "./data/animals.js";
// sessionStorage.setItem("animalsData", JSON.stringify(animalsMockData));
// sessionStorage.setItem("animalIndex", JSON.stringify(8));

const mockData = {
  id: 60275915,
  organization_id: "CA2932",
  url: "https://www.petfinder.com/dog/papi-60275915/ca/san-jose/amazing-dogs-ca2932/?referrer_id=1dadc00f-98d6-4dc4-91ae-fa9f8619779f",
  type: "Dog",
  species: "Dog",
  breeds: {
    primary: "Chihuahua",
    secondary: "Rat Terrier",
    mixed: true,
    unknown: false,
  },
  colors: {
    primary: "Brown / Chocolate",
    secondary: null,
    tertiary: null,
  },
  age: "Young",
  gender: "Male",
  size: "Small",
  coat: "Short",
  attributes: {
    spayed_neutered: true,
    house_trained: true,
    declawed: null,
    special_needs: true,
    shots_current: true,
  },
  environment: {
    children: true,
    dogs: true,
    cats: null,
  },
  tags: [
    "Friendly",
    "Affectionate",
    "Gentle",
    "Playful",
    "Smart",
    "Loves kisses",
    "Curious",
    "Funny",
  ],
  name: "Papi",
  description:
    "Adopt a Pup and Feel the Amazing Love!\n\nCome and visit us on Sunday, March 5th at PetSmart Curtner Ave...",
  organization_animal_id: null,
  photos: [
    {
      small:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/1/?bust=1677701084&width=100",
      medium:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/1/?bust=1677701084&width=300",
      large:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/1/?bust=1677701084&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/1/?bust=1677701084",
    },
    {
      small:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/2/?bust=1677701084&width=100",
      medium:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/2/?bust=1677701084&width=300",
      large:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/2/?bust=1677701084&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/2/?bust=1677701084",
    },
    {
      small:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/3/?bust=1677701085&width=100",
      medium:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/3/?bust=1677701085&width=300",
      large:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/3/?bust=1677701085&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/3/?bust=1677701085",
    },
    {
      small:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/4/?bust=1677701086&width=100",
      medium:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/4/?bust=1677701086&width=300",
      large:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/4/?bust=1677701086&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/4/?bust=1677701086",
    },
    {
      small:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/5/?bust=1677701087&width=100",
      medium:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/5/?bust=1677701087&width=300",
      large:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/5/?bust=1677701087&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/5/?bust=1677701087",
    },
    {
      small:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/6/?bust=1677701087&width=100",
      medium:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/6/?bust=1677701087&width=300",
      large:
        "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/6/?bust=1677701087&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/6/?bust=1677701087",
    },
  ],
  primary_photo_cropped: {
    small:
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/1/?bust=1677701084&width=300",
    medium:
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/1/?bust=1677701084&width=450",
    large:
      "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/1/?bust=1677701084&width=600",
    full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/60275915/1/?bust=1677701084",
  },
  videos: [],
  status: "adoptable",
  status_changed_at: "2023-03-01T20:04:50+0000",
  published_at: "2023-03-01T20:04:49+0000",
  distance: null,
  contact: {
    email: "woof@amazingdogs.org",
    phone: "(408) 477-0553",
    address: {
      address1: null,
      address2: null,
      city: "San Jose",
      state: "CA",
      postcode: "95191",
      country: "US",
    },
  },
  _links: {
    self: {
      href: "/v2/animals/60275915",
    },
    type: {
      href: "/v2/types/dog",
    },
    organization: {
      href: "/v2/organizations/ca2932",
    },
  },
};

let data;

let carouselEl = document.getElementById("carousel");
let animalNameEl = document.getElementById("animal-name");
let adoptionLinkEl = document.getElementById("adoption-link");
let petTypeEl = document.getElementById("pet-type");
let physicalCharacteristicsEl = document.getElementById(
  "physical-characteristics"
);
let aboutEl = document.getElementById("about");
let descriptionEl = document.getElementById("description");
let mapEl = document.getElementById("map");

init();
renderName();
renderCarousel();
renderAdoptionLink();
renderPetType();
renderPhysicalCharacteristics();
renderAbout();
renderDescription();
renderMap();

// Check for data in session storage and load animal. If session storage doesn't exist load Papi. 🐕
function init() {
  const animalsData = JSON.parse(sessionStorage.getItem("animalsData"));
  const animalIndex = JSON.parse(sessionStorage.getItem("animalIndex"));
  const animalData = animalsData?.animals[animalIndex];
  if (animalData) {
    data = animalData;
  } else {
    data = mockData;
  }
}

// Rendering functions

function renderCarousel() {
  let carouselHtml = "";

  if (data.photos?.length) {
    carouselHtml += /*html*/ `
      <div>
        <sl-carousel pagination navigation mouse-dragging loop>
    `;

    data.photos.forEach((photo) => {
      carouselHtml += /*html*/ `
      <sl-carousel-item>
        <img
        src="${photo.full}"
        />
      </sl-carousel-item>
      `;
    });

    carouselHtml += /*html*/ `
        </sl-carousel>
      </div>
      `;

    carouselEl.innerHTML = carouselHtml;
  }
}

function renderName() {
  animalNameEl.textContent = data.name;
}

function renderAdoptionLink() {
  adoptionLinkEl.setAttribute("href", data.url);
  adoptionLinkEl.textContent = `Click here to learn more about ${data.name}.`;
}

function renderPetType() {
  let text = "";
  if (data.breeds.unknown) {
    text = "Unknown";
  } else {
    if (data.breeds.primary) text += data.breeds.primary;
    if (data.breeds.secondary) text += ` & ${data.breeds.secondary}`;
    if (data.breeds.mixed) text += " Mix";
    if (data.contact.address.city)
      text += ` - ${data.contact.address.city}, ${data.contact.address.state}`;
  }
  petTypeEl.textContent = text;
}

function renderPhysicalCharacteristics() {
  let text = "";
  text += data.age;
  text += ` - ${data.gender}`;
  text += ` - ${data.size}`;
  text += ` - ${data.colors.primary}`;
  physicalCharacteristicsEl.textContent = text;
}

function renderAbout() {
  let html = `
    ${data.coat ? `<p>Coat length: ${data.coat}</p>` : ""}
    ${data.attributes.house_trained ? `<p>House-trained: Yes</p>` : ""}
    ${petHealthItems()?.length ? `<p>Health: ${petHealthItems()}</p>` : ""}
    ${
      goodInHomeWithItems()?.length
        ? `<p>Good in a home with: ${goodInHomeWithItems()}</p>`
        : ""
    }
  `;
  aboutEl.innerHTML = html;
}

function renderDescription() {
  let html = /*html*/ `
    <h3>Description</h3>
    <p>${data.description}</p>
  `;

  descriptionEl.innerHTML = html;
}

function renderMap() {
  let mapSrc = `https://www.google.com/maps/embed/v1/place?q=${data.contact.address.city}%20${data.contact.address.state}&key=AIzaSyDy2pTEnbM1IbAmDBgm6lHtIq3xrXUfSwU`;
  mapEl.setAttribute("src", mapSrc);
}

// Utility functions

// Creates a string of health items if they exist.
function petHealthItems() {
  let items = [];
  for (const prop in data.attributes) {
    if (Object.hasOwnProperty.call(data.attributes, prop)) {
      const element = data.attributes[prop];
      if (element) {
        if (prop === "spayed_neutered") items.push("spayed / neutered");
        if (prop === "declawed") items.push(prop);
        if (prop === "special_needs") items.push("special needs");
        if (prop === "shots_current") items.push("vaccinations up to date");
      }
    }
  }
  return items.join(", ");
}

// Creates a string of 'Good in a home with' items if they exist
function goodInHomeWithItems() {
  let items = [];
  for (const prop in data.environment) {
    if (Object.hasOwnProperty.call(data.environment, prop)) {
      const element = data.environment[prop];
      if (element) {
        if (prop === "children") items.push("children");
        if (prop === "dogs") items.push("other dogs");
        if (prop === "cats") items.push("cats");
      }
    }
  }
  return items.join(", ");
}
