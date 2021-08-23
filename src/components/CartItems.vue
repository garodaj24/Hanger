<template>
  <div class="d-flex flex-column align-center">
    <v-card
      v-for="(item, index) in cartItems"
      :key="index"
      :max-width="250"
      class="mt-7"
    >

      <v-btn icon class="close-button" @click="removeDrink(item)">
        <v-icon large color="black">mdi-close-circle-outline</v-icon>
      </v-btn>

      <v-img
        height="150"
        :src="item.image"
      />

      <v-card-title>{{ item.title + ' ' + item.price + '$'}}</v-card-title>

      <v-card-text>
        <div class="d-flex align-center justify-space-between">
          <v-btn icon @click="removeSingleDrink(item)">
            <v-icon large color="orange">mdi-minus-circle-outline</v-icon>
          </v-btn>
          <span class="font-weight-bold single-drink-number">{{ item.number }}</span>
          <v-btn icon @click="addDrink(item)">
            <v-icon large color="orange">mdi-plus-circle-outline</v-icon>
          </v-btn>
          <div class="text-subtitle-1 font-weight-bold single-drink-total">
            {{ 'Total: ' + item.price * item.number }}$
          </div>
        </div>

      </v-card-text>
    </v-card>
    <div class="d-flex mt-5 justify-space-between total-price align-center">
      <span class="display-1 font-weight-bold">Total:</span>
      <span class="display-1 font-weight-bold">{{ totalPrice }}$</span>
    </div>
    <v-btn class="my-5" :disabled="totalItems === 0">
      Order
    </v-btn>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      cartItems: 'getCartItems',
      totalItems: 'getTotalItems',
      totalPrice: 'getTotalPrice'
    })
  },
  methods: {
    ...mapActions({
      addCartItem: 'addCartItem',
      removeCartItem: 'removeCartItem',
      removeSingleCartItem: 'removeSingleCartItem'
    }),
    addDrink(item) {
      const { id, title, image, price, description } = item
      this.addCartItem({ id, title, image, price, description })
    },
    removeSingleDrink(item) {
      const { id, title, image, price, description } = item
      this.removeSingleCartItem({ id, title, image, price, description })
    },
    removeDrink(item) {
      const { id, title, image, price, description } = item
      this.removeCartItem({ id, title, image, price, description })
    },
  }
}
</script>