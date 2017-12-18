<template>
  <div class="page-main">
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
	<header class="header">
	  <div class="back iconfont">&#xe624;</div>
	  <div class="title">香港迪士尼乐园</div>
	  <router-link to="/" class="to-index"><i class="iconfont">&#xe611;</i><span>首页</span></router-link>
	</header>
	<div class="disney-main">
	  <div class="banner">
		<img src="//img1.qunarzz.com/piao/fusion/1712/26/8e023c469106ea02.jpg_640x330_5c89ce09.jpg" alt="">
	  </div>
	  <div class="nav">
		<div class="nav-bg">
		  <ul class="nav-list">
		  	<li><span>产品推荐</span></li>
		  	<li><span>全新酒店</span></li>
		  	<li><span>漫威主题</span></li>
		  	<li><span>奇妙体验</span></li>
		  	<li><span>无忧行程</span></li>
		  </ul>
		</div>
	  </div>
	  <div class="group">
		<div class="hotel">
		  <div class="hotel-title-img">
			<img src="//img1.qunarzz.com/piao/fusion/1712/d4/f8cf91f0b7cb902.png" alt="">
		  </div>
		  <div class="hotel-list clearfix">
			<div>
			  <div>
				<div>
				  <img :src="imgUrl" alt="">
				</div>
				<span>{{name}}</span>
			  </div>
			  <ul>
				<li v-for="item in explorerHotelInfo">
				  <div>{{item.type}}</div>
				  <div>{{item.price}}</div>
				</li>
			  </ul>
			</div>
			<div>
			</div>
		  </div>
		</div>
		<div></div>
		<div></div>
	  </div>
	</div>
  </div>
</template>

<script>
  export default {
    name: 'Disney',
    data () {
      return {
        explorerHotelInfo: [],
        hollywoodHotelInfo: [],
        disneylandHotelInfo: [],
        imgUrl: [],
        name: []
      }
    },
    methods: {
      getIndexData () {
        this.$http.get('/static/disney.json').then(this.handleGetDataSucc.bind(this))
      },

      handleGetDataSucc (res) {
        const body = res.body
        if (body && body.data) {
          this.explorerHotelInfo = body.data.explorerHotel
          this.hollywoodHotelInfo = body.data.hollywoodHotel
          this.disneylandHotelInfo = body.data.disneylandHotel
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
  }
  .nav-list li:nth-of-type(1) span{
	color: #c16800;
  }
  .nav-list li:nth-of-type(1){
    margin-top: 8%;
  }
  .nav-list li:nth-of-type(2){
    margin-top: 6.4%;
  }
  .nav-list li:nth-of-type(3){
    margin-top: 4.4%;
  }
  .nav-list li:nth-of-type(4){
    margin-top: 6.4%;
  }
  .nav-list li:nth-of-type(5){
    margin-top: 8%;
  }
  .hotel-title-img img{
  	width: 100%;
  }
</style>