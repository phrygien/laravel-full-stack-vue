require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import {createApp } from "vue";

createApp({
    components: {
    }
}).use(router).mount('#app')
