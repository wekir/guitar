<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar"
}
</script>

<style scoped>
#tab-bar{
  height: 49px;
  background-color: #f6f6f6;
  display: flex;

  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>