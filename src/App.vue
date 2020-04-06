
<template>
  <div id="app">
    <main-tab-bar>
      <tab-item>
        <img >
        <div slot="item-name">首页</div>
      </tab-item>
      <tab-item>
        <div slot="item-name">分类</div>
      </tab-item>
      <tab-item>
        <div slot="item-name">购物车</div>
      </tab-item>
      <tab-item>
        <div slot="item-name">我的</div>
      </tab-item>
    </main-tab-bar>
  </div>
</template>
<script>
  import mainTabBar from "./components/tabBar/mainTabBar";
  import TabItem from "./components/tabBar/tabItem";
  export default {
    name:"App",
    components:{
      TabItem,
      mainTabBar
    }
  }

</script>
<style>

body{
  padding: 0px;
  margin: 0px;
}

</style>
