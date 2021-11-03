<template>
  <div class="header__profile profile" @click="updateUser">
    <a href="#" class="profile__link dl-flex">
      <img
        :src="$store.state.user.avatarUrl"
        alt="Profile picture"
        class="profile__pic"
      />
      <div class="profile__right">
        <div class="profile__name fw-600">{{ $store.state.user.name }}</div>
        <div class="profile__balance">{{ $store.state.user.score }} баллов</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "User",
  methods:{
    updateUser(){
      this.$store.dispatch('updateUser');
    }
  },
  mounted() {
    this.updateUser();
  },
};
</script>
