let citySelect = document.querySelector("#city-select");

function updateTime() {
  let selectedValue = citySelect.value; 

  if (selectedValue === "") {
    document.querySelector("#city-selection").innerHTML = "City";
    document.querySelector("#current-date").innerHTML = "Date";
    document.querySelector("#current-time").innerHTML = "Time";
    return;
  }

  if (selectedValue === "current-location") {
    let localTimeZone = moment.tz.guess();
    let localTime = moment().tz(localTimeZone).format("h:mm:ss A");
    let localDate = moment().tz(localTimeZone).format("dddd, MMMM Do, YYYY");

    document.querySelector("#city-selection").innerHTML = "Your Current Location 📍";
    document.querySelector("#current-date").innerHTML = `Today is ${localDate}.`;
    document.querySelector("#current-time").innerHTML = `${localTime}`;
  }

  setInterval(() => {
    document.querySelector("#current-time").innerHTML = `${moment().tz(localTimeZone).format("h:mm:ss A")}`;},
    1000);
    return;
}

citySelect.addEventListener("change", updateTime);