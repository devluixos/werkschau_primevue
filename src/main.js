import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import router from './router'; // Import the router

import 'primevue/resources/themes/saga-blue/theme.css';       // theme
import 'primevue/resources/primevue.min.css';                 // core css
import 'primeicons/primeicons.css';                           // icons
import 'primeflex/primeflex.css';                             // PrimeFlex

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.component('PrimeButton', Button);
app.component('InputText', InputText);
app.mount('#app');
