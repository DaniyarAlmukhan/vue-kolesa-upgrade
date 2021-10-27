<template>
  <div class="body__product-filter-btns">
    <input
      type="radio"
      name="product-filter"
      id="all-products"
      value="all-products"
      class="product-filter-btn js__filter-btn"
      checked
    />
    <label
      for="all-products"
      class="body__filter-label filter-label"
      :class="{ filterLabelSelected: category === 'allProducts' }"
      @click="filter('allProducts')"
      >Все товары</label
    >
    <input
      type="radio"
      name="product-filter"
      id="clothing"
      value="clothing"
      class="product-filter-btn js__filter-btn"
    />
    <label
      for="clothing"
      class="body__filter-label filter-label"
      :class="{ filterLabelSelected: category === 'clothing' }"
      @click="filter('clothing')"
    >
      Одежда</label
    >
    <input
      type="radio"
      name="product-filter"
      id="accessories"
      value="accessories"
      class="product-filter-btn js__filter-btn"
    />
    <label
      for="accessories"
      class="body__filter-label filter-label"
      :class="{ filterLabelSelected: category === 'accessories' }"
      @click="filter('accessories')"
    >
      Аксессуары</label
    >
  </div>
</template>

<script>
export default {
  name: 'FilterBtns',
  data() {
    return {
      category: "allProducts",
    };
  },
  methods: {
    filter(category) {
      if (category === "clothing") {
        this.category = "clothing";
      } else if (category === "accessories") {
        this.category = "accessories";
      } else {
        this.category = "allProducts";
      }
      this.$emit('sort', category);
    },
  },
};
</script>
