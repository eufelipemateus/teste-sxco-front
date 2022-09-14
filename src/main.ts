import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"
import PrimeVue from 'primevue/config';

import VueAxios from "vue-axios";
import axios from "./plugins/axios";

const app = createApp(App);

app.use(createPinia());
app.use(router);


app.use(PrimeVue);
app.use(VueAxios, axios);

app.mount("#app");
