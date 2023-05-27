import { createApp } from 'vue';
import router from './router';
import pinia from './store';

import './utils/interceptor';

const app = createApp({});
app.use(router).use(pinia);
export default app;
