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
    clothing: Array,
    accessories: Array,
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
};
</script>
