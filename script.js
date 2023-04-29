// Write your JavaScript code here!

//const { pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  
  let list = document.getElementById("faultyItems");
  list.style.visibility = "hidden";


  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel");
    let cargoLevel = document.querySelector("input[name=cargoMass]");


    pilot = pilot.value;
    copilot = copilot.value;
    fuelLevel = fuelLevel.value;
    cargoLevel = cargoLevel.value;

    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   let pickedPlanet = pickPlanet(listedPlanets);

   addDestinationInfo( document,
    pickedPlanet.name,
    pickedPlanet.diameter,
    pickedPlanet.star,
    pickedPlanet.distance,
    pickedPlanet.moons,
    pickedPlanet.image)
    });
});
