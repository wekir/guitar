<template>
  <div>
    <router-view />
    <Maintabbar />
  </div>
</template>

<script>
import Maintabbar from '../components/content/tabbar/MainTabBar.vue'
export default {
  components: {
    Maintabbar
  }
}
</script>

<style>
</style>