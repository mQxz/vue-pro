<template>
  <div class="happy">
    <div class="happy-title-img">
      <img src="//img1.qunarzz.com/piao/fusion/1705/1b/3ecc7df173c43d02.png" alt="">
    </div>
    <div class="happy-list clearfix">
      <div class="happy-item" v-for="nameandimg in ticketType">
        <div class="happy-item-info">
          <div class="happy-imgcon">
            <img :src="nameandimg.imgUrl" alt="">
          </div>
          <p>{{nameandimg.name}}</p>
        </div>
        <ul class="ticket-type-list">
          <li v-for="item in nameandimg.ticketInfo" class="ticket-type-item" :key="item.id">
            <a href="#">
              <p class="ticket-type">{{item.type}}</p>
              <div class="ticket-price">
                <span>&yen;
                  <span class="ticket-price-num">{{item.price}}</span>
                  <span class="ticket-price-start">起</span>
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="package-item">
      <div class="package-item-info">
        <div class="package-imgcon">
          <img :src="disneyPackage.imgUrl" alt="">
        </div>
        <p>{{disneyPackage.name}}</p>
      </div>
      <ul class="package-type-list">
        <li v-for="item in disneyPackageList" class="ticket-type-item package-type-item" :key="item.id">
          <a href="#">
            <p class="package-type ticket-type">{{item.type}}</p>
            <div class="package-price">
              <span>&yen;
                <span class="ticket-price-num">{{item.price}}</span>
                <span class="ticket-price-start">起</span>
              </span>
              <span class="ticket-book">预订</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['ticketType', 'disneyPackage', 'disneyPackageList']
  }
</script>

<style scoped>
  .happy{
    background-color: #ffb300;
    padding-bottom: .26rem;
    position: relative;
  }
  .happy-title-img{
    position: absolute;
    top: -0.48rem; 
  }
  .happy-title-img img{
    width: 100%;
  }
  .happy-list{
    padding: 0 0.14rem;
    margin-bottom: 0.1rem;
  }
  .happy-item{
    overflow: hidden;
    float: left;
    width: 50%;
  }
  .happy-item-info{
    overflow: hidden;
    margin: 0 .04rem;
    border-top-left-radius: .04rem;
    border-top-right-radius: .04rem;
  }
  .happy-item-info p{
    height: .42rem;
    background: #fe8a71;
    color: #fff;
    font-size: .28rem;
    line-height: .42rem;
    text-align: center;
  }
  .happy-imgcon{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 78.8%;
  }
  .happy-imgcon img{
    width: 100%;
  }
  .ticket-type-list{
    width: 100%;
  }
  .ticket-type-item{
    border-bottom: .02rem dashed #e3e3e3;
    margin: 0  0.04rem;
    padding: .08rem 0;
    background: #fff;
  }
  .ticket-type{
    margin-left: 0.1rem;
  }
  .ticket-type{
    height: .3rem;
    color: #000;
    font-size: .26rem;
    line-height: .32rem;
    margin-bottom: 0.1rem;
  }
  .ticket-price{
    position: relative;
    color: #fe2e1e;
    font-size: .18rem;
    text-align: right;
  }
  .ticket-price-num{
    font-size: .34rem;
  }
  .ticket-price-start{
    color: #666;
  }
  .ticket-book{
    display: inline-block;
    width: .86rem;
    height: .36rem;
    background: #fe2e1e;
    color: #fff;
    font-size: .24rem;
    line-height: .36rem;
    text-align: center;
    border-radius: .04rem;
    margin: 0 0.1rem;
  }
  .package-item{
    padding: 0 .18rem;
  }
  .package-imgcon{
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 44.205%;
  }
  .package-imgcon img{
    width: 100%;
  }
  .package-item-info p{
    height: .42rem;
    background: #fe8a71;
    color: #fff;
    font-size: .28rem;
    line-height: .42rem;
    text-align: center;
  }
  .package-type{
    margin-bottom: .1rem;
    height: .34rem;
    font-size: .28rem;
    color: #000;
  }
  .package-price{
    position: relative;
    color: #fe2e1e;
    font-size: .18rem;
    margin-left: 0.1rem;
  }
  .package-type-list .ticket-book{
    position: absolute;
    right:0.04rem;
    width: 1.16rem;
  }
</style>