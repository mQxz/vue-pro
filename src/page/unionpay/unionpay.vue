<template>
  <div>
    <download></download>
    <div class="main-page">
      <common-header></common-header>
      <div class="main">
        <div class="banner img-container">
          <img src="//s.qunarzz.com/piao_topic/image/touch/custom/2017/2578unionpay11/banner.jpg" class="banner-img">
        </div>
        <div class="slogan">{{sloganTxt}}</div>
        <div class="info-outer">
          <h3 class="info-title">活动规则</h3>
          <ul class="info-list">
            <li class="info-item"  v-for="item of infoList" :key="item.id">{{item.txt}}</li>
          </ul>
        </div>
        <ul class="entrance-list">
          <li class="entrance-item" v-for="item of entranceList" :key="item.id">
            <img :src="item.imgUrl" class="topic-img">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Download from './download'
  import CommonHeader from './header'
  export default {
    name: 'unionpay',

    components: {
      Download,
      CommonHeader
    },

    data () {
      return {
        sloganTxt: '',
        infoList: [],
        entranceList: []
      }
    },

    methods: {
      getPageData () {
        this.$http.get('/static/unionpay.json').then(this.handleGetDataSucc.bind(this))
      },

      handleGetDataSucc (res) {
        const body = res.body
        if (body.data) {
          this.sloganTxt = body.data.slogan
          this.infoList = body.data.infoList
          this.entranceList = body.data.entranceList
        }
      }
    },

    created () {
      this.getPageData()
    }
  }
</script>
<style scoped>
  .main {
    background: #ff8400;
  }
  .banner {
    overflow: hidden;
    height: 0;
    padding-bottom: 62.6%;
  }
  .banner-img {
    width: 100%;
  }
  .slogan {
    position: relative;
    margin: -15.3% auto .36rem;
    width: 72.5%;
    min-height: .32rem;
    padding: .14rem .2rem;
    background: #fc0;
    color: #b77000;
    font-size: .28rem;
    line-height: .32rem;
    text-align: justify;
    border-radius: .08rem;
    box-shadow: 0 0 0.2rem #d96b00;
  }
  .info-outer {
    margin-bottom: .4rem;
    background: url("//s.qunarzz.com/piao_topic/image/touch/custom/2017/2578unionpay11/bg.jpg");
    background-position: 0 0;
    background-size: 100% auto;
    background-repeat: repeat-y;
  }
  .info-title {
    color: #fff;
    font-weight: bold;
    font-size: .32rem;
    line-height: .76rem;
    text-align: center;
  }
  .info-list {
    margin: 0 8%;
  }
  .info-item {
    min-height: .48rem;
    color: #fff;
    font-size: .28rem;
    line-height: .48rem;
    text-align: justify;
  }
  .entrance-list {
    margin: 0 .2rem;
    padding-bottom: .2rem;
  }
  .entrance-item {
    overflow: hidden;
    margin-bottom: .2rem;
    height: 0;
    padding-bottom: 25%;
    background-color: #fd5f02;
  }
  .topic-img {
    width: 100%;
  }
</style>