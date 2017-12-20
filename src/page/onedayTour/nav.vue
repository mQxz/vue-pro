<template>
<div>
	<div class="modal-topbox" v-show="topmodal" @click="handleTopModalClick"></div>
	<div class="classify-wrap">
		<div class="classify-container">
			<h3 class="classify-title"v-show="titleShow">
				游玩景点
				<span class="classify-subtitle">(可多选)</span>
			</h3>
			<div class="classify-list"  :class="{'classify-unfold': isError, 'classify-unfold1': isError}" ref="navClassify">
				<ul class="classify-list-con clearfix"  >
					<li class="classify-list-item" v-for="item in classify" :key="item.id">{{item.name}}</li>
				</ul>
			</div>
			<div class="classify-right" @click="handleClassifyClick">
				<span class="classfity-down iconfont" v-show="show">&#xe63c;</span>
				<span class="classfity-up iconfont" v-show="ok">&#xe631;</span>
			</div>
		</div>
	</div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: ['classify'],
    data: function () {
      return {
        show: true,
        ok: false,
        titleShow: false,
        isError: false,
        topmodal: false,
        scrollX: true
      }
    },
    methods: {
      handleClassifyClick () {
        this.show = !this.show
        this.ok = !this.ok
        this.titleShow = !this.titleShow
        this.isError = !this.isError
        this.topmodal = !this.topmodal
      },
      handleTopModalClick () {
        this.show = true
        this.ok = false
        this.titleShow = false
        this.isError = false
        this.topmodal = false
      }
    },

    mounted () {
      this.scroll = new BScroll(this.$refs.navClassify)
    },

    watch: {
      classify () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    }
  }
</script>

<style scoped>
	.clearfix:after{
		content: ".";
		clear: both;
		display: block;
		height: 0;
		overflow: hidden;
		visibility: hidden;
	}
	.modal-topbox{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 1.68rem;
		background: rgba(0,0,0,.45);
		z-index:2;
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
		padding: .06rem .12rem;
		overflow: hidden;
	
	}
	.classify-unfold {
		position: absolute;
		top: .8rem;
		left: 0;
		width: 100%;
		height: 6rem;
		padding: .08rem .12rem;
		background: #e5e7e8;
		box-sizing: border-box;
		z-index: 3;
	}
	.classify-list-item {
		float: left;
		padding: 0 .18rem;
		background: #fff;
		font-size: .26rem;
		color: #212121;
		min-width: .26rem;
		height: .56rem;
		line-height: .56rem;
		border-radius: .04rem;
		margin: .08rem;
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
	.classfity-down {
		font-size: .28rem;
		color: #aab2b7;
		line-height: .78rem;
	}
	.classfity-up {
		font-size: .28rem;
		color: #aab2b7;
		line-height: .78rem;
	}
</style>