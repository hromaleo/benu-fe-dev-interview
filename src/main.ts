import { createApp } from "vue";
import { i18n } from "@/translations";
import App from "./App.vue";
import router from "./router";
import "@/styles/index.scss";

const app = createApp(App);

app.use(router).use(i18n);

router.isReady().then(() => {
  app.mount("#app");
});
