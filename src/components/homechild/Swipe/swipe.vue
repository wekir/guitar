<template>
  <var-swipe class="swipe"
             :autoplay="2000">
    <var-swipe-item v-for="(item,key) in bannerimg"
                    :key="key">
      <img class="swipe-item"
           :src="item.imageUrl">
    </var-swipe-item>
  </var-swipe>
</template>

<script>
export default {
  props: {
    bannerimg: {
      type: Array
    }
  },
  // created () {

  // }
}
</script>

<style>
.swipe {
  height: 160px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>