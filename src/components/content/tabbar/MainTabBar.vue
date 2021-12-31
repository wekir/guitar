<template>
  <tabbar>
    <tab-bar-item path="/music/home">
      <template v-slot:item-img>
        <img src="../../../assets/img/tabbar/home.png">
      </template>
      <template v-slot:act-item-img>
        <img src="../../../assets/img/tabbar/home-act.png">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/music/score">
      <template v-slot:item-img>
        <img src="../../../assets/img/tabbar/score.png">
      </template>
      <template v-slot:act-item-img>
        <img src="../../../assets/img/tabbar/score-act.png">
      </template>
      <template v-slot:item-text>
        <div>乐谱</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/music/musicpage">
      <template v-slot:item-img>
        <img src="../../../assets/img/tabbar/music.png">
      </template>
      <template v-slot:act-item-img>
        <img src="../../../assets/img/tabbar/music-act.png">
      </template>
      <template v-slot:item-text>
        <div>音乐</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/music/mine">
      <template v-slot:item-img>
        <img src="../../../assets/img/tabbar/mine.png">
      </template>
      <template v-slot:act-item-img>
        <img src="../../../assets/img/tabbar/mine-act.png">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tabbar>
</template>

<script>

import Tabbar from "../../common/tabbar/Tabbar";
import TabBarItem from "../../common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    Tabbar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>