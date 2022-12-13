import { createApp } from "vue";
import "./styles/style.scss";
import App from "./App.vue";
import VueLazyLoad from "vue3-lazyload";

const app = createApp(App);
app.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 1,
});
app.mount("#app");
