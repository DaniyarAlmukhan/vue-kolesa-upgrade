<template>
  <div id="app">
    <div class="wrapper dl-flex">
      <div class="wrapper__container container">
        <header class="header dl-flex">
          <div class="header__kolesa-logo">
            <img src="@/assets/Vector.svg" alt="Kolesa Logo" />
          </div>
          <div class="header__search-box">
            <input
              type="search"
              name="search-box"
              id="search-box"
              placeholder="Поиск"
              class="search-box"
            />
            <label for="search-box"
              ><img
                src="@/assets/Icon shape.svg"
                alt="Mag-glass"
                class="search-box__mag-glass"
            /></label>
          </div>
          <div class="header__profile profile">
            <a href="#" class="profile__link dl-flex">
              <img
                src="@/assets/profile pic.jpg"
                alt="Profile picture"
                class="profile__pic"
              />
              <div class="profile__right">
                <div class="profile__name fw-600">Мортиджан</div>
                <div class="profile__balance">300 баллов</div>
              </div>
            </a>
          </div>
        </header>
        <div class="body dl-flex">
          <nav class="navbar">
            <ul class="navbar__list">
              <li class="navbar__link"><a href="">Оргсхема</a></li>
              <li class="navbar__link"><a href="">Kolesa Team</a></li>
              <li class="navbar__link navbar__link--selected">
                <a href="">Kolesa Shop</a>
              </li>
              <li class="navbar__link"><a href="">Картина компании</a></li>
              <li class="navbar__link"><a href="">Новости</a></li>
              <li class="navbar__link"><a href="">Education</a></li>
              <li class="navbar__link"><a href="">Guidelines</a></li>
              <li class="navbar__link"><a href="">Библиотека</a></li>
              <li class="navbar__link"><a href="">FAQ</a></li>
            </ul>
          </nav>
          <div class="body__content">
            <img src="@/assets/Баннер.jpg" alt="Banner" />
            <div class="body__point-btns">
              <a href="#" class="btn-big btn-big--green btn-big--mr24">
                <img src="@/assets/➕.png" alt="+" class="btn-big__img" />Получить баллы
              </a>
              <a href="#" class="btn-big btn-big--yellow btn-big--mr24">
                <img src="@/assets/❓.png" alt="?" class="btn-big__img" />Как получить
                баллы
              </a>
              <a href="#" class="btn-big btn-big--blue">
                <img src="@/assets/🎁.png" alt="gift" class="btn-big__img" />Подарить
                баллы
              </a>
            </div>

            <div class="body__product-filter-btns" @click.once="sortItems">
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
                :class="{ filterLabelSelected: filterAll }"
                @click="filter('')"
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
                :class="{ filterLabelSelected: filterClothing }"
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
                :class="{ filterLabelSelected: filterAccessories }"
                @click="filter('accessories')"
              >
                Аксессуары</label
              >
            </div>
            <div class="body__products-grid products-grid js__product-grid">
              <div
                class="grid-item"
                :id="product.id"
                v-for="product in products"
                :key="product.id"
              >
                <div class="grid-item__imgs">
                  <img
                    :src="require(`${product.img}`)"
                    alt="Item Picture"
                    class="grid-item__pic"
                  />
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
                  <button type="submit" class="grid-item__order-btn" @click="openModal">
                    Заказать
                  </button>
                </div>
              </div>
            </div>
            <div class="modal" v-if="isOpen">
              <div class="modal__wrapper" @click="closeModal">
                <div class="modal__container">
                  <div class="modal__imgs imgs">
                    <img
                      src="./assets/kolesatshirt.png"
                      alt="Main modal Picture"
                      class="imgs__main-pic"
                    />
                    <div class="imgs__preview-pics">
                      <img
                        src="./assets/kolesatshirt.png"
                        alt="Preview Image"
                        class="imgs__preview-pic"
                      />
                      <img
                        src="./assets/kolesatshirt.png"
                        alt="Preview Image"
                        class="imgs__preview-pic--selected imgs__preview-pic"
                      />
                      <img
                        src="./assets/kolesatshirt.png"
                        alt="Preview Image"
                        class="imgs__preview-pic"
                      />
                    </div>
                  </div>
                  <div class="modal__item-info item-info">
                    <div>
                      <h3 class="item-info__title mb-8">Футболка</h3>
                      <h3 class="item-info__price mb-8 fw-600">500 баллов</h3>
                      <button class="btn btn--blue mb-24">Заказать</button>
                    </div>
                    <div class="modal__balance balance">
                      <div class="balance__info">
                        <div class="balance__title mb-4">Твой баланс:</div>
                        <div class="balance__amount">3 945 баллов</div>
                      </div>
                      <div class="balance__icon">
                        <img src="./assets/🛍.png" alt="Balance Icon" />
                      </div>
                    </div>
                    <div class="color mb-24">
                      <div class="color__title mb-8">Цвета:</div>
                      <div class="color__picker">
                        <input
                          type="radio"
                          name="color-pick"
                          id="color__blue__${product.id}"
                          value="color__blue"
                          class="product-filter-btn"
                          checked
                        />
                        <label for="color__blue" class="filter-label">Синий</label>
                        <input
                          type="radio"
                          name="color-pick"
                          id="color__beige"
                          value="color__beige"
                          class="product-filter-btn"
                        />
                        <label for="color__beige" class="filter-label"> Бежевый</label>
                        <input
                          type="radio"
                          name="color-pick"
                          id="color__gray"
                          value="color__beige"
                          class="product-filter-btn"
                        />
                        <label for="color__gray" class="filter-label"> Серый</label>
                      </div>
                    </div>
                    <div class="size mb-24">
                      <div class="size__title mb-8">Размер:</div>
                      <div class="size__picker">
                        <input
                          type="radio"
                          name="size-pick"
                          id="size_s__${product.id}"
                          value="size_s"
                          class="product-filter-btn"
                          checked
                        />
                        <label for="size_s__${product.id}" class="filter-label"> S</label>

                        <input
                          type="radio"
                          name="size-pick"
                          id="size_m__${product.id}"
                          value="size_m"
                          class="product-filter-btn"
                        />
                        <label for="size_m__${product.id}" class="filter-label">M</label>

                        <input
                          type="radio"
                          name="size-pick"
                          id="size_l__${product.id}"
                          value="size_l"
                          class="product-filter-btn"
                        />
                        <label for="size_l__${product.id}" class="filter-label">L</label>
                      </div>
                    </div>

                    <div class="modal__details mb-24">
                      <div class="details__title mb-4 fw-600">Детали:</div>
                      <div class="details__text">lorem</div>
                    </div>

                    <div class="modal__advice">
                      <div class="advice__title mb-4 fw-600">Как выбрать размер:</div>
                      <div class="advice__text">lorem</div>
                    </div>
                  </div>
                  <button class="close-button" @click="closeModal">
                    <img src="./assets/Icon shape.png" alt="close button" class="close" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer dl-flex">
        <div class="footer__container container dl-flex">
          <div class="footer__social">
            <div class="footer__credits">© Kolesa Group</div>
            <a href=""><img src="@/assets/Instagram.png" alt="Instagram" /></a>
            <a href=""><img src="@/assets/YouTube.png" alt="Instagram" /></a>
            <a href=""><img src="@/assets/VK.png" alt="Instagram" /></a>
          </div>
          <div class="footer__contact dl-flex">
            <div class="footer__text">
              <p>Есть идеи что улучшить?</p>
              <p>Не знаешь, с кем решить проблему?</p>
            </div>
            <button type="submit" class="footer__contact-btn">Написать</button>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      filterAll: true,
      filterClothing: false,
      filterAccessories: false,
      products: "",
      isOpen: false,
      isClosed: true,
      clothing: [
        {
          id: 0,
          price: 200,
          title: "Футболка Эволюционируй или Сдохни",
          size: "S/M/L",
          color: ["blue", "beige", "gray"],
          isNew: false,
          img: "./assets/kolesatshirt.png",
          details: "Брендированная футболка Материал: Хлопок 80%, Вискоза 20%",
          advice: "Написать дяде Рику для уточнения.",
        },
        {
          id: 1,
          price: 250,
          title: "Футболка <Frontend>",
          size: "S/M",
          color: ["blue", "beige", "gray"],
          isNew: true,
          img: "./assets/frontendtshirt.jpg",
          details: "Футболка Материал: Хлопок 80%, Вискоза 20%",
        },
        {
          id: 2,
          price: 300,
          title: "Свитшот",
          size: "S/L",
          color: ["blue", "beige", "gray"],
          isNew: true,
          img: "./assets/kolesasweatshirt.jpg",
          details: "Брендированный Свитшот Материал: Хлопок 80%, Вискоза 20%",
        },
        {
          id: 3,
          price: 350,
          title: "Свитшот Front end developer by day",
          size: "M/L",
          color: ["blue", "beige", "gray"],
          isNew: false,
          img: "./assets/frontendsweatshirt.jpg",
          details: "Свитшот Материал: Хлопок 80%, Вискоза 20%",
          advice: "Написать дяде Морти для уточнения.",
        },
        {
          id: 4,
          price: 400,
          title: "Худи React",
          size: "S/M/L",
          color: ["blue", "beige", "gray"],
          isNew: false,
          img: "./assets/react1.jpg",
          details: "Брендированный Худи Материал: Хлопок 80%, Вискоза 20%",
        },
        {
          id: 5,
          price: 225,
          title: "Худи Frontend Happy Hour",
          size: "S",
          color: ["blue", "beige", "gray"],
          isNew: false,
          img: "./assets/hoodie.jpg",
          details: "Худи Материал: Хлопок 80%, Вискоза 20%",
        },
      ],
      accessories: [
        {
          id: 6,
          price: 100,
          title: "Бутылка",
          volume: 0.7,
          isNew: false,
          img: "./assets/kolesabottle.jpg",
          details: "Бутылка для воды с трубочкой",
        },
        {
          id: 7,
          price: 125,
          title: "Зонт",
          accessoriesColor: "Синий/Красный/Черный",
          isNew: false,
          img: "./assets/umbrella.jpg",
        },
        {
          id: 8,
          price: 50,
          title: "Картхолдер",
          accessoriesColor: "Синий/Красный/Черный",
          isNew: false,
          img: "./assets/cartholder.jpg",
        },
        {
          id: 9,
          price: 120,
          title: "Бутылка",
          isNew: true,
          volume: 1,
          img: "./assets/kolesabottle.jpg",
          details: "Бутылка для воды с трубочкой",
        },
        {
          id: 10,
          price: 175,
          title: "Зонт",
          accessoriesColor: "Синий/Красный/Черный",
          isNew: false,
          img: "./assets/umbrella.jpg",
        },
        {
          id: 11,
          price: 75,
          title: "Картхолдер",
          accessoriesColor: "Синий/Красный/Черный",
          isNew: true,
          img: "./assets/cartholder.jpg",
        },
      ],
    };
  },
  methods: {
    filter(category) {
      if (category === "clothing") {
        this.products = this.clothing;
        this.filterAll = false;
        this.filterAccessories = false;
        this.filterClothing = true;
      } else if (category === "accessories") {
        this.products = this.accessories;
        this.filterAll = false;
        this.filterClothing = false;
        this.filterAccessories = true;
      } else {
        this.products = this.allProducts;
        this.filterAccessories = false;
        this.filterClothing = false;
        this.filterAll = true;
      }
    },

    openModal() {
      this.isOpen = true;
    },
    closeModal(e) {
      if (e.target.className === "modal__wrapper" || e.target.className === "close") {
        this.isOpen = false;
      }
    },
  },

  beforeMount() {
    this.allProducts = this.clothing.concat(this.accessories);
    this.allProducts.sort((x, y) => (x.isNew < y.isNew ? 1 : -1));
    this.products = this.allProducts;
    this.clothing.sort((x, y) => (x.isNew < y.isNew ? 1 : -1));
    this.accessories.sort((x, y) => (x.isNew < y.isNew ? 1 : -1));
  },
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";

</style>
