<template>
  <div class="d-flex flex-column">
    <v-carousel
      cycle
      height="700"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="text-h2">
              {{ slide }} Slide
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <v-card 
      :elevation="0"
      width="600"
      class="px-5 mx-auto py-16"
    >
      <v-row>
        <v-col align-self="center" cols="12" lg="6">
          <v-img
            src="https://5.imimg.com/data5/CR/UY/MY-11302762/glass-tomato-ketchup-bottle-500x500.jpg"
            :max-width="200"
            :max-height="300"
            class="mx-auto"
          />
        </v-col>
        <v-col cols="12" lg="6">
          <v-card-title>About Us</v-card-title>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptatibus accusamus modi alias vero provident quaerat et incidunt voluptatum, quo autem nulla unde ipsa amet molestias quos minus debitis laudantium.</p>
          <v-btn to="/about">
            More
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <div
      class="black white--text footer"
    >
      <span>Copyright &copy; 2021 Khmichk</span>
      <v-btn icon target="_blank" href="https://www.instagram.com" class="ml-5">
        <v-icon large color="orange">mdi-instagram</v-icon>
      </v-btn>
      <v-btn icon target="_blank" href="https://www.facebook.com" class="ml-5">
        <v-icon large color="orange">mdi-facebook</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {},

    data: () => ({
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    })
  }
</script>
