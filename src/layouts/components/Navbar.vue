<template>
  <nav class="navbar">
    <ul class="navbar__list">
      <li class="navbar__link" v-for="(route, index) in routes" :key="index">
        <router-link
          :to="route.link"
          active-class="navbar__link--selected"
          :exact="route.exact"
        >
          {{ route.label }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      routes: [
        {
          link: "/",
          label: "Оргсхема",
          exact: true,
        },
        {
          link: "/about",
          label: "Kolesa Team",
          exact: true,
        },
        {
          link: "/shop",
          label: "Kolesa Shop",
          exact: false,
        },
      ],
    };
  },
};
</script>
