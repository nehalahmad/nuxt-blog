<template>
  <div class="header-container">
    <header class="the-header">
      <app-the-sidenav-toggle
        @toggle="$emit('side-nav-toggle')"
      ></app-the-sidenav-toggle>
      <div class="logo">
        <nuxt-link to="/">WD BLOG</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item"><nuxt-link to="/posts">Posts</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSidenavToggle from "./TheSidenavToggle";

export default {
  components: { appTheSidenavToggle: TheSidenavToggle }
};
</script>

<style scoped>
.header-container {
  height: 60px;
  background: black;
}
.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}
.logo a {
  text-decoration: none;
  color: white;
}
.spacer {
  flex: 1;
}
.navigation-items {
  display: none;
}
@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}
.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 200px;
  justify-content: space-around;
}
.nav-item {
  margin: 0 10px;
}
.nav-item a {
  text-decoration: none;
  color: white;
}
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
