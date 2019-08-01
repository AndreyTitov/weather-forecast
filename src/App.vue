<template>
  <div id="app">
    <div class="input-wrapper">
        <input type="text" 
          placeholder="Enter city name" 
          v-model="cityName"
          @keyup.enter="getCityByName(cityName)"
          class="searchInput">
      <div @click="getCityByName(cityName)"
          class="searchButton">
          <img src="./assets/magnifier.png" alt="search-btn" class="icon-img">
      </div>
    </div>

    <p class="lookingFor">You're looking for: <b>{{cityName}}</b></p>

    <p v-if="erMessage"
      class="errorMessage">{{erMessage}}</p>

    <transition name="bounce">
      <FindedCity v-if="showWeather"></FindedCity>
    </transition>
    <SavedCity></SavedCity>
  </div>
</template>

<script>

import weatherData from './service/weatherData';

import FindedCity from './components/FindedCity';
import SavedCity from './components/SavedCity';

export default {
  name: 'app',
  components: {
    FindedCity,
    SavedCity,
  },
  data() {
    return {
      cityName: '',
      erMessage: false,
      showWeather: false,
      savedCities: this.$store.getters.savedCities,
    }
  },
  methods: {
    getCityByName(name) {
      weatherData.getWeatherData(name).then(response => {

        if(typeof response !== 'undefined') {
          this.$store.commit('addWeatherData', response.data);

          this.erMessage = false;
          this.showWeather = true;

        } else {
          this.showWeather = false;
          this.erMessage = `Sorry, we can't found city '${name}'. Please enter correct name.`;
        }
      }).catch(er => {
        console.log(er);
      });
    },
  },
  computed: {
    getData() {
      return this.$store.getters.getData;
    }
  },
  // watch: {
  //   savedCities() {
  //     if(this.savedCities.length > 0) {
  //       this.showSavedCities = true;
  //     } else {
  //       this.showSavedCities = false;
  //     }
  //   }
  // }
};
</script>

<style lang="scss">
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
      width: 80%;
      margin: 0 auto;

      @media only screen and(min-width: 1024px) {
        width: 800px;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    p {
      margin: 0;
    }

    .errorMessage {
      color: #940025;
      font-weight: 800;
      font-size: 14px;
      margin: 20px 0;
    }

    .lookingFor {
      margin: 20px 0;
    }

    .input-wrapper {
      display: flex;

      @media only screen and(min-width: 375px) {
        width: 80%;
        margin: 0 auto;
      }
    }

    .searchInput {
      padding: 10px 0 10px 5px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      font-size: 16px;
      border: 1px solid rgba($color: #000000, $alpha: 0.1);
      
      @media only screen and(min-width: 1024px) {
        width: 100%;
      }
    }

    .searchButton {
      background: #00C181;
      color: #fff;
      border: none;
      width: 40px;
      padding: 11px 5px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
    }

    // Animation
    .bounce-enter-active {
      animation: bounce-in .5s;
    }
    .bounce-leave-active {
      animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
    // ../Animation
</style>
