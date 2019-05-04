<template>
  <div>
    <!-- <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link> -->
<v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Beer World</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Test Link</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "Navigation"
    };
  },
  name: "Navigation"
};
</script>

<style>
</style>