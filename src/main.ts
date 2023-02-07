import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/share-button-links.scss"
import "@/assets/docs.scss"

const app = createApp(App);

app.use(router);

app.mount("#app");
