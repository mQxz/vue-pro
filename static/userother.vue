<template>
 <div>
     <div class="UserOthers">
       <div class="UserTitle">
         <div class="UserTitle-desc">
           看了该景点的人还看了
         </div>

         <div class="UserTitle-box" v-for="item in userothers">
           <div class="box-left">
             <img :src="item.imgUrl">
           </div>
           <div class="box-right">
             <div class="right-top">
               <div class="right-top-adress">{{item.adress}}</div>
               <span class="right-top-left">
                 <span class="right-top-price">¥ {{item.price}}</span>
                 <span class="right-top-text">起</span> 
               </span>
             </div>
             <div class="right-center">
               <span class="iconfont right-center-icon">&#xe600;&#xe600;&#xe600;&#xe600;&#xe600;</span>
               <span class="right-center-evaluate">{{item.num}}</span>
             </div>
             <div class="right-bottom">
               {{item.place}}
             </div>
           </div>
         </div>
       </div>
     </div>
 </div>
<template>

<script>
  exprot defaule {
    'userother'
  }
<script>

<style scope>
  .UserOthers {
    margin-top: .2rem;
    background: #fff;
  }
  .UserTitle-desc {
    padding: .2rem;
  }
  .UserTitle {
    position: relative;
  }
  .UserTitle-desc {
    padding-left: .4rem; 
  }
  .UserTitle-desc::after {
    content: " ";
    position: absolute;
    top: .22rem;
    left: .2rem;
    width: .06rem;
    height: .25rem;
    background: #1ba9ba;
    border-radius: .04rem;
  }
  .box-left {
    width: 1.62rem;
    height: 1.62rem;
  }
  .box-left>img {
    width: 100%;
    height: 100%;
  }
  .UserTitle-box {
    margin: .2rem .2rem 0 .2rem;
    display: flex;
  }
  .box-right {
    margin-left: .1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;  
  }
  .right-top {
    padding: .1rem;
    display: flex;
    justify-content: space-between; 
    padding-right: .2rem;
  }
  .right-top-adress {
    width: 3rem; 
    line-height: .4rem;
    font-size: .3rem;
    color: #212121;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .right-top-price {
    color: #ff9800; 
    white-space: nowrap;
  }
  .right-top-text {
    padding:.05rem 0 0 .1rem;
    font-size: .15rem;
  }
  .right-center-icon {
    color: #ff9800;
    font-size: .4rem;
  }
  .right-center-evaluate {
    line-height: .28rem;
    font-size: .24rem;
    color: #9e9e9e;
  }
  .right-top-left {
    display: flex;
    justify-content: space-between; 
  }
  .right-bottom {
    padding: 0 .04rem 0 .1rem;
  }
</style>