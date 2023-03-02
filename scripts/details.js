const data = {
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

let carouselElement = document.getElementById("carousel");
let animalNameElement = document.getElementById("animal-name");
let adoptionLinkElement = document.getElementById("adoption-link");
let info1Element = document.getElementById("info-1");
let info2Element = document.getElementById("info-2");
let info3Element = document.getElementById("info-3");
let descriptionElement = document.getElementById("description");
let mapElement = document.getElementById("map");

animalNameElement.textContent = data.name;
let mapSrc = `https://www.google.com/maps/embed/v1/place?q=${data.contact.address.city}%20${data.contact.address.state}&key=AIzaSyDy2pTEnbM1IbAmDBgm6lHtIq3xrXUfSwU`;
mapElement.setAttribute("src", mapSrc);

function generateCarousel() {
  let carouselItemsHtml = "";
  data.photos.forEach((photo) => {
    carouselItemsHtml += /*html*/ `
    <sl-carousel-item>
      <img
        src="${photo.full}"
      />
    </sl-carousel-item>
    `;
  });
  carouselElement.innerHTML = carouselItemsHtml;
}

function generateAdoptionLink() {
  adoptionLinkElement.setAttribute("href", data.url);
  adoptionLinkElement.textContent =
    "Click here to learn more about " + data.name + ".";
}

function generateInfo1Element() {
  let text = "";
  if (data.breeds.unknown) {
    text = "Unknown";
  } else {
    if (data.breeds.primary) text += data.breeds.primary;
    if (data.breeds.secondary) text += " & " + data.breeds.secondary;
    if (data.breeds.mixed) text += " Mix";
    if (data.contact.address.city)
      text +=
        " - " + data.contact.address.city + ", " + data.contact.address.state;
  }
  info1Element.textContent = text;
}

function generateInfo2Element() {
  let text = "";
  text += data.age;
  text += " - " + data.gender;
  text += " - " + data.size;
  text += " - " + data.colors.primary;
  info2Element.textContent = text;
}

function generateInfo3Element() {
  let text = `
    ${data.coat ? `<p>Coat length: ${data.coat}</p>` : ""}
    ${data.attributes.house_trained ? `<p>House-trained: Yes</p>` : ""}
    ${
      generatePetHealth()?.length ? `<p>Health: ${generatePetHealth()}</p>` : ""
    }
    ${
      generateGoodInAHomeWith()?.length
        ? `<p>Good in a home with: ${generateGoodInAHomeWith()}</p>`
        : ""
    }
  `;
  info3Element.innerHTML = text;
}

function generatePetHealth() {
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

function generateGoodInAHomeWith() {
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

function generateDescription() {
  let text = /*html*/ `
    <h3>Description</h3>
    <p>${data.description}</p>
  `;

  descriptionElement.innerHTML = text;
}

generateCarousel();
generateAdoptionLink();
generateInfo1Element();
generateInfo2Element();
generateInfo3Element();
generateDescription();