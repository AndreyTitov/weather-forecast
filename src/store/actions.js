import forecastData from '../service/weatherData';

export const dataWeather = ( {commit} ) => {
    forecastData.getWeatherData().then(data => {
        commit('ADD_WEATHER_DATA', data)
    });
};

export const saveCity = ( {commit}, city ) => {
    commit('SAVE_CITY', city);
};

export const deleteCity = ( {commit}, city ) => {
    commit('DELETE_CITY', city);
};