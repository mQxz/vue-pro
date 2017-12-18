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

     <div class='scenic-info'>
       <ul class='scenic-info-ul' v-for="item in scenic" :key="item.id">
         <li class='info-ul-adss'>
           <span class='iconfont info-ul-adss-info'>&#xe629;</span>
           <span class='adss-des'>{{item.adres}}</span>
           <span class='iconfont info-ul-icon'>&#xe600;</span>
         </li>
           
         <li class='info-ul-intro'>
            <span class='iconfont info-ul-adss-infoo'>&#xe629;</span>
           	<span class='adss-des-time'>{{item.des}}</span>
         	<span class='iconfont info-ul-iconn'>&#xe600;</span>
         </li>
       </ul>
     </div>

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

     <div class='recommend'>
       <h1 class='recommend-h1'>
         <i class='iconfont recommend-icon'>&#xe600;</i>
         去哪儿推荐
       </h1>
       <div class='recommend-Left'>
          <div class='recommend-Left-Top'>

          </div>
          <div class='recommend-Left-Bottom'></div>
       </div>
       <div class='recommend-Right'>
          <div class='recommend-Right-Top'></div>
          <div class='recommend-Right-Bottom'></div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'particulars',
  data () {
    return {
      scenic: []
    }
  },

  methods: {
    getIndexDate () {
      this.$http.get('/static/indexParticulars.json')
        .then(this.handleGetIndexDateSucc.bind(this))
    },

    handleGetIndexDateSucc (res) {
      const body = res.body
      if (body.data.scenic) {
        this.scenic = body.data.scenic
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
  .scenic-info {
    width: 100%;
    background: #fff;
    border-radius: .1rem .1rem 0 0;
  }
  .info-ul-icon {
  	position: absolute;
  	right: .5rem;
  }
  .info-ul-iconn {
  	position: absolute;
  	right: .5rem;
  }
  .info-ul-adss {
    position: relative;
    height: .88rem;
    color: #212121;
    line-height: .88rem;
    padding-left: .2rem;
  }
  .adss-des {
    padding-left: .6rem;
    display: inline-block;
    width: 4.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .adss-des-time {
    padding-left: .6rem;
    display: inline-block;
    width: 4.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .info-ul-adss-info {
    position: absolute;
  }
  .info-ul-adss-infoo {
    position: absolute;
  }
  .info-ul-intro {
    position: relative;
    height: .88rem;
    color: #212121;
    line-height: .88rem;
    padding-left: .2rem;
  }
  .sundry-list-grade {
    position: relative;
    margin-top: .2rem;
    background-color: #fff;
    height: .8rem;
    line-height: .8rem;
  }
  .list-grade-icon {
    padding-left: .2rem; 
    color: blue;
  }
  .list-grade-five {
    padding-left: .2rem; 
    color: orange;
  }
  .list-grade-num {
    padding-left: .2rem; 
    color: orange;
  }
  .list-grade-evaluate {
    position:absolute;
    right:.5rem;	
    font-size: .28rem;
    color: #9e9e9e;
    width: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sundry-list-inform {
    position: relative;
    margin-top: .2rem;
    background-color: #fdeede;
    height: .8rem;
    line-height: .8rem;
    color: #f1441a;
  }
  .inform-icon {
    position: absolute;
    padding: 0 .2rem;

  }
 .inform-des { 
 	  display: inline-block;
 	  padding-left: .8rem;
    width: 4.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 } 
 .recommend {
    margin-top: .2rem;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #fff;
    padding-top : .2rem;
 }
 .recommend-icon {
    color: pink;
    padding: .2rem 0 0 .2rem;
 }

 .recommend-h1 {
   display: block;
   width: 100%;
   height: .5rem;
   position: relative;
 }
 .recommend-h1::before { 
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #dadada; 
 }
</style>
