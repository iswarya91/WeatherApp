class UI {
    constructor() {
        this.currLocation = document.querySelector(".card-title");
        this.currWeather = document.querySelector("p.card-text");
        this.temp = document.querySelector("#temp");
        this.icon = document.querySelector("#icon");
        this.humidity = document.querySelector("#humidity");
        this.desc = document.querySelector("#desc");
        this.pressure = document.querySelector("#pressure");
        this.wind = document.querySelector("#wind");
    }

    displayWeatherData(weatherData) {
        this.currLocation.textContent = `${weatherData['name']}, ${weatherData['sys']['country']}`;
        this.currWeather.textContent = `${weatherData.weather[0].main}`;
        this.temp.textContent = `${weatherData.main.temp} C`
        this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`)
        this.humidity.textContent = `Relative Humidity : ${weatherData['main']['humidity']} %`;
        this.pressure.textContent = `Pressure : ${weatherData['main']['pressure']} hpa`;
        this.wind.textContent = `Wind Speed : ${weatherData['wind']['speed']} m/s`;
        this.desc.textContent = `Weather Description : ${weatherData['weather'][0]['description']}`;

    }

    displayAlert(err) {
        Console.log("Error" + err);
    }

}