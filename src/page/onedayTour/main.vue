<template>
	<div>
	 <div class="ticket-warp">
		<ul class="ticket-list">
			<li class="ticket-list-item" v-for="item in ticketInfo" :key="item.id">
				<div class="ticket-list-img">
					<img class="ticket-img" :src="item.imgurl" alt="">
				</div>
				<div class="ticket-list-con">
					<h3 class="ticket-produceName">{{item.proname}}</h3>
					<div class="ticket-taglist">
						 <span class="taglist-left">{{item.tagleft}}</span>
						 <span class="taglist-mid">{{item.tagmid}}</span>
						 <span class="taglist-right">{{item.tagright}}</span>
					</div>
					<div class="ticket-priceInfo">
						&yen{{item.price}}
						<span>起</span>
					</div>
					<div class="ticket-sellInfo">已售{{item.alreadySell}}</div>
				</div>
			</li>
		</ul>
	</div>

	<div class="pagination-con-wrap">
		<div class="pagination-con">
			<div class="pagination">
				<div class="pag-pre pag-btn" @click="handlePreClick">上一页</div>
				<p class="pag-num">
				<span ref="pagleft" class="pagleft">1</span>&nbsp;/
				<span ref="pagright" class="pagright">2</span>&nbsp;
				</p>
				<div class="pag-next pag-btn" @click="handleNextClick">下一页</div>
			</div>
			<p class="pag-otherInfo">去哪儿门票</p>
		</div>
	 </div>
	</div>
</template>

<script>
	export default {
	  props: ['ticketInfo'],
	  methods: {
	    handlePreClick: function () {
	      if (parseInt(this.$refs.pagleft.innerHTML) === 1) {
	        this.$refs.pagleft.innerHTML = 1
	      } else {
	        this.$refs.pagleft.innerHTML = parseInt(this.$refs.pagleft.innerHTML) - 1
	      }
	      this.$emit('change', this.$refs.pagleft.innerHTML)
	    },
	    handleNextClick: function () {
	      this.$refs.pagleft.innerHTML = parseInt(this.$refs.pagleft.innerHTML) + 1
	      this.$emit('change', this.$refs.pagleft.innerHTML)
	    }
	  }
	}
</script>

<style scoped>
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
		font-size: .28rem;
		color: #ff8300;
		font-weight: bold;

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
	.pagination-con-wrap {
		margin: .2rem 0;
		line-height: 0.82rem;
		text-align: center;
	}
	.pagination-con {
		color: #00afc7;
        line-height: .82rem;
        text-align: center;
	}
	.pagination {
		width: 100%;
		height: .7rem;
	}
	.pag-btn {
		width: 1.4rem;
		float: left;
		margin-top: .06rem;
		line-height: .6rem;
		color: #fff;
		background: #bdbdbd;
		border-radius: .06rem;

	}
	.pag-pre {
		margin-left: 1.7rem;
	}
	.pag-next {
		color: #00afc7;
		background: #fff;
		border: .02rem solid #00afc7;
	}
	.pag-num {
		float: left;
		font-size: .28rem;
		line-height: .8rem;
		color: #212121;
		padding: 0 .48rem;
	}
	.pag-otherInfo {
		width: 100%;
		font-size: .3rem;
		color: #00afc7;
		line-height: .3rem;
		padding-top: .15rem;
	}
	
</style>