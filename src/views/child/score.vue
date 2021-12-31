<template>
  <div>
    <h1>乐谱</h1>
    <var-button type="success"
                @click="successclick">成功按钮</var-button>
  </div>
</template>

<script>
import { getscoredata } from '../../network/score/score'

export default {
  methods: {
    successclick () {
      getscoredata().then(res => {
        console.log("我拿到的数据：", res)
      })
        .catch(err => {
          console.log(err)
        })
    },
  }
}
</script>

<style>
</style>