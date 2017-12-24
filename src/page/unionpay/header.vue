<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <h1 class="header-title">银联立减</h1>
    <div class="header-index-con">
      <router-link to="/" class="link">
        <span class="iconfont header-logo">&#xe67c;</span>
        首页
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'common-header'
  }
</script>
<style scoped>
  .header {
    display: flex;
    box-sizing: border-box;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    background: #fff;
    color: #333;
  }
  .back {
    width: .88rem;
    height: .88rem;
    color: #666;
    font-size: .32rem;
  }
  .header-title {
    flex: 1;
  }
  .header-index-con {
    width: .88rem;
    height: .88rem;
    line-height: .36rem;
    color: #666;
    font-size: .24rem;
  }
  .header-logo {
    display: block;
    height: auto;
    line-height: 1;
    padding-top: .1rem;
    font-size: .4rem;
  }
  .link {
    color: #666;
  }
</style>