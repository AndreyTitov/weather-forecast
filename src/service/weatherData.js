import axios from 'axios';

class weatherData {
    

    getWeatherData(cityName) {

        const endpoint = '//api.openweathermap.org/data/2.5/';
        const weather = 'weather';
        const units = 'metric';
        const id = 'c982164774d094d798ab7bd4fb8c5784';
        
        /*
        *   Data path 
        *   `//api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c982164774d094d798ab7bd4fb8c5784`
        */
        
        return axios.get(`${endpoint}${weather}?q=${cityName}&units=${units}&appid=${id}`)
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