<template>
  <div>
    <v-layout row justify-center="true">
      <v-flex xs6 sm6 md3 class="text-xs-center">
        <v-form>
          <h3 class="subheading">Search beers</h3>
          <v-text-field v-model="search" type="text" label="Search for your ideal beer"></v-text-field>
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