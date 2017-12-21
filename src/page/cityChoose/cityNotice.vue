<template>
   <div class="city-notice">
    <div class="cityarea-content citynormal-content" v-for="item of noticeRes">
      <span class="cityitem-normal border-bottom ellipsis">{{item}}</span>
    </div>
   </div>
</template>

<script>
  export default {
    name: 'cityNotice',
    props: ['noticeRes']
  }
</script>

<style scoped>
  .cityarea-content {
    position: relative;
    overflow: hidden;
    padding-right: .5rem;
    padding-left: .2rem;
    background: #fff;
  }
  .city-now {
    padding-top: .04rem;
    padding-bottom: .26rem;
  }
  .cityitem-light {
    box-sizing: border-box;
    float: left;
    width: 33.33%;
    padding: .2rem .14rem 0 .1rem;
  }
  .cityitem-name {
    display: block;
    box-sizing: border-box;
    line-height: 28px;
    text-align: center;
    color: #212121;
    border: .02rem solid #c9cccd;
    border-radius: .06rem;
  }
  .ellipsis {
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cityitem-normal {
    display: block;
    position: relative;
    line-height: .76rem;
    padding-left: .2rem;
    font-size: .28rem;
    color: #212121;
  }
  .citynormal-content {
    padding: 0;
  }
</style>