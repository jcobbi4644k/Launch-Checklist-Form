// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form"); 
   form.addEventListener("submit", function(event) {
      let pilotInput = document.getElementById("pilotName").value;
      let coPilotInput = document.getElementById("coPilotName").value;
      let fuelInput = document.getElementById("fuelValue").value;
      let cargoInput = document.getElementById("cargoValue").value;

      if ((pilotInput === '')||  (coPilotInput === ' ')|| (fuelInput === '')|| (cargoInput === '')) {
         alert("All information must be entered before takeoff can commence");
         event.preventDefault();
      } else if (isNaN(fuelInput) === true || isNaN(cargoInput) === true) {
         alert("Fuel Level and Cargo mass must be numbers. Fuel minimum is 10,000 L, and Cargo maximum is 10,000 kilograms");
         event.preventDefault();
      } else if (isNaN(pilotInput) !=== true || isNaN(cargoInput) !=== true) {
         alert("Please enter valid pilot ans copilot names. Must not be a number");
         event.preventDefault();
      } else {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput} Status: Ready For Launch.`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${coPilotInput} Status: Ready For Launch.`;
      }

   })
})
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

