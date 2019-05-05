<template>
  <div>
    <h1 class="subheading my-2">Choose Your Beer!</h1>
    <v-container fluid>
      <!-- search bar / sort button -->
      <v-layout>
        <v-form>
          <v-text-field
            class="mx-3"
            flat
            type="text"
            label="Search"
            v-model="search"
            prepend-inner-icon="search"
          ></v-text-field>
        </v-form>
      </v-layout>

      <v-layout row wrap>
        <!-- Beer List -->
        <v-flex md6 sm12 xs12 v-for="beer in filteredBeers" :key="beer.id">
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
      bottom: false,
      search: ""
    };
  },
  computed: {
    showBeers() {
			return this.beers;
		},
		// search beers
    filteredBeers() {
      return this.beers.filter(beer => {
        return beer.name.toLowerCase().includes(this.search.toLowerCase());
      });
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
    // on scroll to bottom, set bottom true
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
            // generates beers on infinite scroll -- next page
            let beers = this.beers.concat(response.data);
            this.beers = beers;
          }
        })
        .catch(e => console.log(e.response));
    },
    // Infinite scroll
    infiniteScroll() {
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        return bottomOfWindow;
      }
    }
  }
};
</script>

<style>
</style>
