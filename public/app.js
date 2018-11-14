const weather = new Weather();
const ui = new UI();
const storage = new Storage();

init();

function init() {
    weather.getWeatherData(storage.getCity(), storage.getCountry()).then(function (weatherData) {
        if (weatherData['message'] !== 'city not found') {
            console.log(weatherData);
            ui.displayWeatherData(weatherData);
        } else {
            ui.displayAlert('Please provide correct city name');
        }
    }).catch(function (error) {
        console.log(Error);
    })
}

document.querySelector('.location-change').addEventListener('click', function () {
    const city = document.querySelector("#city").value;
    const country = document.querySelector("#country").value;
    storage.setLocation(city, country);
    init();
    $('#locModal').modal('hide')
})