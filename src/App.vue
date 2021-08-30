<template>
  <v-app id="app">
    <v-navigation-drawer 
      v-model="drawer"
      app
      temporary
      class="orange lighten-4"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Khmichk
          </v-list-item-title>
          <v-list-item-subtitle>
            Best Drinks Ever
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer 
      v-model="cart"
      app
      temporary
      right
      :width="300"
      class="orange lighten-4"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Shopping Cart
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <cart-items />
    </v-navigation-drawer>

    <v-app-bar
      app
      color="orange"
      :height="100"
      class="p-5"
    >
      <v-app-bar-nav-icon @click="drawer = true" class="d-md-none"></v-app-bar-nav-icon>

      <v-toolbar-title class="display-1 font-weight-bold" to="/">
        <router-link class="text-decoration-none black--text" to="/">Khmichk</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div id="nav" class="d-none d-md-flex">
        <router-link class="text-decoration-none" to="/">Home</router-link>
        <router-link class="text-decoration-none" to="/drinks">Drinks</router-link>
        <router-link class="text-decoration-none" to="/about">About</router-link>
      </div>
      <v-btn icon @click="cart = true" class="mr-1">
        <v-badge
          v-if="totalItems > 0"
          color="red"
          :content="totalItems"
        >
          <v-icon>mdi-cart</v-icon>
        </v-badge>
        <v-icon v-else>mdi-cart</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <div id="app">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import CartItems from './components/CartItems.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    CartItems
  },

  data: () => ({
    drawer: false,
    cart: false,
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Drinks', icon: 'mdi-glass-cocktail', to: '/drinks' },
      { title: 'About', icon: 'mdi-information', to: '/about' },
    ],
  }),

  computed: {
    ...mapGetters({
      cartItems: 'getCartItems',
      totalItems: 'getTotalItems'
    })
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  margin-right: 100px;

  a {
    font-weight: bold;
    color: #000;
    font-size: 25px !important;
    margin-left: 50px;

    &.router-link-exact-active {
      color: red;
    }
  }
}

.total-price {
  width: 250px;
}

.close-button{
  position: absolute;
  top: -20px;
  right: -20px;
  z-index: 10;
}

.single-drink-total {
  width: 100px;
  text-align: end;
}

.single-drink-number {
  width: 20px;
  text-align: center;
}

.footer {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
