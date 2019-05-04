import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const API_URL = "https://api.punkapi.com/v2";

axios.defaults.baseURL = API_URL;
axios.defaults.headers = {
  "Content-Type": "application/json"
};

export default axios;

Vue.use(VueAxios, axios);
