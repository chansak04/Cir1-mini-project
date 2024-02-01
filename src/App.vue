<script setup>
import NavBar from './views/layouts/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <nav-bar />
  <router-view />
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
.navbar{
  font-family: 'Sarabun' ,sans-serif;
}

</style>