<template>
    <div>
        <transition name="bounce">
            <div class="findedWeatherBlock"> 
                <p class="finded-city">{{getData.name}}</p>
                <p class="finded-country">{{getData.sys.country}}</p>
                <p class="finded-temp">{{getData.main.temp}} &deg;C</p>
                    <div class="save-btn-wrapper">
                        <div @click="save(cityData)">
                            <img src="../assets/save-file-option.png" alt="save-icon" class="icon-img">
                            <p class="save-par">save</p>
                        </div>
                    </div>
            </div>
        </transition>
        <transition name="bounce">
            <div class="error"
                v-if="showErr">
                <h3>Current city is already saved</h3>
            </div>
        </transition>
    </div>
</template>

<script>
import SavedCity from './SavedCity';

export default {
    name: 'FindedCity',
    props: ['cityData'],
    components: { 
        SavedCity,
    },
    data() {
        return {
            showSavedCities: true,
            showErr: false,
        }
    },
    methods: {
        save(data) {
            let city = this.$store.getters.getData;

            data = city;

            let savedCities = this.$store.getters.savedCities;
            // Get all Ids of Array
            let ids = savedCities.map(city => {
                return city.id;
            });

            console.log(ids.indexOf(data.id === -1));

            if(ids.indexOf(data.id) === -1) {
                this.$store.dispatch('saveCity', data);
                this.showErr = false;
            } else {
                this.showErr = true;
            }

        },
    },
    computed: {
        getData() {
            return this.$store.getters.getData
        },
    },
    mounted() {
        if(localStorage.city) {
            this.saved = localStorage.city;
        }
    },
    watch: {
        saved(newSave) {
            localStorage.city = newSave;
        }
    }
}
</script>

<style lang="scss">

    .findedWeatherBlock {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: lightgrey;
      margin: 20px auto;
      padding: 10px 20px;
    }

    .icon-img {
        width: 20px;
    }

    .save-par {
        font-size: 10px;
        text-transform: uppercase;
        font-weight: 900;
        color: #6E6E6E;
    }

    .save-btn-wrapper {
        cursor: pointer;
    }

    .finded {

        &-city {
            width: 30%;
            text-align: center;

            @media only screen and(min-width: 1024px) {
                font-size: 20px;
            }
        }

        &-country {
            width: 30%;
            text-align: center;

            @media only screen and(min-width: 1024px) {
                font-size: 20px;
            }
        }

        &-temp {
            width: 30%;
            text-align: center;

            @media only screen and(min-width: 1024px) {
                font-size: 20px;
            }
        }
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