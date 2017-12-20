<template>
  <div>
  	<header class="header">
      <div class="back iconfont">&#xe624;</div>
      <div class="title">香港迪士尼乐园</div>
      <router-link to="/" class="to-index"><i class="iconfont">&#xe611;</i><span>首页</span></router-link>
  	</header>
  </div>
</template>

<script>
   export default {}
</script>

<style scoped>
  .header{
    display: flex;
    background: #1ba9ba;
    text-align: center;
    color: #fff;
    border-bottom: #1b7a8b .02rem solid;
    height: .88rem;
    line-height: .88rem;
  }
  .header .back{
    width: 0.88rem;
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
  }
  .header .to-index{
    width: .88rem;
    height: .87rem;
    color: #fff;
    position: relative;
  }
  .to-index i{
    display: block;
    height: auto;
    padding-top: .1rem;
    line-height: 1;
  }
  .to-index span{
    position: absolute;
    left: 0.16rem;
    top:0.18rem;
    height: 0;
  }
</style>