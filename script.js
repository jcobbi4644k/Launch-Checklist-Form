// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotInput = document.getElementById("pilotName").value;
      let coPilotInput = document.getElementById("coPilotName").value;
      let fuelInput = document.getElementById("fuelValue").value;
      let cargoInput = document.getElementById("cargoValue").value;

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

Function