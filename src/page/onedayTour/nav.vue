<template>
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
			<transition name="fade"  :duration="10000">
				<span class="classfity-updown iconfont">&#xe63c;</span>
			</transition>
		</div>
	</div>
</div>
</template>

<script>
	export default {
	  props: ['classify'],
	  methods: {
	    handleClassifyClick () {
	      alert(123)
	    }
	  }

	}
</script>

<style scoped>

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
</style>