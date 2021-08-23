<template>
  <v-card
    class="mt-5"
    max-width="367"
  >
    <v-img
      height="250"
      width="367"
      :src="image"
    />

    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>

      <div class="text-subtitle-1 font-weight-bold mb-2">
        {{ price }}$
      </div>

      <div>{{ description }}</div>
    </v-card-text>

    <v-card-actions class="d-flex justify-end">
      <v-btn icon @click="addDrink">
        <v-icon large color="orange">mdi-plus-circle-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: Number
    },
    title: {
      type: String
    },
    image: {
      type: String
    },
    price: {
      type: Number
    },
    description: {
      type: String
    }
  },
  methods: {
    ...mapActions({
      addCartItem: 'addCartItem'
    }),
    addDrink() {
      const { id, title, image, price, description } = this
      this.addCartItem({ id, title, image, price, description })
    }
  }
}
</script>

<style>

</style>