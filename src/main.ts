import { createApp } from "vue";
import App from "./App.vue";
import { setupRouter } from "./router";
import "@/assets/styles/index.css";

const setupAll = () => {
  const app = createApp(App);

  setupRouter(app);

  app.mount("#app");
};

setupAll();
