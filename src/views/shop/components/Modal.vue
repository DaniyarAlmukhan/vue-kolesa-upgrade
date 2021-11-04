<template>
  <div class="modal" v-if="isOpen">
    <div class="modal__wrapper" @click="closeModal">
      <div class="modal__container">
        <div class="modal__imgs imgs">
          <img
            :src="cardData.mainImage"
            alt="Main modal Picture"
            class="imgs__main-pic"
          />
          <div class="imgs__preview-pics" v-if="cardData.images">
            <img
              v-for="(image, index) in cardData.images"
              :key="index"
              :src="image"
              alt="Preview Image"
              class="imgs__preview-pic"
              :class="{ selected: index === 0 }"
            />
          </div>
        </div>

        <div class="modal__item-info item-info">
          <div>
            <h3 class="item-info__title mb-8">{{ cardData.title }}</h3>
            <h3 class="item-info__price mb-8 fw-600">
              {{ cardData.price }} баллов
            </h3>
            <button
              class="btn btn--blue mb-24"
              @click="order"
              v-if="$store.state.user.score > this.cardData.price"
            >
              Заказать
            </button>
            <button class="btn btn--blue mb-24 btn--gold" @click="order" v-else>
              Попросить
              {{ this.cardData.price - $store.state.user.score }} баллов
            </button>
          </div>

          <div class="modal__balance balance">
            <div class="balance__info">
              <div class="balance__title mb-4">Твой баланс:</div>
              <div class="balance__amount">
                {{ $store.state.user.score }} баллов
              </div>
            </div>
            <div class="balance__icon">
              <img src="@/assets/🛍.png" alt="Balance Icon" />
            </div>
          </div>

          <div class="color mb-24" v-if="cardData.colors">
            <div class="color__title mb-24" v-if="cardData.colors.length > 0">
              Цвета:
            </div>
            <div class="color__picker">
              <div v-for="(color, index) in cardData.colors" :key="index">
                <input
                  type="radio"
                  name="color-pick"
                  :id="'color' + index"
                  :value="'color' + index"
                  class="product-filter-btn"
                  :checked="index === 0"
                />
                <label
                  :for="'color' + index"
                  class="filter-label"
                  :style="{ '--label-color': color.color }"
                  >{{ color.label }}</label
                >
              </div>
            </div>
          </div>

          <div class="size mb-24" v-if="cardData.volumes">
            <div class="size__title mb-8" v-if="cardData.volumes.length > 0">
              Объем:
            </div>
            <div class="size__picker">
              <div v-for="(volume, index) in cardData.volumes" :key="index">
                <input
                  type="radio"
                  name="size-pick"
                  :id="'volume' + index"
                  :value="'volume' + index"
                  class="product-filter-btn"
                  :checked="index === 0"
                />
                <label :for="'volume' + index" class="filter-label">
                  {{ volume }}</label
                >
              </div>
            </div>
          </div>

          <div class="size mb-24" v-if="cardData.sizes">
            <div class="size__title mb-8" v-if="cardData.sizes.length > 0">
              Размер:
            </div>
            <div class="size__picker">
              <div v-for="(size, index) in cardData.sizes" :key="index">
                <input
                  type="radio"
                  name="size-pick"
                  :id="'size' + index"
                  :value="'size' + index"
                  class="product-filter-btn"
                  :checked="index === 0"
                />
                <label :for="'size' + index" class="filter-label">
                  {{ size }}</label
                >
              </div>
            </div>
          </div>

          <div class="modal__details mb-24" v-if="cardData.description">
            <div class="details__title mb-4 fw-600">Детали:</div>
            <div class="details__text">{{ cardData.description }}</div>
          </div>
          <div class="modal__advice">
            <div class="advice__title mb-4 fw-600">Как выбрать размер:</div>
            <div class="advice__text">lorem</div>
          </div>
        </div>

        <button class="close-button" @click="closeModal">
          <img src="@/assets/Icon shape.png" alt="close button" class="close" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isOpen: Boolean,
    cardData: Object,
  },
  methods: {
    closeModal(e) {
      if (
        e.target.className === "modal__wrapper" ||
        e.target.className === "close"
      ) {
        this.$emit("close-modal");
      }
    },
    order(e) {
      if (e.target.classList.contains("btn--gold")) {
        this.$emit("close-modal");
      } else {
        this.$store.commit("order", this.cardData.price);
      }
    },
  },
};
</script>
