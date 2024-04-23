import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import router from './router';

const app = createApp(App);

const vuetify = createVuetify();

app.use(vuetify);
app.use(router);
app.mount('#app');