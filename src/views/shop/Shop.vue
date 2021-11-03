<template>
  <div>
    <img src="@/assets/Баннер.jpg" alt="Banner" />
    <BigBtns />
    <FilterBtns @sort="getCategory" />
    <ItemCard :products="sortedProducts" @passProduct="openCard" />
    <Modal :card-data="cardData" :is-open="isOpen" @close-modal="closeModal" />
  </div>
</template>

<script>
import BigBtns from "./components/BigBtns.vue";
import FilterBtns from "./components/FilterBtns.vue";
import ItemCard from "./components/ItemCard.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "Shop",
  props: {
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
    getCategory(category) {
      this.category = category;
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
    this.fetchClothing();
    this.fetchAccessories();
  },
};
</script>
