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
			<classify-nav :classify="classify"></classify-nav>

			<main-conter :ticketInfo="ticketInfo" @change="handleChange"></main-conter>

			<fixed-con :allClassify="allClassify" :destination="destination" :suggInfo="suggInfo"></fixed-con>
		</div>
	</div>
</template>
<script>
import ClassifyNav from './nav'
import FixedCon from './fixed'
import MainConter from './main'

export default{
  name: 'onedayTour',
  components: {
    ClassifyNav,
    FixedCon,
    MainConter
  },
  data () {
    return {
      classify: [],
      ticketInfo: [],
      allClassify: [],
      destination: [],
      suggInfo: []
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
      this.allClassify = body.data.allClassify
      this.destination = body.data.destination
      this.suggInfo = body.data.sugg
    },

    handleChange (res) {
      console.log(res)
    }
  },

  created () {
    this.getTourData()
  }
}
</script>
<style scoped>
	html,body{
		height: 100%;
	}
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
		text-align: center;
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
	
	
</style>