<template>
  <div id="app">
    <div class="wrapper dl-flex">
      <div class="wrapper__container container">
        <header class="header dl-flex">
          <div class="header__kolesa-logo">
            <img src="@/assets/Vector.svg" alt="Kolesa Logo" />
          </div>
          <Search @search="search" />
          <User />
        </header>
        <div class="body dl-flex">
          <Navbar></Navbar>
          <div class="body__content">
            <router-view
              :input="input"
              :clothing="clothing"
              :accessories="accessories"
            ></router-view>
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
      clothing: [],
      accessories: [],
    };
  },
  methods: {
    search(input) {
      this.input = input;
    },
    fetchClothing() {
      this.$store
        .dispatch("fetchClothing")
        .then((response) => (this.clothing = response.data))
        .catch((err) => console.log(err));
    },
    fetchAccessories() {
      this.$store
        .dispatch("fetchAccessories")
        .then((response) => (this.accessories = response.data))
        .catch((err) => console.log(err));
    },
  },

  created(){
    this.fetchAccessories();
    this.fetchClothing();
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
