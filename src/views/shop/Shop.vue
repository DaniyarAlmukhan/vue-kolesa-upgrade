<template>
  <div>
    <img src="@/assets/Баннер.jpg" alt="Banner" />
    <BigBtns />
    <FilterBtns @sort="getCategory" />
    <ItemCard :products="sortedProducts" @passProduct="openCard" />
    <Modal
      :card-data="cardData"
      :is-open="isOpen"
      :balance="user.score"
      @close-modal="closeModal"
      @order="order"
    />
  </div>
</template>

<script>
import BigBtns from "./components/BigBtns.vue";
import FilterBtns from "./components/FilterBtns.vue";
import ItemCard from "./components/ItemCard.vue";
import Modal from "./components/Modal.vue";
import axios from "@/axios";

export default {
  name: "Shop",
  props:{
    user: Object,
    input: String,
  },
  components: {
    Modal,
    BigBtns,
    FilterBtns,
    ItemCard,
  },
  data() {
    return {
      isOpen: false,
      cardData: {},
      products: [],
      category: "allProducts",
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
  },
  computed: {
    sortedProducts() {
      let input = this.input;
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
        product.title.toLowerCase().includes(input.toLowerCase())
      );
    },
  },
  mounted() {
    axios
      .get("templates/-_RLsEGjof6i/data")
      .then((response) => {
        this.clothing = response.data;
      })
      .catch((err) => console.log(err));
    axios
      .get("templates/q3OPxRyEcPvP/data")
      .then((response) => {
        this.accessories = response.data;
      })
      .catch((err) => console.log(err));
  },
};
</script>