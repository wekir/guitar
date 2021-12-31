<template>
  <div>
    <var-app-bar class="title">
      <template #right>
        <var-button round
                    text
                    color="transparent"
                    text-color="#ffffff"
                    @click="goBack">
          <img src="../../../assets/img/home/listen.png">
        </var-button>
      </template>

      <template #left>
        <var-menu>
          <var-button round
                      type="primary"
                      block
                      text
                      color="transparent"
                      text-color="#ffffff"
                      @click="left = true">
            <var-icon name="menu"
                      :size="24" />
          </var-button>
        </var-menu>
        <var-popup position="left"
                   v-model:show="left">
          <div class="block">
            素胚勾勒出青花笔锋浓转淡,
            瓶身描绘的牡丹一如你初妆,
            冉冉檀香透过窗心事我了然,
            宣纸上走笔至此搁一半。
          </div>
        </var-popup>
      </template>
    </var-app-bar>

  </div>

</template>

<script>
import { ref } from 'vue'
import { Snackbar } from '@varlet/ui'

export default {
  setup () {
    const offsetY = ref(false)
    const center = ref(false)
    const top = ref(false)
    const bottom = ref(false)
    const left = ref(false)
    const right = ref(false)

    const goBack = () => {
      Snackbar({
        content: '返回',
        position: 'top'
      })
    }

    return {
      center,
      top,
      bottom,
      left,
      right,
      goBack,
      offsetY
    }
  }
  // setup () {
  //   const offsetY = ref(false)
  //   const menuList = ref([
  //     { label: '选项一', value: 'menu1' },
  //     { label: '选项二', value: 'menu2' }
  //   ])

  //   const goBack = () => {
  //     Snackbar({
  //       content: '返回',
  //       position: 'top'
  //     })
  //   }

  //   return {
  //     offsetY,
  //     menuList,
  //     goBack
  //   }
  // }
}
</script>

<style lang="less" scoped>
.title {
  background-color: #53b1e2;
}

/*
  弹出层样式
*/

.block {
  padding: 20px 24px;
  width: 250px;
  background-color: #53b1e2;
}

.var-menu {
  background: transparent;
}
</style>