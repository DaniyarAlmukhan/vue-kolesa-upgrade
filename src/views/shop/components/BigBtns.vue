<template>
  <div class="body__point-btns">
    <a href="#" class="btn-big btn-big--green btn-big--mr24">
      <img src="@/assets/➕.png" alt="+" class="btn-big__img" />Получить баллы
    </a>
    <router-link
      to="/shop/how-to-get-points"
      href="#"
      class="btn-big btn-big--yellow btn-big--mr24"
    >
      <img src="@/assets/❓.png" alt="?" class="btn-big__img" />Как получить
      баллы
    </router-link>
    <a href="#" class="btn-big btn-big--blue">
      <img src="@/assets/🎁.png" alt="gift" class="btn-big__img" />Подарить
      баллы
    </a>
  </div>
</template>

<script>
export default {
  name: "BigBtns",
};
</script>
