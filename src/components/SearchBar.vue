<template>
<div>
  <v-layout row justify-center="true">
    <v-flex xs6 class="text-xs-center">
      <v-form>
        <h3 class="subheading">Search beers...</h3>
        <v-text-field color="yellow" v-model="search" type="text" placeholder="Find a beer..."></v-text-field>
      </v-form>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
export default {
	
};
</script>

<style>
</style>