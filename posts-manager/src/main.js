import {
  createApp,
} from 'vue';

import components from '@/components/common';
import App from './App.vue';

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount('#app');
