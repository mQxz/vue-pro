<template>
<div>
 <div class='TicketMes' v-for="item in ticketmes" :key="item.id">
         <div class='TicketMes-show'>
           <div class='TicketMes-show-title'>
             <i class='iconfont'>&#xe600;</i>
            {{item.title}}
           </div>

           <div class='TicketMes-show-am' @click='handleDetailClick' >

             <div class='show-am-SurroundBox'>
              <div class='show-am-box'>
                 上午场
                 <span class='show-am-hint'>凭身份证入园</span>    
              </div>
              <div class='show-am-price'>
                <div class='am-price-num'>¥ {{item.amnum}}</div>
                <div class='am-price-text'>起</div>
                <div class='iconfont am-price-icon'>&#xe634;</div>
              </div>
             </div>
             <div class='travel-agency' v-if='ShowDetailInfo'>
              
               <div class='travel-agency-info'>
                 <div class='recommend-Left'>
                   <span class='AgencyName-info'>{{item.AgencyNameinfo1}}</span> 
                    <div class='recommend-Left-Top'>
                      【上午场 刷身份证进入 免排队购票】故宫成人票
                    </div>
                    <div class='recommend-Left-Bottom'>
                      <span class='iconfont'>&#xe600;15:30前可订今日</span>
                      <span class='iconfont'>&#xe600;条件退</span>
                    </div>
                 </div>

                   <div class='recommend-Right'>
                       <div class='recommend-Right-box'>
                         <div class='recommend-Right-Top'>
                          &yen; 
                          <em>120</em>
                          <span class='Right-Top-text'>起</span>
                         </div>
                         <div class='recommend-Right-Bottom'>
                           <a href="#">查看</a>
                         </div>
                       </div> 
                 </div>
              </div>

               <div class='travel-agency-info'>
                 <div class='recommend-Left'>
                   <span class='AgencyName-info'>{{item.AgencyNameinfo}}</span> 
                    <div class='recommend-Left-Top'>
                      【上午场 刷身份证进入 免排队购票】故宫成人票
                    </div>
                    <div class='recommend-Left-Bottom'>
                      <span class='iconfont'>&#xe600;15:30前可订今日</span>
                      <span class='iconfont'>&#xe600;条件退</span>
                    </div>
                 </div>

                   <div class='recommend-Right'>
                       <div class='recommend-Right-box'>
                         <div class='recommend-Right-Top'>
                          &yen; 
                          <em>120</em>
                          <span class='Right-Top-text'>起</span>
                         </div>
                         <div class='recommend-Right-Bottom'>
                           <a href="#">查看</a>
                         </div>
                       </div> 
                 </div>
              </div>
             </div>
           </div>
          <div class='TicketMes-show-am' @click='handleDetailClick1' >
             <div class='show-am-SurroundBox'>
              <div class='show-am-box'>
                 下午场
                 <span class='show-am-hint'>凭身份证入园</span>    
              </div>
              <div class='show-am-price'>
                <div class='am-price-num'>¥ 20</div>
                <div class='am-price-text'>起</div>
                <div class='iconfont am-price-icon'>&#xe634;</div>
              </div>
             </div>

             <div class='travel-agency' v-if='ShowDetailInfo1'>
               <div class='travel-agency-info1'>
                 <div class='recommend-Left'>
                   <span class='AgencyName-info'>旅游啦</span> 
                    <div class='recommend-Left-Top'>
                      【下午场 刷身份证进入 免排队购票】故宫成人票
                    </div>
                    <div class='recommend-Left-Bottom'>
                      <span class='iconfont'>&#xe600;15:30前可订今日</span>
                      <span class='iconfont'>&#xe600;条件退</span>
                    </div>
                 </div>

                   <div class='recommend-Right'>
                       <div class='recommend-Right-box'>
                         <div class='recommend-Right-Top'>
                          &yen; 
                          <em>120</em>
                          <span class='Right-Top-text'>起</span>
                         </div>
                         <div class='recommend-Right-Bottom'>
                           <a href="#">查看</a>
                         </div>
                       </div> 
                 </div>
              </div>

               <div class='travel-agency-info1'>
                 <div class='recommend-Left'>
                   <span class='AgencyName-info'>旅游啦</span> 
                    <div class='recommend-Left-Top'>
                      【下午场 刷身份证进入 免排队购票】故宫成人票
                    </div>
                    <div class='recommend-Left-Bottom'>
                      <span class='iconfont'>&#xe600;15:30前可订今日</span>
                      <span class='iconfont'>&#xe600;条件退</span>
                    </div>
                 </div>

                   <div class='recommend-Right'>
                       <div class='recommend-Right-box'>
                         <div class='recommend-Right-Top'>
                          &yen; 
                          <em>120</em>
                          <span class='Right-Top-text'>起</span>
                         </div>
                         <div class='recommend-Right-Bottom'>
                           <a href="#">查看</a>
                         </div>
                       </div> 
                 </div>
              </div>
             </div>
           </div>
          <div class='TicketMes-show-surplus' @click='handleClick' v-if='ShowFlag1'>
              <div class='show-surplus'>
                 查看剩余产品
                 <i class='iconfont'>&#xe634;</i>
              </div>
           </div>

           
       <div class='TicketMes-show-am' @click='handleDetailClick2' v-if="ShowFlag">
             <div class='show-am-SurroundBox'>
              <div class='show-am-box'>
                 故宫+珍宝馆+钟表馆
                 <span class='show-am-hint'>凭身份证入园</span>    
              </div>
              <div class='show-am-price'>
                <div class='am-price-num'>¥ {{item.SurroundBoxprice}}</div>
                <div class='am-price-text'>起</div>
                <div class='iconfont am-price-icon'>&#xe634;</div>
              </div>
             </div>


             <div class='travel-agency' v-if='ShowDetailInfo2'>
               <div class='travel-agency-info1'>
                 <div class='recommend-Left'>
                   <span class='AgencyName-info'>旅游啦</span> 
                    <div class='recommend-Left-Top'>
                      【下午场 刷身份证进入 免排队购票】故宫成人票
                    </div>
                    <div class='recommend-Left-Bottom'>
                      <span class='iconfont'>&#xe600;15:30前可订今日</span>
                      <span class='iconfont'>&#xe600;条件退</span>
                    </div>
                 </div>

                   <div class='recommend-Right'>
                       <div class='recommend-Right-box'>
                         <div class='recommend-Right-Top'>
                          &yen; 
                          <em>120</em>
                          <span class='Right-Top-text'>起</span>
                         </div>
                         <div class='recommend-Right-Bottom'>
                           <a href="#">查看</a>
                         </div>
                       </div> 
                 </div>
              </div>

               <div class='travel-agency-info' v-if='ShowDetailInfo2'>
                 <div class='recommend-Left'>
                   <span class='AgencyName-info'>旅游啦</span> 
                    <div class='recommend-Left-Top'>
                      【下午场 刷身份证进入 免排队购票】故宫成人票
                    </div>
                    <div class='recommend-Left-Bottom'>
                      <span class='iconfont'>&#xe600;15:30前可订今日</span>
                      <span class='iconfont'>&#xe600;条件退</span>
                    </div>
                 </div>

                   <div class='recommend-Right'>
                       <div class='recommend-Right-box'>
                         <div class='recommend-Right-Top'>
                          &yen; 
                          <em>120</em>
                          <span class='Right-Top-text'>起</span>
                         </div>
                         <div class='recommend-Right-Bottom'>
                           <a href="#">查看</a>
                         </div>
                       </div> 
                 </div>
              </div>
             </div>
           </div>
         </div>
       </div>
    </div>
