// Write your JavaScript code here!
let button = null;

window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!")
         event.preventDefault()
      }
      else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault()
      }


      if (fuelLevelInput.value < 10000) {
         viewItems()
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${coPilotNameInput.value} is ready for launch.`;
         document.getElementById("fuelStatus").innerHTML = "Fuel level too law for launch";
         document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
         document.querySelector("h2").style.color = "red";
         event.preventDefault()
      }
      else if (cargoMassInput.value > 10000) {
         viewItems()
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch.`;
         document.getElementById("copilotStatus").innerHTML = `Co-pilot ${coPilotNameInput.value} is ready for launch.`;
         document.getElementById("cargoStatus").innerHTML = "Cargo Mass is too high to launch";
         document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
         document.querySelector("h2").style.color = "red";
         event.preventDefault();
      }

      else if (fuelLevelInput.value > 10000 && cargoMassInput.value < 10000); {
         viewItems()
         document.querySelector("h2").innerHTML = "Shuttle is ready for launch";
         document.querySelector("h2").style.color = "green"
         event.preventDefault()
      }


      function hideItems() {
         document.getElementById("faultyItems").style.visibility = "hidden";
      }

      function viewItems() {
         document.getElementById("faultyItems").style.visibility = "visible";
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

window.addEventListener("load", function () {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function (json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `\
         <h2>Mission Destination</h2>
           <ol>
             <li>Name: ${json[0].name}</li>
             <li>Diameter: ${json[0].diameter}</li>
             <li>Star: ${json[0].star}</li>
             <li>Distance from Earth: ${json[0].distance}</li>
              <li>Number of Moons: ${json[0].moons}</li>
           </ol>
 <img src="${"https://www.nasa.gov/sites/default/files/images/587837main_Kepler16_transit_art2_full.jpg"}"></img>`;
      })
   })
})