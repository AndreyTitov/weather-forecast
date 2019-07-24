<template>
    <div class="saved-block">
        <p class="saved-title">Saved cities</p>
        <div class="saved-city-block">
        <transition-group name="list" tag="p">
            <ul class="saved-list"
                :key="city.id"
                v-for="city in saveCity">
                <li class="saved-item">
                    <p class="city-name">{{city.name}}</p> 
                    <p class="city-country">{{city.sys.country}}</p>
                    <p class="city-temp"> {{city.main.temp}}&deg;C</p>
                    <div class="delete-btn"
                        @click="deleteItem(city)">
                            <img src="../assets/trash-solid.svg" alt="delete-icon" class="icon-img">
                    </div>
                </li>
            </ul>
        </transition-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SavedCity',
    props: ['cityData'],
    computed: {
        saveCity() {
            let saveCity = this.$store.getters.savedCities;
            return saveCity;
        }
    },
    methods: {
        deleteItem(city) {
            let savedCities = this.$store.getters.savedCities;
            this.$store.dispatch('deleteCity', city.id);
        },
    },
}
</script>

<style lang="scss">  
    .saved {

        &-block {
            background: #00C181;
            color: #fff;
            margin: 20px auto;
        }

        &-title {
            text-transform: uppercase;
            padding: 10px 0;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 40px;
                height: 2px;
                background: #fff;
            }
        }

        &-city {
            padding: 10px;

            &:nth-child(2n) {
                background: #000;
            }
        }

        &-list {

            @media only screen and(min-width: 1024px) {
                padding: 20px 0;
            }
        }

        &-item {
            padding: 10px;
            position: relative;
            display: flex;
            justify-content: space-between;

            @media only screen and(min-width: 1024px) {
                font-size: 20px;
                width: 50%;
                margin: 0 auto;
            }
        }
    }

    .city {

        &-name {
            width: 30%;
            text-align: center;
        }

        &-country {
            width: 30%;
            text-align: center;
        }

        &-temp {
            width: 30%;
            text-align: center;
        }
    }

    .delete-btn {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #fff;
        margin-right: -40px;
        cursor: pointer;
    }

    // Animation
    .list-item {
      display: inline-block;
      margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
      transition: all 1s;
    }
    .list-enter, .list-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
    // ../Animation
</style>