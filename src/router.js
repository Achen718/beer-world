import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About";
import BeerInfo from "./views/BeerInfo";

Vue.use(Router);
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
			name: "about",
			component: About
		},
		{
			path: "/beer-info/:id",
			name: "beer-info",
			component: BeerInfo
		}
  ]
});
