<template>
  <div>
    <div class="submit-control border-top">
      <div class="price-detail-area">
        <em class="booking-light">产品价格</em>
        <strong class="price">¥
          <em class="price-num">148</em>
        </strong>
        <span class="iconfont up-arrow" @click="showDetail" ref="btnchange">&#xe631;</span>
      </div>
      <a class="booking-btn">提交订单</a>
      <div class="booking-detail-outer">
        <div class="booking-detail">
          <div class="info-main">
            <h2 class="info-title">天安门故宫珍宝馆+八达岭+颐和园+恭王府联票无线耳麦人工讲解</h2>
            <div class="info-price">
              <span class="detail-price">¥
              <em class="detail-price-num">148</em>
              </span>X
              <span class="t-number">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        detailflag: true
      }
    },

    methods: {
      showDetail () {
        this.detail = document.querySelector('.booking-detail-outer')
        this.mask = document.querySelector('.mask')
        if (this.detailflag) {
          this.detail.style.display = 'block'
          this.mask.style.display = 'block'
          this.detailflag = !this.detailflag
          this.$refs.btnchange.innerHTML = '&#xe63c;'
        } else {
          this.detail.style.display = 'none'
          this.mask.style.display = 'none'
          this.detailflag = !this.detailflag
          this.$refs.btnchange.innerHTML = '&#xe631;'
        }
      }
    }
  }
</script>

<style scoped>
  .submit-control{
    position: fixed;
    z-index: 92;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    background: #fff;
  }
  .price-detail-area{
    position: relative;
    float: left;
    font-size: .24rem;
    line-height: 1rem;
    text-indent: .2rem;
    width: 50%;
  }
  .booking-light{
    color: #ff8300;
  }
  .price{
    color: #ff8300;
  }
  .price-num{
    font-size: 0.48rem;
  }
  .up-arrow{
    font-size: 0.24rem;
    color: #c1c1c1;
  }
  .booking-btn{
    float: right;
    background: #ff9800;
    color: #fff;
    font-size: 0.36rem;
    text-align: center;
    width: 50%;
    height: 100%;
    line-height: 1rem;
  }
  .booking-detail-outer{
    display: none;
    position: absolute;
    right: 0;
    bottom: 1rem;
    left: 0;
    width: 100%;
    background: #fff;
  }
  .booking-detail{
    padding: .15rem .2rem;
  }
  .info-title{
    color: #212121;
    font-size: .32rem;
    line-height: .44rem;
    margin-bottom: .04rem;
  }
  .info-price{
    height: .44rem;
    line-height: .44rem;
    color: #9e9e9e;
    font-size: .24rem;
  }  
  .mask{
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    position: fixed;
    z-index: 91;
    background: rgba(0,0,0,.5);
  }
</style>