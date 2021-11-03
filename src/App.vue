<template>
  <div id="app">
    <div class="wrapper dl-flex">
      <div class="wrapper__container container">
        <header class="header dl-flex">
          <div class="header__kolesa-logo">
            <img src="@/assets/Vector.svg" alt="Kolesa Logo" />
          </div>
          <Search @search="search" />
          <User :user="user" @updateUser="updateUser" />
        </header>
        <div class="body dl-flex">
          <Navbar></Navbar>
          <div class="body__content">
            <router-view :user="user" :input="input"></router-view>
          </div>
        </div>
      </div>
      <FooterCustom />
    </div>
  </div>
</template>

<script>

import Search from "@/layouts/components/Search.vue";
import User from "@/layouts/components/User.vue";
import Navbar from "@/layouts/components/Navbar.vue";
import FooterCustom from "@/layouts/components/FooterCustom.vue";

export default {
  name: "App",
  components: {
    Search,
    User,
    Navbar,
    FooterCustom,
  },
  data() {
    return {
      input: "",
      user: {
        name: "",
        score: 0,
        avatarUrl: "",
      },
    };
  },
  methods: {
    order(price) {
      if (price > this.user.score) {
        alert("Not enough money");
      } else {
        this.user.score -= price;
      }
    },
    updateUser(data) {
      this.user = data;
    },
    search(input) {
      this.input = input;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
