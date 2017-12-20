<template>
  <div style="height:60px;font-size:0;background-color:#000">
    <div class="ceiling">
      <div class="logo">
        <img style="width:40px;height:40px" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png">
      </div>
      <div class="ceiling-con">
        <div class="ceiling-title">去哪儿旅行</div>
        <div style="color: #c4c4c4;line-height:20px">超过<span style="font-size:14px;color:#fab400;font-weight:bold">4.6亿</span>人的聪明选择</div>
      </div>
      <div class="download">
        下载客户端
      </div>
      <div id="closeDiv" style="position:absolute;top:5px;right:5px;width:20px;height:20px"><img style="width:100%;height:100%" src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png"></div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .logo{
    width: 60px;
    text-align: center;
    position: absolute;
  }
  .ceiling{
    position: fixed;
    top: 0;
    z-index: 5;
    height: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 12px;
    padding: 10px 0;
    box-sizing: border-box;
  }
  .ceiling-con{
    position: absolute;
    left: 60px;
  }
  .ceiling-title{
    font-size: 22px;
    color: #25A4BB;
    font-weight: bold;
    line-height: 22px;
  }
  .download{
    width: 80px;
    height: 33px;
    background-color: #f4b000;
    font-size: 14px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    line-height: 33px;
    font-weight: bold;
    position: absolute;
    top: 12px;
    right: 44px;
    box-shadow: 0 0.06rem #e86708;
  }
</style>