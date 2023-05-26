import { createApp } from "vue";
import router from "./router";
import pinia from "./store";

import "./app.css";

import "./utils/interceptor";

const App = createApp({});
App.use(router).use(pinia);
export default App;
