const animalsUrl = "https://warm-shore-80646.herokuapp.com/animals";

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
  console.log(parameters);
  return parameters;
};

export const fetchAnimals = async (params) => {
  let animalsResults = await fetch(animalsUrl + "?" + prunedParams(params));
  return await animalsResults.json();
};
