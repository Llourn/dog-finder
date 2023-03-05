let baseUrl = "https://warm-shore-80646.herokuapp.com/";
// baseUrl = "http://localhost:3000/";

// Removes all null, undefined, 0, or empty string value prperties from any object passed in to it.
// This is to clean up the unused parameters for a fetch request.
const prunedParams = (params) => {
  let parameters = new URLSearchParams(params);
  let keysForDeleting = [];
  parameters.forEach((value, key) => {
    if (value == "") keysForDeleting.push(key);
  });

  keysForDeleting.forEach((key) => {
    parameters.delete(key);
  });
  return parameters;
};

// fetches animals and all parameters provided in the AnimalParameters class
export const fetchAnimals = async (params) => {
  let response = await fetch(`${baseUrl}animals?${prunedParams(params)}`);
  return await response.json();
};

// fetches breeds of animal type
// See below for all accepted types. These are case sensitive.
/*
  "Dog",
  "Cat",
  "Rabbit",
  "Small-Furry",
  "Horse",
  "Bird",
  "Scales-Fins-Other",
  "Barnyard"
*/
export const fetchBreeds = async (type) => {
  let response = await fetch(`${baseUrl}${type}/breeds`);
  return await response.json();
};

// fetches animal types. Includes animal coats, colors, and genders;
export const fetchTypes = async () => {
  let response = await fetch(`${baseUrl}types`);
  return await response.json();
};
