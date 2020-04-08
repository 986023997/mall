<template>
  <div id="app">
    <main-tab-bar >
      <tab-item path="/home" activeColor="blue">
        <img src="./assets/img/tabitem/home.svg" slot="item-icon" alt="">
        <div slot="item-name">首页</div>
      </tab-item>
      <tab-item path="/category" activeColor="blue">
        <img src="./assets/img/tabitem/分类.svg" slot="item-icon">
        <div slot="item-name">分类</div>
      </tab-item>
      <tab-item path="/cart" activeColor="blue">
        <img src="./assets/img/tabitem/购物车.svg" slot="item-icon">
        <div slot="item-name">购物车</div>
      </tab-item>
      <tab-item path="/profile" activeColor="blue">
        <img src="./assets/img/tabitem/我的.svg" slot="item-icon">
        <div slot="item-name">我的</div>
      </tab-item>
    </main-tab-bar>
    <router-view></router-view>
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
