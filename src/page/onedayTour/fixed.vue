<template>
<div>
<div class="modal-box" v-show="modal" @click="handleModalClick"></div>
	
<div class="flexbox-wrap" v-show="footerFlex">
	<div class="flexbox">
		<ul class="flex-list">
			<li class="flex-item " @click="handleClassifyClick">
				<div class="all-classify iconfont">&#xe60b;</div>
				<div class="all-classifyName">全部分类</div>
			</li>
			<li class="flex-item"  @click="handleChooseClick">
				<div class="all-classify iconfont">&#xe6c4;</div>
				<div class="all-classifyName">筛选</div>
			</li>
			<li class="flex-item"  @click="handleRecommendClick">
				<div class="all-classify iconfont">&#xe641;</div>
				<div class="all-classifyName">推荐排序</div>
			</li>
		</ul>

		<div class="classify-con" v-show="show">
			<div class="classify-flexbox">
				<div class="flexbox-left" ref="classifyBox">
					<ul class="flexbox-left-list">
						<li class="flexbox-left-item" v-for="item in allClassify" :key="item.id">
						{{item.name}}<span>{{item.num}}</span>
						</li>
					</ul>
				</div>
				<div class="flexbox-right"></div>
			</div>
		</div>

		<div class="classify-con filter-con" v-show="Isshow">
			<div class="classify-flexbox filter-flexbox">
				<div class="flexbox-left filter-left" >
					<ul class="flexbox-left-list">
						<li class="flexbox-left-item filter-left-item" @click="handleDestinationClick">
						 目的地
						</li>
						<li class="flexbox-left-item filter-left-item" @click="handleFromplaceClick">
						 出发地
						</li>
					</ul>
				</div>
				<div class="flexbox-right filter-right" ref="filterBox">
					<ul class="filter-right-tolist" v-show="tolist">
						<li class="flexbox-left-item filter-right-item">
						 全部目的地
						</li>
						<li class="flexbox-left-item filter-right-item" v-for="item in destination" :key="item.id">
						 {{item.name}}
						</li>
					</ul>

					<ul class="filter-right-fromlist" v-show="fromlist">
						<li class="flexbox-left-item filter-right-item">
						 全部出发地
						</li>
						<li class="flexbox-left-item filter-right-item">
						 北京
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="classify-con sugg-con" v-show="ok">
			 <div class="flexbox-left " ref="lastBox">
				<ul class="flexbox-left-list sugg-list">
					<li class="flexbox-left-item sugg-item" v-for="item in suggInfo" :key="item.id">
						{{item.item}}
					</li>
					<li class="flexbox-left-item sugg-item"></li>
				</ul>
			</div>
		</div>

	</div>
</div>
</div>

</template>
	

<script>
import BScroll from 'better-scroll'
export default {
  props: ['allClassify', 'destination', 'suggInfo'],
  data: function () {
    return {
      show: false,
      Isshow: false,
      ok: false,
      modal: false,
      tolist: true,
      fromlist: false,
      footerFlex: false,
      arr: []
    }
  },
  methods: {
    handleClassifyClick () {
      this.show = !this.show
      this.Isshow = false
      this.ok = false
      if (this.show && !this.Isshow && !this.ok) {
        this.modal = true
      } else {
        this.modal = false
      }
    },

    handleChooseClick () {
      this.Isshow = !this.Isshow
      this.show = false
      this.ok = false
      if (this.Isshow && !this.show && !this.ok) {
        this.modal = true
      } else {
        this.modal = false
      }
    },

    handleRecommendClick () {
      this.ok = !this.ok
      this.show = false
      this.Isshow = false
      if (this.ok && !this.show && !this.Isshow) {
        this.modal = true
      } else {
        this.modal = false
      }
    },

    handleDestinationClick () {
      this.tolist = true
      this.fromlist = false
    },

    handleFromplaceClick () {
      this.fromlist = true
      this.tolist = false
    },

    handleModalClick () {
      this.modal = false
      this.show = false
      this.Isshow = false
      this.ok = false
    },

    handleScrollChange () {
      this.arr.push(document.body.scrollTop || document.documentElement.scrollTop)
      let i = this.arr.length - 1
      if (this.arr[i] < this.arr[i - 1]) {
        this.footerFlex = true
      } else if (this.show || this.Isshow || this.ok) {
        this.footerFlex = true
      } else {
        this.footerFlex = false
        this.modal = false
        this.show = false
        this.Isshow = false
        this.ok = false
      }
    }
  },

  mounted () {
    this.scroll = new BScroll(this.$refs.classifyBox)
    this.scrollFilter = new BScroll(this.$refs.filterBox)
    this.scrollLast = new BScroll(this.$refs.lastBox)
    window.addEventListener('scroll', this.handleScrollChange)
  },

  watch: {
    allClassify () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    },
    destination () {
      this.$nextTick(() => {
        this.scrollFilter.refresh()
      })
    },
    suggInfo () {
      this.$nextTick(() => {
        this.scrollLast.refresh()
      })
    }
  },

  beforeDestroy () {
    document.body.scroll = document.documentElement.scrollTop = 0
  }
}
</script>

<style scoped>
	
	.modal-box{
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		background: rgba(0,0,0,.45);
	}
	.flexbox-wrap {
		width: 100%;
		height: .8rem;
	    position: fixed;
		left: 0;
		bottom: 0;
	}
	.flexbox {
		position: relative;
		background: rgba(0,0,0,.8);
	}
	.flex-list {
		width: 100%;
		display: flex;
		text-align: center;
	}
	.flex-item {
		flex: 1;
		width: .02rem;
		padding: .08rem .1rem 0;
		color: #fff;
	}
	.all-classify {
		height: .32rem;
		line-height: .32rem;
	}
	.all-classifyName {
		height: .4rem;
		line-height: .4rem;
		font-size: .24rem;
		overflow: hidden;

	}
	.classify-con {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: .8rem;
		background: #fff;
		overflow: hidden;
	}
	.classify-flexbox {
		width: 100%;
		height: 5.28rem;
		display: flex;
	}
	.flexbox-left {
		height: 5.28rem;
		background: #f4f5f6;
		overflow: hidden;
	}
	.flexbox-left-list {
		background: #f4f5f6;
	}
	.flexbox-left-item {
		width: 2.1rem;
		height: .4rem;
		overflow: hidden;
		font-size: .28rem;
		color: #333;
		line-height: .4rem;
		padding: .24rem .1rem;
		padding-left: .3rem;
		padding-right: .5rem;
		background: #fff;
		position: relative;
	}
	.flexbox-left-item:after {
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
		border-color: #e4e6e8;
	}
	.flexbox-left-item span {
		margin-left: .5rem;
		float: right;
	}
	.flexbox-right {
		flex:1;
	}
	.filter-left-item {
		width: 1.6rem;
	}
	.filter-right {
		position: relative;
		height: 5.25rem;
		overflow: hidden;
	}
	.filter-right-tolist {
		position: absolute;

	}
	.filter-right-item {
		flex:1;
	}
	.filter-right-fromlist {
		overflow: hidden;
		height: 2.25rem;
		position: absolute;
	}
	.sugg-list {
		text-align: center;
	}
	.sugg-item {
		width: 100%;
	}
</style>