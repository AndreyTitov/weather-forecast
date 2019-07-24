export const addWeatherData = (state, dataWeather) => {
    return state.weatherData = dataWeather;
};

export const SAVE_CITY = (state, city) => {
    state.savedCities.unshift(city);
};

export const DELETE_CITY = (state, data) => {
    state.savedCities = state.savedCities.filter(city => {
        if(city.id != data) {
            return city
        }
    });
};