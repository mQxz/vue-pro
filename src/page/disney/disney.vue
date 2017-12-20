<template>
  <div class="page-main">
    <download></download>
    <disneyheader></disneyheader>
    <div class="disney-main">
      <div class="banner">
        <img src="//img1.qunarzz.com/piao/fusion/1712/26/8e023c469106ea02.jpg_640x330_5c89ce09.jpg" alt="">
      </div>
      <div class="nav">
        <div class="nav-bg">
          <ul class="nav-list">
            <li v-for="(tab,index) in tabsName" class="nav-item"><span @click="tabSwitch(index)" :class="{active:tab.isActive}">{{tab.name}}</span></li>
          </ul>
        </div>
      </div>
      <div class="group" style="display: block;">
        <hotel :hotelName="hotelName" :disneylandHotelInfo="disneylandHotelInfo" :disneylandHotelName="disneylandHotelName"></hotel>
        <happy :ticketType="ticketType" :disneyPackage="disneyPackage" :disneyPackageList="disneyPackageList"></happy>
        <food :mealPackage="mealPackage"></food>
      </div>
      <div class="group" style="display: none;">
        <food :mealPackage="mealPackage"></food>
      </div>
      <div class="group mt" style="display: none;">
        <happy :ticketType="ticketType" :disneyPackage="disneyPackage" :disneyPackageList="disneyPackageList"></happy>
      </div>
      <div class="group" style="display: none;">
        <food :mealPackage="mealPackage"></food>
      </div>
      <div class="group" style="display: none;">
        <hotel :hotelName="hotelName" :disneylandHotelInfo="disneylandHotelInfo" :disneylandHotelName="disneylandHotelName"></hotel>
      </div>
    </div>
    <disneyfooter></disneyfooter>
  </div>
</template>

<script>
  import Download from './download'
  import Disneyheader from './header'
  import Hotel from './pro-recommendation/hotel'
  import Happy from './pro-recommendation/happy'
  import Food from './pro-recommendation/food'
  import Disneyfooter from './footer'

  export default {
    name: 'Disney',

    components: {
      Download,
      Disneyheader,
      Hotel,
      Happy,
      Food,
      Disneyfooter
    },

    data () {
      return {
        hotelName: [],
        disneylandHotelInfo: [],
        disneylandHotelName: {},
        ticketType: [],
        disneyPackage: {},
        disneyPackageList: [],
        mealPackage: [],
        tabsName: [{
          name: '产品推荐',
          isActive: true,
          activeColor: '#c16800'
        }, {
          name: '全新酒店',
          isActive: false,
          activeColor: '#c0250c'
        }, {
          name: '漫威主题',
          isActive: false,
          activeColor: '#0180db'
        }, {
          name: '奇妙体验',
          isActive: false,
          activeColor: '#7916a5'
        }, {
          name: '无忧行程',
          isActive: false,
          activeColor: '#2c810e'
        }],
        active: false
      }
    },
    methods: {
      tabSwitch (tabindex) {
        const tabgroup = document.querySelectorAll('.group')
        const navitem = document.querySelectorAll('.nav-item')
        const len = tabgroup.length
        for (var i = 0; i < len; i++) {
          tabgroup[i].style.display = 'none'
          this.tabsName[i].isActive = false
          navitem[i].style.color = '#fff'
        }
        navitem[tabindex].style.color = this.tabsName[tabindex].activeColor
        this.tabsName[tabindex].isActive = true
        tabgroup[tabindex].style.display = 'block'
      },

      getIndexData () {
        this.$http.get('/static/disneyProductRecommendation.json').then(this.handleGetDataSucc.bind(this))
      },

      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data) {
          this.hotelName = body.data.hotelName
          this.disneylandHotelInfo = body.data.disneylandHotel
          this.disneylandHotelName = body.data.disneylandHotelName
          this.ticketType = body.data.ticketType
          this.disneyPackage = body.data.disneyPackage
          this.disneyPackageList = body.data.disneyPackageList
          this.mealPackage = body.data.mealPackage
        }
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style scoped>
  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .disney-main{
    background: #ffdb5c;
  }
  .banner{
    padding-bottom: 51.5625%;
    overflow: hidden;
    width: 100%;
    height: 0;
  }
  .banner img{
    width: 100%;
  }
  .nav{
    position: relative;
    margin-top: -.35rem;
  }
  .nav-bg{
    background: url("//s.qunarzz.com/piao_topic/image/touch/custom/2017/2245hongkongdisney05/navigation.png") no-repeat;
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 20.9375%;
    background-size: 100%;
  }
  .nav-list{
    display: flex;
    color: #fff;
    padding: 0 0.1rem;
  }
  .nav-list li{
    flex: 1;
    text-align: center;
  }
  .nav-list li span{
    display: inline-block;
    width: .6rem;
    height: .64rem;
    font-size: .3rem;
    line-height: .32rem;
    padding: 0.2rem;
  }
  .nav-list li:nth-of-type(1){
    margin-top: 5%;
    color: #c16800;
  }
  .nav-list li:nth-of-type(2){
    margin-top: 3.4%;
  }
  .nav-list li:nth-of-type(3){
    margin-top: 1.4%;
  }
  .nav-list li:nth-of-type(4){
    margin-top: 3.4%;
  }
  .nav-list li:nth-of-type(5){
    margin-top: 5%;
  }
  .mt{
    margin-top: 0.4rem;
  }
</style>