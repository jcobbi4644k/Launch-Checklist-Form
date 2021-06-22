// Write your JavaScript code here!

window.addEventListener("load", function(){
   let form = document.querySelector("form"); 
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotInput = document.getElementById("pilotName").value;
      let coPilotInput = document.getElementById("copilotName").value;
      let fuelInput = document.getElementById("fuelLevel").value;
      let cargoInput = document.getElementById("cargoMass").value;
      console.log(pilotInput)
      console.log(coPilotInput)
      console.log(fuelInput)
      console.log(cargoInput)
      

      if ((pilotInput === '')||  (coPilotInput === '')|| (fuelInput === '')|| (cargoInput === '')) {
         alert("All information must be entered before takeoff can commence");
         
      } else if (isNaN(fuelInput) || isNaN(cargoInput) ) {
         alert("Fuel Level and Cargo mass must be numbers. Fuel minimum is 10,000 L, and Cargo maximum is 10,000 kilograms");
         
      } else if (!isNaN(pilotInput) || !isNaN(coPilotInput)) {
         alert("Please enter valid pilot and copilot names. Must not be a number");
         
      } else {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput} Status: Ready For Launch.`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${coPilotInput} Status: Ready For Launch.`;
         if (fuelInput < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not ready For Launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = `Fuel level: ${fuelInput} is less than the 10,000L required for trip. Status: Not Ready For Launch`;
         } else {
            document.getElementById("fuelStatus").innerHTML = `Fuel level ${fuelInput} is above the 10,000L required for launch. Status: Ready For launch`;
         }
         if (cargoInput > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not ready For Launch";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("cargoStatus").innerHTML = `Current weight of ${cargoInput}kg is over the cargo weight limit of 10,000kg. Status: Not Ready For Launch`;
         } else {
            document.getElementById("cargoStatus").innerHTML = `Cargo mass ${cargoInput} is under 10,0001kg. Status: Ready For Launch`;
         } 
         if (cargoInput <= 10000 && fuelInput >= 10000) {
            document.getElementById('launchStatus').innerHTML = "Shuttle ready For Launch";
            document.getElementById("launchStatus").style.color = "green";
            document.getElementById("faultyItems").style.visibility = "visible"
         }
         
      }

   });


   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div = document.getElementById("missionTarget");
         const planet = Math.round(Math.random()*5);
         div.innerHTML = `
         <h2>Mission Destination</h2>
      <ol>
      <li>Name: ${json[planet].name}</li>
      <li>Diameter: ${json[planet].diameter}</li>
      <li>Star: ${json[planet].star}</li>
      <li>Distance from Earth: ${json[planet].distance}</li>
      <li>Number of Moons: ${json[planet].moons}</li>
      </ol>
      <img src="${json[planet].image}"> `;
      });
   });
});


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

