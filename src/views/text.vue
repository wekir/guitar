<template>
  <div>
    <var-button>默认按钮</var-button>
    <var-button type="primary">主要按钮</var-button>
  </div>

</template>

<script>
import { ref } from 'vue';
export default {
  // name: 'Text',
  setup () {
    const active = ref(0);
    return { active };
  },

  methods: {
    /*
      网络请求相关的代码
     */
    getHomeMultidata () {

    },
  }
}
</script>

<style>
</style>