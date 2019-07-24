import axios from 'axios';

class weatherData {
    
    getWeatherData(cityName) {
        return axios.get(`//api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c982164774d094d798ab7bd4fb8c5784`)
            .then(response => {
                return response;
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const forecastData = new weatherData;

export default forecastData;