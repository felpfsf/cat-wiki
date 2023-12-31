import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "./router";

import "./styles/index.css";

import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
