<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-btn flat fab @click.prevent="aboutPopup = !aboutPopup">
        <v-icon>info</v-icon>
      </v-btn>
      <router-link to="/" tag="v-toolbar-title" style="cursor: pointer;">{{ title }}</router-link>
      <v-spacer></v-spacer>
      <v-btn flat @click.prevent="cartPopup = !cartPopup">
        <v-badge right>
          <span slot="badge" v-if="cartCount">{{ cartCount }}</span>
          <v-icon>shopping_cart</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
      <v-dialog v-model="cartPopup" persistent max-width="500px">
        <v-card>
          <v-card-title>
            <div class="headline">Your cart</div>
          </v-card-title>
          <v-card-text>
            <div class="subheading" v-for="item in cartItems" :key="item.id">
              <v-btn flat fab small color="error" @click.prevent="toggleCart(item.id)">
                <v-icon>clear</v-icon>
              </v-btn>
              {{ item.name }}
            </div>
            <v-alert v-if="!cartItems.length" :value="true" type="warning">
              No items
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click.prevent="cartPopup = !cartPopup">Close</v-btn>
            <v-btn flat @click.prevent="onCartSubmit" class="success">Checkout</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="aboutPopup" max-width="400px">
        <v-card>
          <v-card-title>
            <div class="headline">{{ title }}</div>
          </v-card-title>
          <v-card-text class="text-xs-center">
            <div class="subheading">Made with &#x3C;code /&#x3E; by <b>Dani M Vijay</b></div>
            <br />
            <div class="body-2">View my code on <a href="https://github.com/danivijay" target="_blank">GitHub (@danivijay)</a></div>
            <div class="body-2">Read my blog on <a href="https://medium.com/@danivijay" target="_blank">Medium (@danivijay)</a></div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click.prevent="aboutPopup = !aboutPopup">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-snackbar
        :timeout="6000"
        v-model="checkoutPop"
      >
        Oops! Seems like a dead end!!
        <v-btn flat color="pink" @click.native="checkoutPop = false">Close</v-btn>
      </v-snackbar>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Beer App',
      cartPopup: false,
      aboutPopup: false,
      checkoutPop: false
    }
  },
  name: 'App',
  methods: {
    onCartSubmit () {
      this.checkoutPop = true
    },
    toggleCart (id) {
      this.$store.dispatch('toggleCart', { id })
    }
  },
  computed: {
    cartCount () {
      return (this.$store.getters.getCart).length
    },
    cartItems () {
      const cartIds = this.$store.getters.getCart
      const allBeers = this.$store.getters.getAllBeers
      let cart = []
      for (let id of cartIds) {
        let el = allBeers.filter(b => b.id === id)
        cart.push(el[0])
      }
      return cart
    }
  }
}
</script>
