let request = new XMLHttpRequest();
let forecastRequest = new XMLHttpRequest();
let APIKEY = "7754db3139bf0fe7ff6e3f7b588896f0";


function displayNicely(apiData) {
    apiData = JSON.parse(apiData);
    console.log(apiData);
    let htmlString = apiData.name + " " + "<br />" + apiData.weather[0].description;
    htmlString += `<img src="https://openweathermap.org/img/w/${apiData.weather[0].icon}.png"><br />`;

    let temp = (apiData.main.temp - 273.15).toFixed(2);
    tempString = "Temperature" + " " + temp + "<br />"


    pressureString = "Pressure " + apiData.main.pressure + "<br />";
    speedString = "Speed " + "<br />" + apiData.wind.speed + "<br />";




    //Create htmlString here

    document.getElementById("weatherData").innerHTML = htmlString;
    document.getElementById("tempData").innerHTML = tempString;
    document.getElementById("pressureData").innerHTML = pressureString;
    document.getElementById("speedData").innerHTML = speedString;
}

function displayForecast(apiData1) {
    apiData1 = JSON.parse(apiData1);
    console.log(apiData1);
    let htmlString1 = apiData1.city.name + '<br/>';
    for (let i = 0; i <= 5; i++) {
        htmlString1 += "Date: " + apiData1.list[i].dt_txt + '<br/ >';
        htmlString1 += " Weather: " + apiData1.list[i].weather[0].description + '<br />';
        htmlString1 += `<img src="http://openweathermap.org/img/w/${apiData1.list[0].weather[0].icon}.png">` + '<br />';
        htmlString1 += "Temperature: " + ((apiData1.list[i].main.temp) - (273.15))
        htmlString1 += "Air Pressure: " + apiData1.list[i].main.pressure + '<br />' + " Wind Speed: " + apiData1.list[i].wind.speed + '<br />';
    }
    document.getElementById("foreCast").innerHTML = htmlString1;


}


function submitCity() {
    let cityName = document.getElementById("cityForm")["city"].value;
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&APPID=" + APIKEY);

    request.send();
}

function submitForecastCity() {
    let cityName = document.getElementById("cityForm")["city"].value;
    forecastRequest.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&APPID=" + APIKEY);

    forecastRequest.send();

}

request.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            displayNicely(this.responseText);

        }
        else if (this.status == 404) {
            document.getElementById("weatherData").innerHTML = "<h2> City not found! Please try again. </h2>";
        }

    }
}


forecastRequest.onreadystatechange = function() {
    if (this.readyState == 4) {
        if (this.status == 200) {
            displayForecast(this.responseText);

        }
        else if (this.status == 404) {
            document.getElementById("foreCast").innerHTML = "<h2> City not found! Please try again. </h2>";
        }

    }
}

