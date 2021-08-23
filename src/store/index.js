import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
  },
  getters: {
    getCartItems(state) {
      return state.cartItems
    },
    getTotalItems(state) {
      return state.totalItems
    },
    getTotalPrice(state) {
      return state.totalPrice
    }
  },
  mutations: {
    setCartItems(state, value) {
      state.cartItems = value
    },
    setTotalItems(state, value) {
      state.totalItems = value
    },
    setTotalPrice(state, value) {
      state.totalPrice = value
    }
  },
  actions: {
    addCartItem({ commit, state }, data) {
      let newCartItems = [...state.cartItems]
      let drink = newCartItems.find(item => item.id === data.id)
      if (drink) {
        drink.number += 1
      } else {
        newCartItems.push({
          ...data,
          number: 1
        })
      }
      commit('setCartItems', newCartItems)
      commit('setTotalItems', state.totalItems + 1)
      commit('setTotalPrice', state.totalPrice + data.price)
    },
    removeCartItem({ commit, state }, data) {
      let newCartItems = [...state.cartItems]
      let drink = newCartItems.find(item => item.id === data.id)
      newCartItems = newCartItems.filter(item => item.id !== data.id)
      commit('setCartItems', newCartItems)
      commit('setTotalItems', state.totalItems - drink.number)
      commit('setTotalPrice', state.totalPrice - data.price * drink.number)
    },
    removeSingleCartItem({ commit, state }, data) {
      let newCartItems = [...state.cartItems]
      let drink = newCartItems.find(item => item.id === data.id)
      if (drink.number === 1) {
        newCartItems = newCartItems.filter(item => item.id !== data.id)
      } else {
        drink.number -= 1
      }
      commit('setCartItems', newCartItems)
      commit('setTotalItems', state.totalItems - 1)
      commit('setTotalPrice', state.totalPrice - data.price)
    }
  }
})
