let citySelect = document.querySelector("#city-select");
let intervalID;

function updateTime() {
  clearInterval(intervalID);

  let selectedValue = citySelect.value; 

  if (selectedValue === "") {
    document.querySelector("#city-selection").innerHTML = "";
    document.querySelector("#current-date").innerHTML = "";
    document.querySelector("#current-time").innerHTML = "";
    return;
  }

  let timeZoneMap = {
    "southKorea": "Asia/Seoul",
    "spain": "Europe/Madrid",
    "italy": "Europe/Rome",
    "nepal": "Asia/Kathmandu",
    "domincan republic": "America/Santo_Domingo",
    "grenada": "America/Grenada",
    "cuba": "America/Havana",
    "canada": "America/Toronto",
    "mexico": "America/Mexico_City"
  };

  let selectedTimezone;
  let selectedCity;

  if (selectedValue === "current-location") {
    selectedTimezone = moment.tz.guess();
    selectedCity = "Your Current Location 📍"
  } else {
    selectedTimezone = timeZoneMap[selectedValue];
    selectedCity = citySelect.options[citySelect.selectedIndex].text;
  }

  if (selectedTimezone) {
    function updateClock() {
      let cityTime = moment().tz(selectedTimezone).format("h:mm:ss A");
      let cityDate = moment().tz(selectedTimezone).format("dddd, MMMM Do, YYYY")
    
    document.querySelector("#city-selection").innerHTML = selectedCity;
    document.querySelector("#current-date").innerHTML = `Today is ${cityDate}.`;
    document.querySelector("#current-time").innerHTML = `${cityTime}`;
  }
    
  updateClock();
  intervalID = setInterval(updateClock, 1000);
  
  }
}


citySelect.addEventListener("change", updateTime);
updateTime();