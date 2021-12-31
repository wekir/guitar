<template>
  <div>
    <div class="scroller">
      <var-sticky>
        <Appbar />
      </var-sticky>
      <!-- <div class="block"></div> -->
      <!-- 轮播图 -->
      <Swipe :bannerimg="bannerimg" />
      <!-- <ul>
        <li>1</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>8</li>
        <li>9</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul> -->
      <h1>home</h1>
      <var-button type="success"
                  @click="successclick">成功按钮</var-button>
    </div>

  </div>
</template>

<script>
import { getHomeMultidata, getbanner } from '../../network/home'
import Appbar from '../../components/homechild/AppBar/appbar.vue'
import Swipe from '../../components/homechild/Swipe/swipe.vue'

export default {
  components: {
    Appbar,
    Swipe
  },
  data () {
    return {
      bannerimg: []
    }
  },
  created () {
    this.getbanner()
  },
  methods: {
    successclick () {
      getHomeMultidata().then(res => {
        console.log("我拿到的数据：", res)
      })
        .catch(err => {
          console.log(err)
        })
    },

    getbanner () {
      const self = this
      getbanner().then(res => {
        self.bannerimg = res.data.banners
      }).catch(err => {
        console.log(err);
      })
    }
  }

}
</script>

<style lang="less" scoped>
.scroller {
  height: 92.8vh;
  overflow: auto;
  // background-color: #fbfb;
  // background: #2979ff;

  // .block {
  //   width: 100%;
  //   height: 600px;
  //   background: #2979ff;
  //   opacity: 0.5;
  // }
}
</style>