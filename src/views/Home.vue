<template>
  <div>
    <h1 class="headline my-2 text-xs-center">The Wonderful World of Beer</h1>
    <v-container fluid>
      <!-- search bar / sort button -->
      <v-layout row>
        <v-flex xs6 offset-xs3>
          <v-text-field
            md3
            class="mx-3"
            flat
            type="text"
            label="Search your ideal beer"
            v-model="search"
            color="pink lighten-1"
            prepend-inner-icon="search"
          ></v-text-field>
        </v-flex>
        <!-- Sort Alpha Btn -->
        <v-btn color="error" fab dark @click="sorting *= -1">
          <v-icon>sort_by_alpha</v-icon>
        </v-btn>
      </v-layout>
      <!-- Beer List -->
      <v-layout row wrap>
        <v-flex xl3 md3 sm6 xs12 v-for="(beer, index) in filteredBeers" :key="beer.id" text-xs-center>
          <ShowInfo :beer="beer" :index="index"/>
        </v-flex>
        <!-- When the bottom is reached, watch:bottom informs API call to run -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ShowInfo from "@/components/ShowInfo";

export default {
  name: "Home",
  components: {
    ShowInfo
  },
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
    // sort alphabetically + on scroll
    sortedItems() {
      const compare = (a, b) => {
        return a.name < b.name ? this.sorting : -this.sorting;
      };
      return this.beers.sort(compare);
    }
  },

  watch: {
    // generates beer on scroll
    bottom(oldVal) {
      if (oldVal) {
        this.generateBeer();
      }
    },
    sortedItems() {
      console.log("Sorted");
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
			let beers;
      this.$http
        .get(`/beers?page=${this.page}&per_page=12`)
        .then(response => {
          if (this.beers.length < 1) {
            this.beers = response.data;
          } else {
            // generates beers on infinite scroll
            beers = this.beers.concat(response.data);
            this.beers = beers;
          }
          //  next page on scroll
          this.page++;
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
  }
};
</script>

<style scoped>

</style>
