<template>
  <div class="header__profile profile">
    <a href="#" class="profile__link dl-flex">
      <img
        :src="user.avatarUrl"
        alt="Profile picture"
        class="profile__pic"
      />
      <div class="profile__right">
        <div class="profile__name fw-600">{{user.name}}</div>
        <div class="profile__balance">{{ user.score }} баллов</div>
      </div>
    </a>
  </div>
</template>

<script>
import axios from "@/axios";

export default {
  name: 'User',
  props: {
    user: Object,
  },
  mounted() {
    axios.get("templates/7ZW3y5GAuIge/data")
      .then((response) => {
        this.$emit('updateUser', response.data)
      }).catch(err=>console.log(err));
  },
};
</script>