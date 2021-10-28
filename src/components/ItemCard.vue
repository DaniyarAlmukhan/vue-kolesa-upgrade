<template>
  <div class="body__products-grid products-grid js__product-grid">
    <div
      class="grid-item"
      :id="product.id"
      v-for="product in products"
      :key="product.id"
    >
      <div class="grid-item__imgs">
        <img :src="product.mainImage" alt="Item Picture" class="grid-item__pic" />
        <img
          src="@/assets/Label.svg"
          alt=""
          class="grid-item__badge"
          v-if="product.isNew"
        />
      </div>
      <div class="grid-item__info">
        <div class="grid-item__price fw-600">{{ product.price }} баллов</div>
        <div class="grid-item__title fw-600">{{ product.title }}</div>
        <div class="grid-item__additional">
          <div v-if="product.size">Размеры {{ product.size }}</div>
          <div v-if="product.volume">Объем {{ product.volume }}</div>
          <div v-if="product.accessoriesColor">
            Цвет {{ product.accessoriesColor }}
          </div>
        </div>
        <button
          type="submit"
          class="grid-item__order-btn"
          @click="openCard(product)"
        >
          Заказать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    products: Array,
  },

  methods: {
    openCard(product) {
      this.$emit("passProduct", product);
    },
  },
};
</script>