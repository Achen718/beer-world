<template>
  <div>
    <v-card flat :hover="true" class="ma-2" height="96%">
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex xs12 sm12 md12>
          <v-img :src="beer.image_url" :contain="true" height="200px" class="mt-3 mb-3"></v-img>
          <v-card-title primary-title class="beer-card">
            <v-flex xs12 sm12 md12>
              <h3 class="headline">{{ beer.name }}</h3>
              <h4 class="body-2">{{ beer.tagline }}</h4>
              <p class="mt-1">ABV: {{ beer.abv }}%</p>
            </v-flex>
          </v-card-title>
        </v-flex>
        <v-card-actions>
          <v-btn color="blue" @click="toggle()">Description</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="toggle()">
            <v-icon>{{ isActive ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="isActive" scrollable>{{beer.description}}.</v-card-text>
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
		return{
			isActive: false
		}
	},
	methods: {
		toggle() {
			this.isActive = !this.isActive
		}
	}
};
</script>