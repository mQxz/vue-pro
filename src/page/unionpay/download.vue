<template>
  <div id="js-appendDIV"  v-if="isClose">
    <div id="jq-download">
      <div class="logo-con">
        <img src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/top-logo.png" class="logo-img">
      </div>
      <div class="download-title-con">
        <div class="download-title">去哪儿旅行</div>
        <div class="download-desc">
          超过<span class="desc-linght">4.6亿</span>人的聪明选择
        </div>
      </div>
      <div class="download-btn-con">
        <div class="btn" @touchstart="handleDownloadToucstart">下载客户端</div>
      </div>
      <div class="close-div-con" @touchstart="handleCloseToucstart">
        <img src="//source.qunarzz.com/site/images/wap/touch/images/v2/images1x/modifydelete.png" class="close-div">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'download',

    data () {
      return {
        isClose: true
      }
    },

    methods: {
      handleCloseToucstart (e) {
        //点透
        e.preventDefault();
        this.isClose = false
      },

      handleDownloadToucstart () {
        const osType = navigator.userAgent
        const isAndroid = osType.indexOf('Android') > -1 || osType.indexOf('Adr') > -1
        const isiOS = !!osType.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        if (isAndroid) {
          location.href = 'https://touch.qunar.com/h5/client?bd_source=qunar&sScheme=0&scheme=home&touchUrl=download?bd_source=qunar'
        } else if (isiOS) {
          location.href = 'https://touch.qunar.com/h5/client?bd_source=qunar&sScheme=0&scheme=home&touchUrl=download?bd_source=qunar'
        }
      }
    }
  }
</script>
<style scoped>
  #js-appendDIV {
    height: 1.2rem;
    background: #333;
  }
  #jq-download {
    position: fixed;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    height:1.2rem;
    padding: .2rem 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 5;
  }
  .logo-con {
    width: 1.2rem;
    text-align: center;
    position: absolute;
  }
  .logo-img {
    height: .8rem;
    width: .8rem;
    vertical-align: middle;
  }
  .download-title-con {
    position: absolute;
    left: 1.2rem;
  }
  .download-title {
    font-size: .44rem;
    line-height: .44rem;
    color: #25A4BB;
    font-weight: bold;
  }
  .download-desc {
    line-height: .4rem;
    color: #c4c4c4;
  }
  .desc-linght {
    font-style: .28rem;
    color: #fab400;
    font-weight: bold;
  }
  .download-btn-con {
    position: absolute;
    top: .24rem;
    right: .9rem;
    border-bottom: .06rem solid #e58700;
    border-radius: .1rem;
    background-color: #e58700;
  }
  .btn {
    width: 1.6rem;
    height: .66rem;
    background-color: #f4b000;
    font-size: .28rem;
    text-align: center;
    border-radius: .1rem;
    color: #fff;
    line-height: .66rem;
    font-weight: bold;
  }
  .close-div-con {
    position: absolute;
    top: .1rem;
    right: .1rem;
    width: .4rem;
    height: .4rem;
  }
  .close-div {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }
</style>