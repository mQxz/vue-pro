<template>
  <div class='mp-page'>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
     <header>
       <div class='mp-headfigure'>
         <router-link to='/'>
         <div class='mp-headfigure-icon'>
           <div class='headfigure-icon-shown'></div>
           <div class='iconfont headfigure-icon-icon'>&#xe634;</div>
         </div>
         </router-link>
         <div class='mp-headfigure-img'>
           <img src='http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg'>
         </div>
         <div class='mp-headfigure-title'>
           <div class='headfigure-title-des'>故宫(AAAAA景区)</div>
           <div class='headfigure-title-shown'>
             <span class='iconfont'>&#xe634;</span>
             <span class='headfigure-title-num'>10</span>
           </div> 
         </div>
       </div>
     </header>

     <scenic-con :scenic='scenic'></scenic-con>

     <div class='sundry'>
       <ul class='sundry-list'>
          <li class='sundry-list-grade'>
            <span class='iconfont list-grade-icon'>&#xe600;</span>
            <span class='iconfont list-grade-five'>&#xe600;&#xe600;&#xe600;&#xe600;&#xe600; </span>
            <span class='list-grade-num'>5.0分</span>
            <span class='list-grade-evaluate'>169950评论> </span>
          </li>

          <li class='sundry-list-inform'>
            <span class='inform-icon iconfont'>&#xe634;</span>
            <span class='inform-des'>除法定节假日，故宫博物院实行周一闭馆。</span>
            <span class='iconfont info-ul-icon'>&#xe600;</span>
          </li>
       </ul>
     </div>

     <recommend-con :recommend='recommend'></recommend-con>
     <ticketmes-con :ticketmes='ticketmes'></ticketmes-con>
     <usercomment-con :usercomment='usercomment'></usercomment-con>
     
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
import ScenicCon from './scenic'
import RecommendCon from './recommend'
import TicketmesCon from './ticketmes'
import UsercommentCon from './usercomment'
export default {
  components: {
    RecommendCon,
    ScenicCon,
    TicketmesCon,
    UsercommentCon
  },
  name: 'particulars',
  data () {
    return {
      scenic: [],
      recommend: [],
      ticketmes: [],
      usercomment: [],
      userothers: []
    }
  },

  methods: {
    getIndexDate () {
      this.$http.get('/static/indexParticulars.json')
        .then(this.handleGetIndexDateSucc.bind(this))
    },

    handleGetIndexDateSucc (res) {
      console.log(res)
      const body = res.body
      if (body.data.scenic) {
        this.scenic = body.data.scenic
        this.recommend = body.data.recommend
        this.ticketmes = body.data.ticketmes
        this.usercomment = body.data.usercomment
        this.userothers = body.data.UserOthers
      }
    }
  },

  created () {
    this.getIndexDate()
  }
}
</script>

<style scoped>
  .mp-page { 
    width: 100%;
    min-height: 100%;
    background: #ccc;
  }
  .mp-headfigure {
    position: relative;
  }
  .headfigure-icon-shown {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: .72rem;
    height: .72rem;
    background-color: #000;
    opacity: .5;
    border-radius: .36rem;
  }
  .headfigure-icon-icon {
    position: absolute;
    left: .2rem;
    top: .2rem;
    color: #fff;
  }
  .mp-headfigure-icon {
    position: absolute;
    left: .1rem;
    top: .1rem;
  }
  .mp-headfigure-img {
    width: 100%;
  }
   .mp-headfigure-img>img {
    width: 100%;
  }
  .mp-headfigure-title {
    position: absolute;
    right: .2rem;
    bottom: .26rem;
    left: .2rem;
    min-height: .4rem;
  }
  .headfigure-title-des {
    margin-right: 1.4rem;
    line-height: .4rem;
    color: #fff;
    font-size: .32rem;
    display: inline-block;
    width: 4.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .headfigure-title-shown {
    position: absolute;
    right: 0;
    top: 0;
    width: 1.2rem;
    height: .4rem;
    background: rgba(0,0,0,.5);
    border-radius: .2rem;
    font-size: .24rem;
    color: #fff;
    line-height: .4rem;
    text-align: center;
  }
  .mp-headfigure-title .iconfont {
    color: #fff;
    font-weight: 600;
  }
  .headfigure-title-num {
    color: #fff;
  }
  .footer {
    background: #fff;
  }
  .footer_nav {
    width: 100%;
    height: .39rem;
    border-bottom: 1px solid #cacaca;
  }
  .footer_nav li {
    float: left;
    padding-left: .20rem;
  }
  .footer_nav li a {
    position: relative;
    color: #25a4bb;
    font-size: .14rem;
    line-height: .39rem;
  }
  .mobile_pc {
    padding: .1rem 0 0 0;
    text-align: center;
  }
  .mobile_pc li {
    display: inline-block;
    margin: 0 .15rem;
  }
  .mobile_pc li.active a {
    color: #212121;
  }
  .copyright {
    color: #9e9e9e;
    text-align: center;
    font-size: .14rem;
    padding: .1rem;
  }
  .ml25 {
    color: #9e9e9e;
  }
</style>
