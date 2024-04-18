import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

const app = createApp(App);

// Create Vuetify instance
const vuetify = createVuetify();

// Use Vuetify instance in the app
app.use(vuetify);

app.mount('#app');