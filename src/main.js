import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import axios from "./backend";

Vue.config.productionTip = false;

new Vue({
	router,
	axios,
  render: h => h(App)
}).$mount("#app");
