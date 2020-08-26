<template>
  <div>
    <app-the-header @side-nav-toggle="displaySidenav = !displaySidenav" />
    <app-the-sidenav :show="displaySidenav" @close="displaySidenav = false" />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSidenav from "@/components/Navigation/TheSidenav.vue";
import TheSidenavToggle from "@/components/Navigation/TheSidenavToggle.vue";

export default {
  middleware: "log",
  components: {
    appTheHeader: TheHeader,
    appTheSidenav: TheSidenav,
    appTheSidenavToggle: TheSidenavToggle
  },
  data() {
    return { displaySidenav: false };
  }
};
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
