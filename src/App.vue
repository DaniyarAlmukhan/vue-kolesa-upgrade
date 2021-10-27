<template>
  <div id="app">
    <div class="wrapper dl-flex">
      <div class="wrapper__container container">
        <header class="header dl-flex">
          <div class="header__kolesa-logo">
            <img src="@/assets/Vector.svg" alt="Kolesa Logo" />
          </div>
          <Search @search="search"></Search>
          <User :user="user" @updateUser="updateUser"></User>
        </header>
        <div class="body dl-flex">
          <Navbar></Navbar>
          <div class="body__content">
            <img src="@/assets/Баннер.jpg" alt="Banner" />
            <BigBtns></BigBtns>
            <FilterBtns @sort="getCategory"></FilterBtns>
            <ItemCard
              :products="sortedProducts"
              @passProduct="openCard"
            ></ItemCard>
          </div>
        </div>
      </div>
      <FooterCustom></FooterCustom>
      <Modal
        :cardData="cardData"
        :isOpen="isOpen"
        :balance="user.score"
        @closeModal="closeModal"
        @order="order"
      ></Modal>
    </div>
  </div>
</template>
<script>
import Modal from "@/components/Modal.vue";
import Search from "@/components/Search.vue";
import User from "@/components/User.vue";
import Navbar from "@/components/Navbar.vue";
import BigBtns from "@/components/BigBtns.vue";
import FilterBtns from "@/components/FilterBtns.vue";
import ItemCard from "@/components/ItemCard.vue";
import FooterCustom from "@/components/FooterCustom.vue";
import axios from "@/axios";

export default {
  name: "App",
  components: {
    Modal,
    Search,
    User,
    Navbar,
    BigBtns,
    FilterBtns,
    ItemCard,
    FooterCustom,
  },
  data() {
    return {
      input: "",
      isOpen: false,
      cardData: {},
      products: [],
      category: "allProducts",
      user: {
        name: "",
        score: 0,
        avatarUrl: "",
      },
      clothing: [],
      accessories: [],
    };
  },
  methods: {
    sort(products) {
      this.products = products;
    },
    openCard(data) {
      this.openModal();
      this.cardData = data;
    },
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    order(price) {
      if (price > this.user.score) {
        alert("Not enough money");
      } else {
        this.user.score -= price;
      }
    },
    getCategory(category) {
      this.category = category;
    },
    updateUser(data) {
      this.user = data;
    },
    search(input) {
      this.input = input;
    },
  },
  computed: {
    sortedProducts() {
      let products = [];
      if (this.category === "clothing") {
        products = this.clothing;
      } else if (this.category === "accessories") {
        products = this.accessories;
      } else {
        products = [...this.clothing, ...this.accessories];
      }
      products.sort((x, y) => (x.isNew < y.isNew ? 1 : -1));
      return products.filter((product) =>
        product.title.toLowerCase().includes(this.input.toLowerCase())
      );
    },
  },
  mounted() {
    axios.get("templates/-_RLsEGjof6i/data").then((response) => {
      this.clothing = response.data;
    });
    axios.get("templates/q3OPxRyEcPvP/data").then((response) => {
      this.accessories = response.data;
    });
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
