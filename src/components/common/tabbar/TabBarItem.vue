<template>
  <div class="tabbar-item"
       @click="isclick">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="act-item-img"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      required: true
    },
    activeColor: {
      type: String,
      default: '#53b1e2'
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    isclick () {
      // console.log("aaa")
      this.$router.push(this.path)
    },

  }
}
</script>

<style>
.tabbar-item {
  flex: 1;
  font-size: 14px;
  text-align: center;
}

.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 5px;
  vertical-align: middle;
}

/*.acteve{*/
/*  color: #ff5777;*/
/*}*/
</style>