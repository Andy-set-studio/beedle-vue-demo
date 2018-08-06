import Vue from 'vue/dist/vue.js';

import Password from './components/Password.vue';
import Status from './components/Status.vue';

const app = new Vue({
    el: '[data-app="main"]',
    components: {
        Password,
        Status
    }
});
