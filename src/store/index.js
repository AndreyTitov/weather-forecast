import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
    weatherData: {},
    savedCities: [],
}

const vuexPersist = new VuexPersist({
    key: 'saved cities',
    storage: localStorage,
    
});

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    plugins: [vuexPersist.plugin],
});