<template>
  <div>
    <v-card flat :hover="true" class="ma-2 beer-card">
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex xs12 sm12 md12>
          <!-- Image for each Item -->
          <v-img :src="beer.image_url" :contain="true" height="200px" class="mt-3 mb-3"></v-img>
          <!-- Beer Card - info -->
          <v-card-title primary-title class="beer-card-info">
            <v-flex xs12 sm12 md12>
              <p class="headline">{{ beer.name }}</p>
              <p class="body-2">{{ beer.tagline }}</p>
							<p>First Brewed in: {{ beer.first_brewed }}</p>
              <p class="mt-1 sub-info">ABV: {{ beer.abv }}%</p>
            </v-flex>
          </v-card-title>
        </v-flex>
        <v-card-actions class="mt-auto">
          <!-- Description Dropdown -->
          <v-btn color="blue" @click="toggle()" dark>Description</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="toggle()">
            <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <!-- Chevron Btn -->
        <v-slide-y-transition>
          <v-card-text v-show="show" scrollable>{{beer.description}}.</v-card-text>
        </v-slide-y-transition>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ShowInfo",
  props: ['beer'],
  data() {
    return {
      show: null
    };
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.sub-info {
	color: grey;
}
</style>
