import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { IMG_BASE_URL } from './consts';

const app = createApp(App, {
  data: { IMG_BASE_URL },
});

app.use(router).use(store).mount('#app');
