<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <router-link to="/" class="toolbar-title">
        <v-toolbar-title class="headline text-uppercase">
          <span>BEER</span>
          <span class="font-weight-light">WORLD</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
			<SearchBar />
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat href="https://www.linkedin.com/in/alvin-chen-201a1615b/" fab>
          <v-avatar>
            <img src="https://i.imgur.com/B04J6mw.jpg" alt="Alvin">
          </v-avatar>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title mb-2 text-uppercase text-md-center">MENU</v-list-tile-title>
        </v-list-tile>
        <!-- Cycle through links in data-layer and build menu dynamically -->
        <v-list-tile v-for="item in navItems" :key="item.title">
          <v-list-tile-action>
            <v-icon class="white--text">test 1</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="nav-drawer-link">{{ item.icon }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
	name: "Navigation",
	components: {
		SearchBar
	},
  data() {
    return {
      drawer: false,
      navItems: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ]
    };
  }
};
</script>

<style>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>