<template>
	<div class="page-main">
		<header class="header">
			<div class="back iconfont">&#xe624;</div>
			<div class="search">
				<input class="single-line" type="text" value="一日游"></input>
				<div class="delete-con"></div>
			</div>
			<div class="search-txt">搜索</div>
		</header>

		<div class="mp-main">
			<div class="classify-wrap">
				<div class="classify-container">
					<h3 class="classify-title">
						游玩景点
						<span class="classify-subtitle">(可多选)</span>
					</h3>
					<div class="classify-list">
						<ul class="classify-list-con"  >
							<li class="classify-list-item" v-for="item in classify" :key="item.id">{{item.name}}</li>
						</ul>
					</div>
					<div class="classify-right" @click="handleClassifyClick">
						<span class="classfity-updown iconfont">&#xe63c;</span>
					</div>
				</div>
			</div>

			<div class="ticket-warp">
				<ul class="ticket-list">
					<li class="ticket-list-item">
						<div class="ticket-list-img">
							<img class="ticket-img" src="http://img1.qunarzz.com/p/tts2/1707/43/8250a273d1946502.jpg_110x110_532f0563.jpg" alt="">
						</div>
						<div class="ticket-list-con">
							<h3 class="ticket-produceName">[配无线耳麦]天安门＋故宫*赠珍宝馆＋八达岭长城＋鸟巢一日游</h3>
							<div class="ticket-taglist">
								 <span class="taglist-left">北京出发</span>
								 <span class="taglist-mid">无自费</span>
								 <span class="taglist-right">无购物</span>
							</div>
							<div class="ticket-priceInfo">
								&yen148
								<span>起</span>
							</div>
							<div class="ticket-sellInfo">已售556</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default{
  name: 'onedayTour',
  data () {
    return {
      classify: [],
      ticketInfo: []
    }
  },

  methods: {
    getTourData () {
      this.$http.get('/static/tourData.json')
        .then(this.handleGetTourDataSucc.bind(this))
    },

    handleGetTourDataSucc (res) {
      const body = res.body
      this.classify = body.data.classify
      this.ticketInfo = body.data.ticket
      console.log(this.ticketInfo)
    },

    handleClassifyClick () {
      alert(123)
    }
  },

  created () {
    this.getTourData()
  }

}
</script>
<style scoped>
	.page-main {
		background: #f5f5f5;
	}
	.header {
		display: flex;
		width: 100%;
		height: .88rem;
		background: #00bcd4;
	}
	.back {
		width: .64rem;
		line-height: .88rem;
		color: #fff;
	}
	.search {
		flex: 1;
		margin: .14rem .18rem;
		background: #fff;
		border-radius: .1rem;
		position: relative;
	}
	.single-line {
		border: none;
		padding-left: .1rem;
		color: #0d0d0d;
		line-height: .58rem;
		font-family: "Microsoft Yahei",Arial;
	}
	.delete-con {
		position: absolute;
		top: .04rem;
		right: 0;
		width: .58rem;
		height: .58rem;
		background:url(//simg1.qunarzz.com/piao/images/touch/v2/sprites.png) -.48rem .1rem no-repeat;
		background-size: 3rem 3rem;
	}
	.search-txt {
		width: .74rem;
		font-size: .28rem;
		color: #fff;
		line-height: .88rem;
	}
	.classify-wrap {
		height: .8rem;
	}
	.classify-container {
		position: relative;
		background: #e5e7e8;
	}
	.classify-container::after {
		content: '';
	    top: .8rem;
	    width: 100%;
	    height: 1px;
	    position: absolute;
	    background: #bfc6ca;
	    transform: scaleY(0.5);
	    transform-origin: 0 0;
	}
	.classify-title {
		position: relative;
		display: none;
		font-size: .28rem;
		line-height: .8rem;
		color: #212121;
		text-indent: .2rem;
	}
	.classify-title::after {
		content: '';
		width: 100%;
		height: 1px;
		position: absolute;
		top: .8rem;
		background: #d7dbde;
		transform: scaleY(0.5);
		transform-origin: 0 0;
	}
	.classify-subtitle {
		font-size: .24rem;
	}
	.classify-list {
		box-sizing: border-box;
		position: absolute;
		left: 0;
		width: 100%;
		height: .79rem;
		max-height: 6rem;
		background: #e5e7e8;
		padding: .14rem .12rem;
		overflow: auto;
		overflow-y: hidden;
	}
	.classify-list-con {
		width: 15108rem;
		height: .6rem;
		overflow: auto;
		
	}
	.classify-list-item {
		position: relative;
		float: left;
		padding: 0 .18rem;
		background: #fff;
		font-size: .26rem;
		color: #212121;
		min-width: .26rem;
		line-height: .56rem;
		border-radius: .04rem;
		margin: 0 .08rem;
		text-align: center;
		
	}
	.classify-right {
		width: .8rem;
		height: .78rem;
		position: absolute;
		top: 0;
		right: 0;
		background: #e5e7e8;
		text-align: center;
	}
	.classify-right::after {
		position: absolute;
		left: 0;
		top: 0;
		width: 1px;
		height: 100%;
		content: '';
		overflow: hidden;
		transform: scaleX(0.5);
		transform-origin: 0 0;
		border-left: 1px solid #eaeaea;

	}
	.classfity-updown {
		font-size: .28rem;
		color: #aab2b7;
		line-height: .78rem;
	}
	.ticket-list {
		background: #fff;
	}
	.ticket-list-item {
		display: flex;
		width: 100%;
	}
	.ticket-list-img {
		width: 1.6rem;
		height: 1.6rem;
		margin: .2rem;
	}
	.ticket-img {
		width: 1.6rem;
		height: 1.6rem;
	}
	.ticket-list-con {
		flex: 1;
		height: 1.6rem;
		overflow: hidden;
		position: relative;
		padding: .2rem .2rem .2rem 0;
	}
	.ticket-list-con:after {
		position: absolute;
		content: '';
		width: 100%;
		height: 1px;
		overflow: hidden;
		left: 0;
		bottom: 0;
		border-bottom: 1px solid #eaeaea;
		transform: scaleY(.5);
		transform-origin: 0 100%;
		border-color: #c9cccd;
	}
	.ticket-produceName {
		font-size: .3rem;
		line-height: .36rem;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.ticket-taglist {
		position: relative;
	    top: .06rem;
	    overflow: hidden;
	    max-height: .58rem;
	    margin-right: 1rem;
	    padding-top: .06rem;
	    line-height: .24rem;
	}
	.taglist-left {
		position: relative;
		padding: 0 .1rem;
	    font-size: .24rem;
	    line-height: .24rem;
	    color: #00bcd4;
	}
	.taglist-left:after {
		position: absolute;
		content: '';
		width: 1px;
		height: 100%;
		overflow: hidden;
		right: 0;
		border-bottom: 1px solid #eaeaea;
		transform: scaleX(.5);
		transform-origin: 0 100%;
		border-color: #c9cccd;
	}
	.taglist-mid {
		padding: 0 .1rem;
	    font-size: .24rem;
	    line-height: .24rem;
	    color: #616161;
	     
	}
	.taglist-right {
		left: 1.2rem;
	    padding: 0 .1rem;
	    font-size: .24rem;
	    line-height: .24rem;
	    color: #616161;
	}
	.ticket-priceInfo {
		height: .32rem;
		position: absolute;
		right: .2rem;
		bottom: .48rem;
		line-height: .32rem;
		text-align: right;
		font-size: .22rem;
		color: #ff8300;
		font-weight: 600;

	}
	.ticket-priceInfo span {
		font-size: .24rem;
		color: #9e9e9e;
		margin-left: .02rem;
	}
	.ticket-sellInfo {
		position: absolute;
		left: 0;
		bottom: .2rem;
		font-size: .22rem;
		color: #9e9e9e;
	}


</style>