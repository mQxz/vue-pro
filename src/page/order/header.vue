<template>
  <div>
    <header class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="title">订单填写</div>
      <div class="login">登录</div>
    </header>
  </div>
</template>

<script>
 export default {}
</script>
<style scoped>
  .header {
    display: flex;
    position: relative;
    height: .88rem;
    background: #00bcd4;
    color: #fff;
    line-height: .88rem;
    text-align: center;
  }
  .header .back{
    width: 0.8rem;
    line-height: 0.88rem;
    text-align: center;
    font-size: 0.3rem;
    font-weight: 900;
    color: #fff;
  }
  .header .title{
    color: #fff;
    flex: 1;
    font-size: 0.32rem;
    line-height: 0.88rem;
  }
  .header .login{
    width: 1rem;
    height: .88rem;
    color: #fff;
    position: relative;
  }
</style>