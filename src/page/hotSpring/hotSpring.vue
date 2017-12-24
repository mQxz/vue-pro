<template>
	<div class="container">
	  <div class="header">
	    <i class="iconfont back">&#xe607;</i>
	    <h1 class="header-content">温泉5折起，精挑细选温泉清单</h1>
	    <span class="home-page">首页</span>
	  </div>

	  <div class="banner">
	  	<img src="//img1.qunarzz.com/piao/fusion/1710/a5/30bea424f8862102.jpg_640x361_929a4c2a.jpg" class="banner-img"/>
	  	<div class="img-text">
	  		<div class="discount">★温泉5折起★</div>
	  		<div class="selective">精挑细选温泉清单</div>
	  	</div>
	  	<div class="mask-layer"></div>
	  </div>
	  <span class="palce">
	  	<span class="city">北京</span>
	  </span>

    <div class="discount-container">
      <div class="discount-coupon">
        <div class="discount-money">
          <span>&yen;</span>
          <span>5</span>
        </div>
        <div class="discount-message">
          <div class="message-container">
            <div>先领券再泡汤</div>
            <div>- 门票新客代金券 -</div>
          </div>
        </div>
        <div class="discount-draw">
          <div>立即领取</div>
        </div>
        <div class="circle"></div>
      </div>
    </div>

    <div class="classify-container">
      <div class="classify">
        <ul>
          <li>超值温泉</li>
          <li>山水温泉</li>
          <li>养生温泉</li>
          <li>亲子温泉</li>
          <li>省心一日游</li>
          <li>温泉贴士</li>
        </ul>
      </div>
      <div class="springs-title">
        <span class="left-wire"></span>
        <span class="left-circle"></span>
        <span class="gradient-words">超值温泉</span>
        <span class="right-circle"></span>
        <span class="right-wire"></span>
      </div>
      <div class="module-desc">近千家温泉逐一甄选。价格不高，格调很高；水质、水温、环境、路途、服务...想你所想，为你所选！
      </div>
      <div class="list-content">
        <ul>
          <li class="list-item"  v-for="item in listContent" :key="item.id">
            <a href="#" class="list-link">
              <div class="list-show">
                <img :src="item.imgUrl"/>
                <span class="list-location">{{item.listLocation}}</span>
              </div>
              <div class="list-info">
                <div class="list-name">{{item.listName}}</div>
                <ul class="lighttxt-list">
                  <li>{{item.lighttxtListLi1}}</li>
                  <li>{{item.lighttxtListLi2}}</li>
                </ul>
                <div class="list-price">
                  <span class="list-sale">&yen;
                    <em class="price-num">{{item.priceNum}}</em>
                  </span>
                  <span class="list-cost">{{item.listCost}}</span>
                </div>
                <div class="list-btn">{{item.listBtn}}</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="hotSpringDetails" v-for="item in hotSpringDetails">
      <div class="springs-title waterHotSprings">
        <span class="left-wire"></span>
        <span class="left-circle"></span>
        <span class="gradient-words">{{item.granientWords}}</span>
        <span class="right-circle"></span>
        <span class="right-wire"></span>
      </div>
      <ul class="option-classify">
          <li v-for="i in item.optionClassify">{{i.li}}</li>
          
      </ul>
      <div class="option-text">{{item.optionText}} </div>
      <div v-for="list in item.travelDescribe">
        <div class="topic-img">
          <img :src="list.imgUrl" />
        </div>
        <div class="travelName">
          <div class="travelTheme">{{list.travelTheme}}</div>
          <div class="travelEnvironment">
            <div class="travelPrice">¥<em>{{list.price}}</em></div>
            <ul>
                <li v-for="l in list.ul">{{l.li}}</li>
            </ul>
          </div>
          <div class="traveDescribe">{{list.traveDescribe}}</div>
        </div>
      </div>
      
    </div>
    
    
	</div>
</template>

<script>
  export default {
    name: 'hotSpring',
    data () {
      return {
        listContent: [],
        hotSpringDetails: []
      }
    },

    methods: {
      getHotSpringDate () {
        this.$http.get('./static/hotSpring.json').then(this.handleGetHotSpringDateSucc.bind(this))
      },

      handleGetHotSpringDateSucc (res) {
        console.log(res)
        const body = res.body
        if (body && body.listContent) {
          this.listContent = body.listContent
          this.hotSpringDetails = body.hotSpringDetails
        }
      }
    },

    created () {
      this.getHotSpringDate()
    }
  }
