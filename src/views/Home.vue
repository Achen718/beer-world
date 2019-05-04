<template>
  <div>
    <h1 class="subheading grey--text my-2">Choose Your Beer!</h1>
    <v-container fluid>
      <v-layout row wrap>
        <!-- Beer List -->
        <v-flex md6 sm12 xs12 v-for="beer in filteredBeers" :key="beer.id">
          <v-card
            flat
            :hover="true"
            class="ma-2"
          >
            <v-layout row>
              <v-flex xs4>
                <v-img
                  :src="beer.image_url"
                  :contain="true"
                  height="200px"
                  class="mt-3 mb-3"
                ></v-img>
              </v-flex>
              <v-flex xs8>
                <v-card-title
                  primary-title
                  class="beer-card"
                >
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
      bottom: false,
			search: ""
    };
  },
  created () {
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.generateBeer();
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.generateBeer();
      }
    }
  },
  computed: {
    filteredBeers () {
      return this.beers.filter(beer => {
        return beer.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    // api call -- fetch beer
    generateBeer () {
      this.$http
        .get(`/beers?page=${this.page}&per_page=10`)
        .then(response => {
          if (this.beers.length === 0) {
            this.beers = response.data;
          } else {
            // this.beers avoids mutation when concat() is used
            let newBeers = this.beers.concat(response.data);
            this.beers = newBeers;
          }
          this.page += 1;
				})
				console.log(this.$http.get)
    },
    // Find the bottom of the window to implement infinite scroll
    bottomVisible () {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    }
  }
};
</script>

<style>

</style>
