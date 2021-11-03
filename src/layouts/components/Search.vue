<template>
  <div class="header__search-box">
    <input
      type="search"
      name="search-box"
      id="search-box"
      placeholder="Поиск"
      class="search-box"
      v-model="input"
      @input="search"
    />
    <label for="search-box"
      ><img
        src="@/assets/Icon shape.svg"
        alt="Mag-glass"
        class="search-box__mag-glass"
    /></label>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.input);
    },
  },
};
</script>
