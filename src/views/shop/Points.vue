<template>
  <div class="points">
    <router-view></router-view>
    <div class="points__links">
      <router-link to="/shop" class="points__link">Kolesa Shop</router-link>
      /
      <router-link to="/shop/how-to-get-points" class="points__link"
        >Как получить баллы</router-link
      >
    </div>
    <h3 class="points__title">Как получить баллы</h3>
    <div class="products-grid info-grid">
      <div class="info-item">
        <div class="info-item__body">
          <img class="info-item__icon" src="@/assets/info1.png" />
          <div class="info-item__title">Выступление на конференциях</div>
          <div class="info-item__reward">90 баллов</div>
          <div class="info-item__desc">
            Стань спикером на международной конференции по своему направлению
          </div>
          <button class="grid-item__order-btn">Отправить Заявку</button>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item__body">
          <img class="info-item__icon" src="@/assets/info1.png" />
          <div class="info-item__title">Выступление на конференциях</div>
          <div class="info-item__reward">90 баллов</div>
          <div class="info-item__desc">
            Стань спикером на международной конференции по своему направлению
          </div>
          <button class="grid-item__order-btn">Отправить Заявку</button>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item__body">
          <img class="info-item__icon" src="@/assets/info1.png" />
          <div class="info-item__title">Выступление на конференциях</div>
          <div class="info-item__reward">90 баллов</div>
          <div class="info-item__desc">
            Стань спикером на международной конференции по своему направлению
          </div>
          <button class="grid-item__order-btn">Отправить Заявку</button>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item__body">
          <img class="info-item__icon" src="@/assets/info1.png" />
          <div class="info-item__title">Выступление на конференциях</div>
          <div class="info-item__reward">90 баллов</div>
          <div class="info-item__desc">
            Стань спикером на международной конференции по своему направлению
          </div>
          <button class="grid-item__order-btn">Отправить Заявку</button>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item__body">
          <img class="info-item__icon" src="@/assets/info1.png" />
          <div class="info-item__title">Выступление на конференциях</div>
          <div class="info-item__reward">90 баллов</div>
          <div class="info-item__desc">
            Стань спикером на международной конференции по своему направлению
          </div>
          <button class="grid-item__order-btn">Отправить Заявку</button>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item__body">
          <img class="info-item__icon" src="@/assets/info1.png" />
          <div class="info-item__title">Выступление на конференциях</div>
          <div class="info-item__reward">90 баллов</div>
          <div class="info-item__desc">
            Стань спикером на международной конференции по своему направлению
          </div>
          <button class="grid-item__order-btn">Отправить Заявку</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "how-to-get-points",
};
</script>

<style lang="scss">
.info-item {
  width: 330px;
  height: 324px;
  border-radius: 16px;
  box-shadow: 0px 2px 10px rgba(28, 24, 25, 0.1);
  &__body {
    width: 282px;
    margin: auto;
    padding-top: 32px;
  }

  &__icon {
    margin-bottom: 16px;
    padding-left: 8px;
  }

  &__title {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
  }

  &__reward {
    margin-bottom: 8px;
    width: 88px;
    height: 20px;
    border-radius: 8px;
    background: #e9f2fb;
    text-align: center;
    font-size: 13px;
    line-height: 20px;
  }

  &__desc {
    font-size: 14px;
    line-height: 24px;
  }
}

.grid-item__order-btn {
  display: block;
  margin: 0;
  width: 100%;
  margin-top: 68px;
}

.info-grid {
  gap: 24px;
}
.points {
  &__link {
    color: #2a81dd;
    font-size: 14px;
  }

  &__links {
    margin-bottom: 24px;
  }

  &__title{
    font-weight: 600;
    font-size: 20px;
  }
}
</style>
