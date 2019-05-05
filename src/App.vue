<template>
  <v-app>
    <Navigation/>
    <v-content>
      <router-view/>
    </v-content>
		<Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>
