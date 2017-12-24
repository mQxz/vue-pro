<template>
  <div class="page-main">
  	<header class="header">
  		<div class="back iconfont">&#xe624;</div>
  		<div class="search">
  			<i class="icon-search iconfont">&#xe68d;</i>
  			<span class="single-line">输入城市/景点/游玩主题</span>
  		</div>
  		<div class="city">北京</div>
  	</header>
    <div>
    	<swiper :options="swiperOption">
          <swiper-slide v-for="item of swiperInfo" :key="item.id">
            <div class="swiper-img-con">
              <img  class="swiper-img" :src="item.imgSrc"/>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

        <swiper :options="iconsOption" class="icons-con">
          <swiper-slide v-for="(pageInfo, index) of pages" :key="index">
            <div class="icon-wrapper">
              <div v-for="item in pageInfo" :key="item.id" class="icon-item">
                <div class="icon-img-con">
                  <img  class="icon-img" :src="item.imgSrc"/>
                </div>
                <div class="icon-img-title">
                  {{item.title}}
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination icons-pagination"  slot="pagination"></div>
        </swiper>

        <ul class="listitem-con border-top">
          <li class="listentrance-item border-right">
            <i class="listentrance-item-icon iconfont">&#xe600;</i>
            {{listentrance.location}}
          </li>
          <li class="listentrance-item">
            <i class="listentrance-item-icon iconfont">&#xe629;</i>
            {{listentrance.sale}}
          </li>
        </ul>
        

        <ul class="activity-con border-top border-bottom">
          <li class="activity-item activity-item-1 border-right" :style="activityInfo[0]">
            <a href="#" class="fulllink"></a>
          </li>
          <li class="activity-item activity-item-2" :style="activityInfo[1]">
            <a href="#" class="fulllink"></a>
          </li>
        </ul>
        
        <div>
          <h2 class="modtitle">热销推荐</h2>
          <div class="hot-con">
            <ul class="hotlist">
             <router-link to="./particulars"> 
              <li class="hot-prod border-bottom" v-for="(hotItem, index) of hotList" :key="hotItem.id">
                <router-link to="/particulars">
                  <div class="hotlist-img-con">
                    <img :src="hotItem.imgSrc" class="hotlist-img">
                  </div>
                  <div class="hotlist-infos">
                    <div class="hotlist-title">{{hotItem.title}}</div>
                    <div class="hotlist-desc">{{hotItem.desc}}</div>
                  </div>
                  <div class="price hotlist-price">
                    ￥
                    <em class="price-num">{{hotItem.price}}</em>
                    <span class="price-text">起</span>
                  </div>
                </router-link>
              </li>
             </router-link>
            </ul>
            <div class="modmore">
              <a href="#">查看所有产品</a>
            </div>
          </div>
        </div>


      <div>
        <h2 class="modtitle">周末去哪儿</h2>
        <div class="productList">
          <div class="product-item" v-for="product of productList" :key="product.id">
            <div class="product-img-con">
              <img :src="product.imgSrc" class="product-img">
            </div>
            <div class="product-info">
              <p class="product-name">{{product.title}}</p>
              <p class="product-desc">{{product.desc}}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="price-desc">
          <span class="iconfont price-desc-icon">&#xe682;</span>
          <div class="price-desc-info">
            <span class="price-desc-highlight">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
          </div>
      </div>
    </div>

    <footer class="footer">
      <div class="main_nav_wrapper"></div>
      <ul class="footer_nav clearfix">
        <li>
          <a href="#">登录</a>
        </li>
        <li>
          <a href="#">我的订单</a>
        </li>
        <li style="display: none">
          <a href="#">个人中心</a>
        </li>
        <li>
          <a href="#">最近浏览</a>
        </li>
        <li>
          <a href="#">关于我们</a>
        </li>
      </ul>

      <ul class="mobile_pc clearfix">
        <li class="active">
          <a href="#">触屏版</a>
        </li>
        <li>
          <a href="#">电脑版</a>
        </li>
      </ul>

      <div class="copyright">
        <span>Qunar 京ICP备05021087</span><a href="#" class="ml25">意见反馈</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      swiperInfo: [],
      iconsInfo: [],
      activityInfo: [],
      hotList: [],
      productList: [],
      listentrance: {
        location: '定位失败',
        sale: '5折泡温泉'
      },
      swiperOption: {
        autoplay: 3000,
        direction: 'horizontal',
        pagination: '.swiper-pagination',
        loop: true
      },
      iconsOption: {
        pagination: '.swiper-pagination'
      }
    }
  },

  computed: {
    pages () {
      const pages = []
      this.iconsInfo.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },

  methods: {
    getIndexDate () {
      this.$http.get('/static/index.json')
        .then(this.handleGetIndexDateSucc.bind(this))
    },

    handleGetIndexDateSucc (res) {
      const body = res.body
      if (body.data.swiper) {
        this.swiperInfo = body.data.swiper
        this.iconsInfo = body.data.icons
        this.activityInfo[0] = `background: url(../../src/assets/img/index/${body.data.activity[0]}) no-repeat center center;background-size: auto 100%;`
        this.activityInfo[1] = `background: url(../../src/assets/img/index/${body.data.activity[1]}) no-repeat center center;background-size: auto 100%;`
        this.hotList = body.data.hots
        this.productList = body.data.product
      }
    }
  },

  created () {
    this.getIndexDate()
  }
}
</script>
<style scoped>
  .page-main {
    background: #f5f5f5;
  }
  .clearfix:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .header {
  	display: flex;
  	background: #05bad5;
  	color: #fff;
  }
  .back {
  	width: 0.64rem;
  	line-height: 0.86rem;
  	text-align: center;
  }
  .search {
  	flex: 1;
  	margin: 0.14rem 0.18rem;
  	padding-left: .64rem;
  	background: #fff;
  	border-radius: 0.1rem;
  	position: relative;
  }
  .search .icon-search {
  	position: absolute;
  	left: .2rem;
  	top: 20%;
  	color: #e4e7ea;
  }
  .search .single-line {
  	line-height: 0.58rem;
  	color: #e4e7ea;
  }
  .city {
  	max-width: 1.1rem;
  	line-height: 0.86rem;
  	margin-right: .56rem;
  	white-space: nowrap;
  	overflow: hidden;
  	text-overflow: clip;
  }
  .city:after {
  	position: absolute;
  	top: .38rem;
  	right: .26rem;
  	content: ""; 
    border-left: .12rem solid transparent;  
    border-right: .12rem solid transparent;  
    border-top: .12rem solid #fff;
  }  
  .swiper-img-con {
  	overflow: hidden;
  	width: 100%;
  	height: 0;
  	padding-bottom: 31.25%;
  }
  .swiper-img {
  	width: 100%;
  }
  .icon-wrapper {
    overflow: hidden;
    height: 3.7rem;
    padding-top: .1rem;
    background: #fff;
  }
  .icon-item {
    float: left;
    width: 25%;
    height: 1.3rem;
    padding-top: .3rem;
    text-align: center;
  }
  .icon-img-con {
    display: inline-block;
    vertical-align: center;
    width: .66rem;
  }
  .icon-img {
    width: 100%;
  }
  .icon-img-title {
    margin-top: .2rem;
  }
  .icons-pagination {
    position: absolute;
    bottom: 6px;
    padding: 0 6px;
    width: 100%;
    text-align: center;
  }
  .listitem-con {
    position: relative;
    height: .98rem;
    background: #fff;
  }
  .listentrance-item {
    position: relative;
    float: left;
    box-sizing: border-box;
    width: 50%;
    line-height: .98rem;
    text-align: center;
  }
  .border-top:before {
    content: '';
    position: absolute;
    background: #e0e0e0;
    top: 0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 0 0;
  }
  .border-right:before {
    content: '';
    position: absolute;
    right: 0;
    background: #e0e0e0;
    width: 1px;
    height: 100%;
    transform: scaleX(0.5);
    transform-origin: 100% 0;
  }
  .activity-con {
    display: flex;
    position: relative;
    margin-top: .2rem;
    height: 1.4rem;
    background: #fff;
  }
  .activity-item {
    position: relative;
    box-sizing: border-box;
    width: 50%;
    height: 1.4rem;
    line-height: 1.4rem;
    background-size: auto 100%;
  }
  .fulllink {
    display: block;
    width: 100%;
    height: 100%;
  }
  .border-bottom:after {
    content: '';
    position: absolute;
    bottom: 0;
    background: #e0e0e0;
    width: 100%;
    height: 1px;
    transform: scaleY(0.5);
    transform-origin: 0 100%;
  }
  .modtitle {
    height: .8rem;
    padding-left: .26rem;
    line-height: .8rem
  }
  .hot-con {
    width: 100%;
    background: #fff;
  }
  .hot-prod {
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 1.4rem;
    padding: .24rem 0;
  }
  .hotlist-img-con {
    position: absolute;
    top: .24rem;
    left: .24rem;
    width: 1.4rem;
    height: 1.4rem;
  }
  .hotlist-img {
    width: 1.4rem;
    height: 1.4rem;
  }
  .hotlist-infos {
    margin-left: 1.84rem;
  }
  .hotlist-title {
    overflow: hidden;
    margin-top: .04rem;
    margin-bottom: .1rem;
    color: #333;
    font-size: .3rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hotlist-desc {
    overflow: hidden;
    margin-bottom: .1rem;
    height: .4rem;
    line-height: .4rem;
    color: #9e9e9e;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hotlist-price {
    margin-left: 1.84rem;
    color: #ff8300;
  }
  .price-num {
    font-size: .36rem;
    padding: 0 .04rem;
  }
  .price-text {
    color: #9e9e9e;
    font-size: .24rem;
  }
  .modmore a{
    display: block;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
  }
  .productList {
    background: #fff;
  }
  .product-item {
    position: relative;
    margin-bottom: .1rem;
    background: #fff;
  }
  .product-img-con {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.4375%;
  }
  .product-img {
    width: 100%;
  }
  .product-info {
    position: relative;
    padding: .14rem .2rem .2rem .2rem;
  }
  .product-name {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #212121;
    font-size: .28rem;
    line-height: .48rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .product-desc {
    overflow: hidden;
    padding-right: 1.4rem;
    color: #616161;
    font-size: .24rem;
    line-height: .42rem;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price-desc {
    margin-top: .1rem;
    padding: .14rem .1rem;
    font-size: .24rem;
    line-height: .32rem;
    background: #fff;
    color: #616161;
  }
  .price-desc-info {
    margin-left: .3rem;
  }
  .price-desc-icon {
    display: block;
    float: left;
    width: .24rem;
    font-size: .2rem;
  }
  .price-desc-highligh {
    font-weight: bold;
  }

  .footer_nav {
    width: 100%;
    height: 39px;
    border-bottom: 1px solid #cacaca;
  }
  .footer_nav li {
    float: left;
    padding-left: 20px;
  }
  .footer_nav li a {
    position: relative;
    color: #25a4bb;
    font-size: 14px;
    line-height: 39px;
  }
  .mobile_pc {
    padding: 10px 0 0 0;
    text-align: center;
  }
  .mobile_pc li {
    display: inline-block;
    margin: 0 15px;
  }
  .mobile_pc li.active a {
    color: #212121;
  }
  .copyright {
    color: #9e9e9e;
    text-align: center;
    font-size: 14px;
    padding: 10px;
  }
  .ml25 {
    color: #9e9e9e;
  }
</style>