</script>

<style scoped>
  .container {
    background: #f6f6f6;
  }
  .header {
  	height: .88rem;
  	line-height: .88rem;
  	background: #1ba9ba;
  	color: #fff;
  	display: flex;
  }
  .back {
  	width: .88rem;
  	font-size: .56rem;
  	text-align: center;
  }
  .header-content {
  	flex: 1;
  	text-align: center;
  	font-size: .36rem;
  }
  .home-page {
  	width: .88rem;
  	text-align: center;
  	font-size: .32rem;
  }
  .banner {
  	overflow: hidden;
  	width: 100%;
  	height: 0;
  	position: relative;
    padding-bottom: 56.4%;
  }
  .banner-img {
  	width: 100%;
  }
  .img-text {
  	 position: absolute;
  	 top:40%;
  	 width: 100%;
  	 z-index: 2;
  }
  .discount {
  	display: block;
  	width: 100%;
	font-size: .36rem;
  	color: #fff;
  	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  .selective {
  	width: 100%;
    font-size: .44rem;
  	color: #fff;
  	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    margin-top: .2rem;
  }
  .mask-layer {
  	position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
  }
  .palce {
  	position: absolute;
  	top: 34%;
  	
  	color: #fff;
  	font-size: .24rem;
  	
  	right: .2rem;
  	border-radius: 10px;
  	background: rgba(0,0,0,.5);
  }
  .city {
  	position: relative;
  	z-index: 5;
  	color: #fff;
  	font-size: 16px;
  	padding: 0 .24rem;
  }
  .discount-coupon {
    display: flex;
    flex: 1;
    height: 1.6rem;
    margin: 0 10%;
    background: linear-gradient(left, #ffc530, #ff6012);
    position: relative;
  }
  .discount-container {
    width: 100%;
    height: 1.92rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .circle {
    position: absolute;
    height: .3rem;
    width: .3rem;
    border-radius: 50%;
    background: #f6f6f6;
    top: 40%;
    right: -0.15rem;
  }
  .discount-money {
    display: flex;
    width: 25%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .discount-money>span:nth-of-type(1) {
    color: #fff;
    font-weight: bolder;
  }
  .discount-money>span:nth-of-type(2) {
    font-size: 1rem;
    color: #fff;
    font-weight: bolder;
    padding-left: .24rem;
  }
  .discount-draw {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .discount-draw>div {
    width: .28rem;
    color: #fff;
  }
  .discount-message {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px dashed #fff;
  }
  .discount-message>.message-container>div:nth-of-type(1) {
    width: 3.6rem;
    font-size: .36rem;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .discount-message>.message-container>div:nth-of-type(2) {
    width: 3.6rem;
    font-size: .24rem;
    color: #fff;
    text-align: center;
    margin-top: .1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .classify {
    width: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    margin-top: .2rem;
  }
  .classify ul {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: .4rem;
  }
  .classify ul li {
    width: 29%;
    height: .64rem;
    line-height: .64rem;
    text-align: center;
    color: #000; 
    border: 1px solid #e0e0e0;
    margin: .1rem; 
  }
  .classify ul li:first-child {
    color: #ff8a00; 
    border: 1px solid #ff8a00;
  }
  .gradient-words {
    font-size: .36rem;
    background: linear-gradient(to right, #ff9807, #ff4c1a);
    -webkit-background-clip: text;
    color: transparent;
  }
  .springs-title {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-top: .4rem;
  }
  .left-wire {
    width: 1rem;
    height: 1px;
    display: block;
    background: #ff9807;
  }
  .right-wire {
    width: 1rem;
    height: 1px;
    display: block;
    background: #ff4c1a;
  }
  .left-circle {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffa305;
    margin: 0 5px;
  }
  .right-circle {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ff431d;
    margin: 0 5px;
  }
  .classify-container {
    background: #fff;
  }
  .module-desc {
    margin: .1rem 0;
    min-height: .4rem;
    padding: 0 .52rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    text-align: justify;
    margin-top: .2rem;
  }
  .list-item {
    width: 100%;
    height: 2.12rem;
  }
  .list-content ul li:nth-of-type(1) {
    border-bottom: 1px solid #eee;
  }
  .list-show {
    overflow: hidden;
    width: 2rem;
    height: 0;
    padding-bottom: 24%;
  }
  .list-show img {
    width: 100%;
  }
  .list-show {
    float: left;
    margin: .1rem;
    position: relative;
  }
  .list-info {
    float: left;
    width: 70%;
    position: relative;
    height: 1.8rem;
    margin-top: 10px;
  }
  .list-name {
    height: .76rem;
    color: #212121;
    font-size: .32rem;
    line-height: .38rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .lighttxt-list {
    overflow: hidden;
    height: .34rem;
    margin-top: .04rem;
  }
  .lighttxt-list li {
    float: left;
    min-width: .48rem;
    padding: 0 .14rem;
    color: #00afc7;
    font-size: .24rem;
    line-height: .34rem;
  }
  .lighttxt-list li:first-child {
    color: #ff8300;
  }
  .list-price {
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-top: .24rem;
    width: 100%;
    height: .44rem;
    line-height: .44rem;
  }
  .list-sale {
    color: #ff8300;
    font-size: .24rem;
  }
  .list-cost {
    margin-left: .04rem;
    color: #616161;
    font-size: .24rem;
    text-decoration: line-through;
  }
  .list-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1.1rem;
    background: #ff8300;
    color: #fff;
    font-size: .28rem;
    line-height: .56rem;
    text-align: center;
    -webkit-border-radius: .04rem;
    -moz-border-radius: .04rem;
    -o-border-radius: .04rem;
    border-radius: .04rem;
  }
  .list-location {
    overflow: hidden;
    position: absolute;
    top: .1rem;
    left: .1rem;
    max-width: 78%;
    padding: 0 .1rem;
    background: rgba(0,0,0,.5);
    color: #fff;
    font-size: .24rem;
    line-height: .44rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-border-radius: .44rem;
  }
  .hotSpringDetails {
    margin-top: .1rem;
    overflow: hidden;
    background: #fff;
  }
  .waterHotSprings .gradient-words {
    font-size: .36rem;
    background: linear-gradient(to right, #4bdb73, #32cccd);
    -webkit-background-clip: text;
    color: transparent;
  }
  .waterHotSprings .left-wire {
    background: #4bdb73;
  }
  .waterHotSprings .right-wire {
    background: #32cccd;
  }
  .waterHotSprings .left-circle {
    background: #4bdb71;
  }
  .waterHotSprings .right-circle {
    background: #31cbd3;
  }
  .waterHotSprings {
    margin-top: .4rem;
  }
  .option-classify {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: .2rem;
  }
  .option-classify li {
    height: .42rem;
    line-height: .42rem;
    padding: 0 .12rem;
    border: 1px solid red;
    margin-right: .1rem;
  }
  .option-classify li:last-child {
    margin-right: .12rem;
  }
  .option-text {
    margin: .1rem 0;
    min-height: .4rem;
    padding: 0 .52rem;
    color: #616161;
    font-size: .28rem;
    line-height: .4rem;
    text-align: justify;
  }
  .topic-img {
    display: flex;
    justify-content: center;
  }
  .topic-img img {
    width: 94%;
    height: 2.8rem;
  }
  .travelTheme {
    margin-top: .2rem;
    color: #212121;
    font-size: .32rem;
    line-height: .38rem;
  }
  .travelName {
    margin: 0 .2rem;
  }
  .travelEnvironment {
    margin: .08rem 0 .12rem;
  }
  .travelPrice {
    float: right;
    color: #ff8300;
    font-size: .24rem;
    line-height: .4rem;
  }
  .travelEnvironment ul{
    padding: .1rem 0 .04rem;
    overflow: hidden;
    height: .34rem;
  }
  .travelEnvironment ul li {
    float: left;
    min-width: .48rem;
    padding: 0 .14rem;
    color: #00afc7;
    font-size: .24rem;
    line-height: .34rem;
    padding-right: 0;
  }
  .traveDescribe {
    padding: .1rem .2rem;
    background: #f6f6f6;
    color: #616161;
    font-size: .24rem;
    line-height: .34rem;
    -webkit-border-radius: .04rem;
    -moz-border-radius: .04rem;
    -o-border-radius: .04rem;
    border-radius: .04rem;
    margin-bottom: .2rem;
  }
</style>