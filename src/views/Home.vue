<template>
  <div>
    <h1 class="subheading my-2">Choose Your Beer!</h1>
    <v-container fluid>
      <!-- search bar / sort button -->
      <v-layout>
        <v-text-field
          md3
          class="mx-3"
          flat
          type="text"
          label="Search"
          v-model="search"
          prepend-inner-icon="search"
        ></v-text-field>
        <!-- <div v-for v-for="beer in filteredBeers" :key="beer.name"> -->
        <v-btn color="warning" fab dark @click="sorting *= -1">
          <v-icon>sort_by_alpha</v-icon>
        </v-btn>
        <!-- </div> -->

        <!-- <v-flex xs12 sm4 md3>
        <p>Overflow</p>

        <v-overflow-btn
          :items="dropdown_font"
          label="Overflow Btn"
          target="#dropdown-example"
        ></v-overflow-btn>
        </v-flex>-->
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
			search: "",
			sorting: -1
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
		},
		// sort alphabetically
		sortedItems () {
				const compare = (a, b) => {
				let textA = a.name.toLowerCase();
				let textB = b.name.toLowerCase();
				return a.name < b.name ? this.sorting : -this.sorting;
			}
				return this.beers.sort(compare)
		}
  },
  watch: {
    // generates beer on scroll
    bottom(oldVal) {
      if (oldVal) {
        this.generateBeer();
      }
		},
		sortedItems () {
				console.log('test')
    	
    },
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
            // generates beers on infinite scroll
            let beers = this.beers.concat(response.data);
            this.beers = beers;
					}
					//  next page on scroll
					this.page += 1;
        })
        .catch(e => console.log(e.response));
    },
    // Infinite scroll
    infiniteScroll() {
			// reach window bottom
      let bottomOfWindow =
        document.documentElement.scrollTop + window.innerHeight ===
        document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        return bottomOfWindow;
      }
		}
  },
};
</script>

<style>
</style>
