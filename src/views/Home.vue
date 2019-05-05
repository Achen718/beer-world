<template>
  <div>
    <h1 class="subheading grey--text my-2">Choose Your Beer!</h1>
    <v-container fluid>
      <v-layout row wrap>
        <!-- Beer List -->
        <v-flex md6 sm12 xs12 v-for="beer in showBeers" :key="beer.id">
          <v-card flat :hover="true" class="ma-2">
            <v-layout row>
              <v-flex xs4>
                <v-img :src="beer.image_url" :contain="true" height="200px" class="mt-3 mb-3"></v-img>
              </v-flex>
              <v-flex xs8>
                <v-card-title primary-title class="beer-card">
                  <div>
                    <h3 class="subtitle">{{ beer.name }}</h3>
                    <h4 class="body-2">{{ beer.tagline }}</h4>
                    <p class="mt-1">ABV: {{ beer.abv }}%</p>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
        <!-- When the bottom is reached, watch:bottom informs API call to run -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      beers: [],
      page: 1,
      bottom: false
    };
  },
  computed: {
    showBeers() {
      return this.beers;
    }
  },
  watch: {
    // generates beer on scroll
    bottom(oldVal) {
      if (oldVal) {
        this.generateBeer();
      }
    }
  },
  created() {
    window.addEventListener("scroll", () => {
      this.bottom = this.infiniteScroll();
    });
    this.generateBeer();
  },
  methods: {
    // api call -- fetch beer
    generateBeer() {
      this.$http
        .get(`/beers?page=${this.page}&per_page=10`)
        .then(response => {
          if (this.beers.length < 1) {
            this.beers = response.data;
          } else {
            // enables infinite scroll
            let beers = this.beers.concat(response.data);
            this.beers = beers;
          }
        })
        .catch(e => console.log(e.response));
    },
    // Find the bottom of the window to implement infinite scroll
    infiniteScroll() {
      const y = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + y >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    }
  }
};
</script>

<style>
</style>
