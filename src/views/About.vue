<template>
  <div class="about">
    <v-jumbotron>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex xs12>
            <div class="text-xs-center">
              <h3 class="display-3">About</h3>

              <span
                class="subheading"
              >Welcome! My name is Alvin. This application is using Punk Api! Link can be found below.</span>

              <v-divider class="my-3"></v-divider>
              <v-layout row>
                <v-flex xs6>
                  <v-btn
                    color="pink accent-3"
                    large
                    dark
                    href="https://www.linkedin.com/in/alvin-chen-201a1615b/"
                  >
									Contact Me
                  </v-btn>
                </v-flex>
                <v-flex xs6>

                  <v-btn
                    color="blue darken-1"
                    large
                    dark
                    href="https://www.linkedin.com/in/alvin-chen-201a1615b/"
                  >
									Punk Api
                  </v-btn>
                </v-flex>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>


<script>
export default {
  name: "About"
};
</script>

<style>
</style>
