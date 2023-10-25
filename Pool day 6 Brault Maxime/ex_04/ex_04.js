function updateLicensePlates(agent, plates){
    if (!agent.car) {
        agent.car = {};
    }
    
    agent.car.licensePlates = plates;
    return agent;
}
var agent = {}
var plates = ["LU 6789", "4711-EA-62", "BMT 216A"];
var updatedAgent = updateLicensePlates(agent, plates);
function showLicensePlates(){
    var license = document.querySelector('ul');
    updatedAgent.car.licensePlates.forEach(function(plate) {
        var listItem = document.createElement('li');
        listItem.textContent = plate;
        license.appendChild(listItem);
    });
}
showLicensePlates();