class Weather {
    constructor() {
        this.apiKey = '5e6a2c1acafe13b12502923552806112';
    }

    async getWeatherData(city, country) {
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${this.apiKey}`)
    
        const weatherData = await weatherResponse.json();

        return weatherData;
    }

}