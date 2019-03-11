<template>
  <div id="app">
    <div class="pages">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component} from 'vue-property-decorator';

  @Component
  export default class App extends Vue {}
</script>

<style lang="less">
  @import "~@/assets/less/app.less";

  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