</template>

<script>
export default {
  props: [
    'ticketmes'
  ],

  data () {
    return {
      ShowDetailInfo: false,
      ShowDetailInfo1: false,
      ShowDetailInfo2: false,
      ShowFlag: false,
      ShowFlag1: true
    }
  },

  methods: {
    handleDetailClick: function () {
      this.ShowDetailInfo = !this.ShowDetailInfo
    },

    handleDetailClick1: function () {
      this.ShowDetailInfo1 = !this.ShowDetailInfo1
    },

    handleDetailClick2: function () {
      this.ShowDetailInfo2 = !this.ShowDetailInfo2
    },

    handleClick: function () {
      this.ShowFlag = true
      this.ShowFlag1 = false
    }
  }
}
</script>

<style>
 .TicketMes {
    margin-top: .2rem;
    background: #fff;
  }
  .TicketMes-show-title {
    padding: .2rem 0;
    border-bottom: 1px solid #ccc;
    color: #333;    
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .TicketMes-show-title>i {
    padding-left: .2rem;
    color: blue;
  }
  .TicketMes-show-am {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: .24rem .2rem; 
    border-bottom: 1px solid #ccc;
  }
  .show-am-box {
    display: flex;

  }
  .show-am-hint {
    font-size: .24rem;
    color: #888;
    
    line-height: .32rem;
    padding-left: .1rem;
  }
  .show-am-price {
    display: flex;
    color: #ff9800;
    height: .4rem;
    padding-right: .2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .32rem;
  }
  .am-price-text {
    font-size: .1rem;
    padding: .05rem 0 0 .1rem;
    color: #9e9e9e;
  }
  .am-price-icon {
    font-size: .1rem;
    padding: .05rem 0 0 .1rem;
    color: #9e9e9e;
  }
  .TicketMes-show-surplus {
    background: #fff;
    display: flex;
    justify-content: center; 
    border-bottom: 1px solid #ccc;
     padding: .3rem 0;
  }
  
  .show-am-SurroundBox {
     display: flex;
     justify-content: space-between;
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
 .info-ul-icon {
    position: absolute;
    right: .5rem;
  }
  .AgencyName-info {
    display: inline-block;
    overflow: hidden;
    max-width: 2.5rem;
    padding: .2rem 0 0 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #666;
  }
  .recommend-Left {
    float: left;
    white-space: normal;
    width: 60%;
    padding: 0 0 .2rem 0;
    line-height: .42rem;
    font-size: .3rem;
 }
 .recommend-Left-Top {
    color: #888;
    font-size: .24rem;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
 }
 .recommend-Left-Bottom>span {
    display: inline-block;
    margin-right: .1rem;
    color: #616161;
    font-size: .24rem;
    line-height: .32rem;
    white-space: nowrap;
 }
 .recommend-Right {
    margin-top: .27rem;
    float: left;
    white-space: normal;
    height: 1.6rem;
    flex: 1;
    line-height: .52rem;
    font-size: .3rem;
    border-left: 1px solid #ccc;
    display: flex;
    justify-content: center;
 }
 
 .recommend-Right-Top {
    color: #ff9800;
    height: .4rem;
    padding-left: .2rem;
    width: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
 }
 .recommend-Right-Top>em {
    margin-left: .04rem;
    font-size: .32rem;
    line-height: .3rem;
 }
 .Right-Top-text {
    display: inline-block;
    color: #9e9e9e;
    font-size: .24rem; 
 }
 .recommend-Right-Bottom {
    width: 1.5rem;
    height: .6rem;
    margin: .1rem .2rem 0 0;
    background: #ff9800;
    color: #fff;
    font-size: .28rem;
    line-height: .6rem;
    text-align: center;
    border-radius: .1rem;
 }
 .recommend-box {
    width: 100%;
    height: 2rem;
    border-bottom: 1px solid #dadada; 
    display: flex;
 }
 .recommend-Right-box {
    width: 1.5rem;
    height: 1.5rem;
 }
 .travel-agency {
    display: block;
    background: #f5f5f5;
 }
 .travel-agency-info {
    display: flex;
    justify-content: sapce-around;
    border-bottom: 1px solid #ccc;
 }
.travel-agency-info1 {
    display: flex;
    justify-content: sapce-around;
    border-bottom: 1px solid #ccc;
 }
</style>