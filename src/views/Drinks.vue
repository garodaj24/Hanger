<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(drink, index) in drinks"
        :key="index"
      >
        <drink-card
          :id="drink.id"
          :title="drink.title"
          :image="drink.image"
          :price="drink.price"
          :description="drink.description"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DrinkCard from '../components/DrinkCard.vue'
export default {
  components: {
    DrinkCard
  },
  data: () => ({
    drinks: [
      {
        id: 1,
        title: 'Gin Basil',
        image: 'https://www.worldsbestbars.com/wp-content/uploads/2020/09/5-botanical-cocktails-you-need-to-try-basil-smash-650x560.jpg',
        price: 10,
        description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'
      },
      {
        id: 2,
        title: 'Mojito',
        image: 'https://dg38gzoej82xh.cloudfront.net/sites/default/files/styles/image_gallery_xl/public/images/node/article/beautiful-mojito.jpg?itok=2RgyMLU6',
        price: 20,
        description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'
      },
      {
        id: 3,
        title: 'Espresso Martini',
        image: 'https://www.mikocoffee.com/private-label-and-export/wp-content/uploads/sites/84/2016/08/Espresso-martini.jpg',
        price: 30,
        description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'
      },
      {
        id: 4,
        title: 'Whiskey Sour',
        image: 'https://www.whisky-sour.com/de/images/whiskey-sour-cocktail2.jpg',
        price: 40,
        description: 'Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.'
      },
    ]
  })
}
</script>