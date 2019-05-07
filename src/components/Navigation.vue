<template>
  <div>
    <v-toolbar app fixed :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- Route Home Title -->
      <router-link to="/" class="toolbar-title">
        <v-toolbar-title class="headline text-uppercase">
          <span>BEER</span>
          <span class="font-weight-light">WORLD</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <!-- Avatar Link -->
      <v-toolbar-items>
        <v-btn flat route to="/about" fab>
          <v-avatar>
            <img src="https://i.imgur.com/B04J6mw.jpg" alt="Alvin">
          </v-avatar>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <!-- Nav Drawer Start -->
    <v-navigation-drawer :clipped="clipped" v-model="drawer" app fixed>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title mb-2 text-uppercase text-xs-center">MENU</v-list-tile-title>
        </v-list-tile>
        <!-- Menu Options via data object -->
        <v-list-tile v-for="item in navItems" :key="item.title" router :to="item.route">
          <v-list-tile-action>
            <v-icon class="black--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="nav-drawer-link">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
			drawer: false,
			clipped: true,
      navItems: [
        { title: "Home", icon: "home", route: "/" },
        { title: "About", icon: "person", route: "/about" }
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